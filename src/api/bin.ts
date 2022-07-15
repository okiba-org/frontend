export const setPaste = async (code: string): Promise<Response> => {
	return await fetch("http://localhost:8080/bin/paste", {
		method: "POST",
		headers: { "Content-type": "text/plain" },
		body: code,
	});
};

export const getPaste = async (pasteId: string) => {
	return await fetch(`http://localhost:8080/bin/paste/${pasteId}`);
};

export interface SuccessResponse {
	message: string;
	endpoint: string;
}
