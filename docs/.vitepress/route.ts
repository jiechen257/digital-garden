import { transformSidebarItems } from "../../shared/tool";

export const navItems = [
	{ text: "Home", link: "/" },
	{ text: "Examples", link: "/markdown-examples" },
];

export const sidebarItems = [
	{
		text: "Examples",
		items: [
			{ text: "Markdown Examples", link: "/markdown-examples" },
			{ text: "Runtime API Examples", link: "/api-examples" },
		],
	},
	{
		text: "Vue",
		items: transformSidebarItems([
			["Geeker Admin", "/vue/geeker-admin"],
			["ElementPlus", "/vue/element-plus"],
		]),
	},
	{
		text: "React",
		items: transformSidebarItems([["Maskbook", "/react/maskbook"]]),
	},
];
