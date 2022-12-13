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

		const res: Response | null = await getPaste(id);
		if (res == null) {
			alert("Couldn't connect to the server, something went wrong.");
			navigate("/");
		}

		if (res?.status == 404) {
			alert("Paste not found!");
			navigate("/");
		}

		if (res?.ok) {
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
			<BottomBar isNewPaste={false} postCallback={undefined} />
		</>
	);
}

export default Paste;
