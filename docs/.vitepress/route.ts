import results from "../../scripts/autoGenerateRoutes";
console.log("result---", JSON.stringify(results));

export const navItems = [
	{ text: "Home", link: "/" },
	{ text: "Examples", link: "/examples/markdown-examples" },
];

export const sidebarItems = [...results]

// export const sidebarItems = [
// 	{
// 		text: "Examples",
// 		items: [
// 			{ text: "Markdown Examples", link: "/markdown-examples" },
// 			{ text: "Runtime API Examples", link: "/api-examples" },
// 		],
// 	},
// 	{
// 		text: "Vue",
// 		items: transformSidebarItems([
// 			["Geeker Admin", "/vue/geeker-admin"],
// 			["Element Plus", "/vue/element-plus"],
// 		]),
// 	},
// 	{
// 		text: "React",
// 		items: transformSidebarItems([["Maskbook", "/react/maskbook"]]),
// 	},
// ];
