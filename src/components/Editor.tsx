import CodeMirror from "@uiw/react-codemirror";
import { GithubDark } from "./EditorTheme";

const Editor = () => {
	return (
		// TODO: custom implementation?
		// TODO: fix line wrap
		<CodeMirror
			className="editor"
			autoFocus={true}
			height="100%"
			style={{
				width: "100%",
				flex: 1,
				overflowY: "auto",
				fontFamily: "IBM Plex Mono",
				fontSize: "1rem",
			}}
			theme={GithubDark}
		/>
	);
};

export default Editor;
