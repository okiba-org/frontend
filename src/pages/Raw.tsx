import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPaste } from "../api/bin";

const Raw = () => {
	let navigate = useNavigate();
	let [code, setCode] = useState("");
	let { id } = useParams();

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
			<pre>{code}</pre>
		</>
	);
};

export default Raw;
