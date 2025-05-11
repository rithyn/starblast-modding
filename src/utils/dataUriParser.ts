import { dataUriToBuffer } from "data-uri-to-buffer";
const decoder: TextDecoder = new TextDecoder("utf8");
export default function parseDataURI (uri: string): string {
	return decoder.decode(dataUriToBuffer(uri).buffer);
}