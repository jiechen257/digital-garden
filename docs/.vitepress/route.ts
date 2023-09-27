import results from "../../scripts/autoGenerateRoutes";

export const navItems = [
	{ text: "Home", link: "/" },
	{ text: "Projects", link: "/examples/markdown-examples" },
];

/**
 * @description auto-generate routes
 * @example
		[
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
					["Element Plus", "/vue/element-plus"],
				]),
			},
			{
				text: "React",
				items: transformSidebarItems([["Maskbook", "/react/maskbook"]]),
			},
		];
 */
console.log(JSON.stringify(results));
export const sidebarItems = [...results];
