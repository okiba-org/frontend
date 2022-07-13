const Editor = () => {
	return (
		<textarea
			className="editor"
			autoFocus={true}
			style={{
				width: "auto",
				backgroundColor: "black",
				padding: "10px",
				resize: "none",
				borderWidth: 0,
				flex: 1,
				color: "#fbfbfb",
				fontSize: 16,
				outline: "none",
			}}
		/>
	);
};

export default Editor;
