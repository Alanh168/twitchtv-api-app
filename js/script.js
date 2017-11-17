$(document).ready(function() {
	function fetchResults() {
		const endpoint = ``;
		fetch(endpoint)
		.then(response => response.json())
		.then(data)
		displayResults();
	}

	function displayResults() {

	}

	/*
	USAGE:
Replace the Twitch API base URL https://api.twitch.tv/kraken with https://wind-bow.gomix.me/twitch-api. Use this endpoint according to the Twitch API documentation.

NOTE:
This server caches data to lower the request rate. To prevent abuses this server accepts GET requests only, and serves only routes /users/:user, /channels/:channel, and /streams/:stream. These are 

	*/
});
