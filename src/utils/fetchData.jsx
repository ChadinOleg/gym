export const exercisesOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const youtubeOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "a72187bd63mshcb3e6e0858a5c7fp14ea93jsn9a4ada01f30b",
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
	},
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
};
