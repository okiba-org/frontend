import { SERVER_URL } from "../util";

export const setPaste = async (code: string) => {
	try {
		return await fetch(SERVER_URL + "/bin/paste", {
			method: "POST",
			headers: { "Content-type": "text/plain" },
			body: code,
		});
	} catch (err) {
		console.error(err);
		return null;
	}
};

export const getPaste = async (pasteId: string) => {
	try {
		const response = await fetch(`${SERVER_URL}/bin/paste/${pasteId}`);
		return response;
	} catch (err) {
		return null;
	}
};

export interface SuccessResponse {
	message: string;
	endpoint: string;
}
