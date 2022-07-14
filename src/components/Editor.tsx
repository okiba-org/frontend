import CodeMirror from "@uiw/react-codemirror";
import React, { useCallback, useState } from "react";
import { GithubDark } from "./EditorTheme";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Editor = () => {
	const [code, setCode] = useState("");
	let navigate = useNavigate();

	// TODO: fix this callback thing later
	const postPaste = useCallback(async () => {
		let res = await axios.post("http://localhost:8080/bin/paste", code, {
			headers: { "Content-type": "text/plain" },
		});

		if (res.status !== 200) {
			alert("Something went wrong!");
			console.log(res);
		}
		navigate(`/${res.data["endpoint"]}`);
	}, [code]);

	const handleSavePaste = async (
		event: React.KeyboardEvent<HTMLInputElement>,
	) => {
		if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
			event.preventDefault();
			postPaste();
		}
	};

	const placeholder = `// paste code here, use ctrl + s to save`;
	return (
		// TODO: custom implementation?
		// TODO: fix line wrap
		<CodeMirror
			className="editor"
			autoFocus={true}
			onKeyDown={handleSavePaste}
			placeholder={placeholder}
			height="100%"
			onChange={(value: string) => {
				setCode(value);
			}}
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
