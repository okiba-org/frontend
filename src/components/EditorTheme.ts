import { tags as t } from "@lezer/highlight";
import { createTheme } from "@uiw/codemirror-themes";

// custom theme based on GitHub dark theme
export default createTheme({
	theme: "dark",
	settings: {
		background: "black",
		gutterBackground: "black", // line number background
		gutterForeground: "gray", // line number
		foreground: "#c9d1d9",
		caret: "#c9d1d9",
		selection: "#003d73",
		selectionMatch: "#003d73",
		lineHighlight: "transparent",
	},
	styles: [
		{ tag: [t.comment, t.bracket], color: "#8b949e" },
		{ tag: [t.className, t.propertyName], color: "#d2a8ff" },
		{
			tag: [t.variableName, t.attributeName, t.number, t.operator],
			color: "#79c0ff",
		},
		{
			tag: [t.keyword, t.typeName, t.typeOperator, t.typeName],
			color: "#ff7b72",
		},
		{ tag: [t.string, t.meta, t.regexp], color: "#a5d6ff" },
		{ tag: [t.name, t.quote], color: "#7ee787" },
		{ tag: [t.heading], color: "#d2a8ff", fontWeight: "bold" },
		{ tag: [t.emphasis], color: "#d2a8ff", fontStyle: "italic" },
		{ tag: [t.deleted], color: "#ffdcd7", backgroundColor: "#ffeef0" },
	],
});
