import * as fs from "fs";
import * as path from "path";

// 获取当前路径下 './docs' 目录中的文件夹名，排除 .vitepress 和 public 文件夹
const docsPath = "./docs";
const excludedFolders = [".vitepress", "public"];
const folderNames = fs
	.readdirSync(docsPath, { withFileTypes: true })
	.filter((item) => item.isDirectory() && !excludedFolders.includes(item.name))
	.map((item) => item.name);

// 定义数据结构
interface Item {
	text: string;
	link: string;
}

interface Folder {
	text: string;
	items: Item[];
}

// 将字符串转换为首字母大写并用空格分隔单词的函数
function titleCase(str: string): string {
	return str
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

// 构建导出的数组
const result: Folder[] = folderNames.map((folderName) => {
	// 获取文件夹下的所有文件名
	const folderPath = path.join(docsPath, folderName);
	const fileNames = fs.readdirSync(folderPath);

	// 构建 items 数组对象
	const items: Item[] = fileNames.map((fileName) => ({
		text: titleCase(fileName.replace(/\.\w+$/, "")), // 移除文件扩展名，并进行标题格式处理
		link:'/' + path.join(folderName, fileName.replace(/\.\w+$/, '')) // 添加 / 符号并移除文件扩展名
	}));

	// 返回每个文件夹的对象
	return {
		text: titleCase(folderName), // 对文件夹名进行标题格式处理
		items,
	};
});

// 导出结果数组
export default result;
