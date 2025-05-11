const axios = require("axios");
const toString = require("./toString.js");
const parseDataURI = require("./dataUriParser.js");

export default async function URLFetcher (URL: string): Promise<any> {
	URL = toString(URL);
	if (URL.startsWith("data:")) return parseDataURI(URL);
	return (await axios.get(URL)).data;
}