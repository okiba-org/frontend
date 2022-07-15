import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPaste } from "../api/bin";
import BottomBar from "../components/BottomBar";
import Editor from "../components/Editor";

function Paste() {
	const { id } = useParams();
	const [code, setCode] = useState("");
	const navigate = useNavigate();

	const getCode = async () => {
		if (id == undefined) {
			alert("Something went wrong!");
			return navigate("/");
		}

		const res: Response = await getPaste(id);

		if (res.status == 404) {
			alert("Paste not found!");
			navigate("/");
		}

		if (res.status == 200) {
			setCode(await res.text());
		}
	};

	useEffect(() => {
		getCode();
	}, []);

	return (
		<>
			<Editor
				setCode={() => {}}
				value={code}
				keyEvent={() => {}}
				editable={false}
				readonly={true}
				placeholder={""}
			/>
			<BottomBar />
		</>
	);
}

export default Paste;
