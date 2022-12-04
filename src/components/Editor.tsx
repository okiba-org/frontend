import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";
import { FunctionComponent } from "react";
import Theme from "./EditorTheme";

const Editor: FunctionComponent<propTypes> = props => {
	return (
		// TODO: custom implementation?
		// TODO: fix line wrap
		<CodeMirror
			className="editor"
			autoFocus={true}
			value={props.value}
			onKeyDown={e => props.keyEvent(e)}
			placeholder={props.placeholder}
			height="100%"
			onChange={val => props.setCode(val)}
			style={{
				width: "100%",
				flex: 1,
				overflowY: "auto",
				fontFamily: "IBM Plex Mono",
				fontSize: "1rem",
			}}
			editable={props.editable}
			readOnly={props.readonly}
			theme={Theme}
			extensions={[EditorView.lineWrapping]}
		/>
	);
};

Editor.defaultProps = {
	placeholder: `// paste code here, use ctrl + s to save`,
	readonly: false,
	editable: true,
	value: "",
};

interface propTypes {
	readonly?: boolean;
	editable?: boolean;
	placeholder?: string;
	value: string;
	setCode: Function;
	keyEvent: Function;
}

export default Editor;
