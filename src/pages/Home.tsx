import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPaste, SuccessResponse } from "../api/bin";
import BottomBar from "../components/BottomBar";
import Editor from "../components/Editor";

function Home() {
	const [code, setCode] = useState("");
	const navigate = useNavigate();

	const postPaste = useCallback(async () => {
		const res: Response = await setPaste(code);
		if (res.status !== 200) {
			alert("Something went wrong!");
			console.log(res);
		}
		let data: SuccessResponse = await res.json();
		navigate(`/${data.endpoint}`);
	}, [code]);

	const handleSaveKey = async (event: React.KeyboardEvent<HTMLDivElement>) => {
		if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
			event.preventDefault();
			postPaste();
		}
	};

	return (
		<>
			<Editor setCode={setCode} value={code} keyEvent={handleSaveKey} />
			<BottomBar />
		</>
	);
}

export default Home;
