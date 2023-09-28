::: info
source code: https://github.com/HalseySpicy/Hooks-Admin

tech stack: React18 + TypeScript + Redux + react-router + antd4 + vite
:::

## import.meta.globEager

vite 中的方法，可以一次性导入多个文件，返回一个对象，key 为文件名，value 为文件内容

```js
import.meta.globEager("./**/*.js");
```

等价于

```js
const modules = {
	"./a.js": () => import("./a.js"),
	"./b.js": () => import("./b.js"),
	"./c.js": () => import("./c.js"),
};
```

## axios 的封装方式

使用 class 类封装，返回时 `return new Class()` 实例

```ts
const config = {}

class RequestHttp {
  service: AxiosInstance;
  constructor(config) {
    // ...
    this.service = axios.create(config)
    this.service.interceptors.request.use(
      (config) => {
        // ...
        return config
      },
      (error) => {
        // ...
        return Promise.reject(error)
      }
    )
    this.service.interceptors.response.use(
      (response) => {
        // ...
        return response
      },
      (error) => {
        // ...
        return Promise.reject(error)
      }
    )
    )
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> => {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, data?: object, _object = {}): Promise<ResultData<T>> => {
    return this.service.post(url, data, _object)
  }
  put<T>(url: string, data?: object, _object = {}): Promise<ResultData<T>> => {
    return this.service.put(url, data, _object)
  }
  delete<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> => {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new RequestHttp(config)
```

## serviceLoading

```ts
import ReactDOM from "react-dom/client";
import Loading from "@/components/Loading";

let needLoadingRequestCount = 0; // 请求计数器

// * 显示loading
export const showFullScreenLoading = () => {
	if (needLoadingRequestCount === 0) {
		let dom = document.createElement("div");
		dom.setAttribute("id", "loading");
		document.body.appendChild(dom);
		ReactDOM.createRoot(dom).render(<Loading />);
	}
	needLoadingRequestCount++; // 每个请求出现增加一次计数
};

// * 隐藏loading
export const tryHideFullScreenLoading = () => {
	if (needLoadingRequestCount <= 0) return;
	needLoadingRequestCount--;
	if (needLoadingRequestCount === 0) {
		// 请求全部结束后再 close loading
		document.body.removeChild(
			document.getElementById("loading") as HTMLElement
		);
	}
};
```

## 全局主题颜色切换

```ts
import defaultTheme from "@/styles/theme/theme-default.less"; // 默认模式样式文件
import darkTheme from "@/styles/theme/theme-dark.less"; // 暗黑模式样式文件
import { ThemeConfigProp } from "@/redux/interface";

const useTheme = (themeConfig: ThemeConfigProp) => {
	const { weakOrGray, isDark } = themeConfig;
	const initTheme = () => {
		// 灰色和弱色切换
		const body = document.documentElement as HTMLElement;
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak")
			body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray")
			body.setAttribute("style", "filter: grayscale(1)");

		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			// 删掉已有的 dark 样式文件
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "dark")
					getStyle[i].remove();
			}
		}
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "dark";
		styleDom.innerHTML = isDark ? darkTheme : defaultTheme; // 判断当前的模式，插入对应的样式文件
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme,
	};
};
```

## 类型声明

依赖包类型声明文件不全，需要自己补充
——逃逸大法

```ts
declare module "qs";
declare module "nprogress";
declare module "js-md5";
declare module "react-transition-group";
```

## 全屏工具 screenFull

via:

- https://github.com/sindresorhus/screenfull
- [FullScreen API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API)

```js
import screenfull from "screenfull";

if (screenfull.isEnabled) {
	screenfull.toggle();
}
```

## 引导页

使用 driver.js, via: https://github.com/kamranahmedse/driver.js

```js
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver({
	showProgress: true,
	steps: [
		{
			element: ".page-header",
			popover: { title: "Title", description: "Description" },
		},
		{
			element: ".top-nav",
			popover: { title: "Title", description: "Description" },
		},
		{
			element: ".sidebar",
			popover: { title: "Title", description: "Description" },
		},
		{
			element: ".footer",
			popover: { title: "Title", description: "Description" },
		},
	],
});

driverObj.drive();
```
