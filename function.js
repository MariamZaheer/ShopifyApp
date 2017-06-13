$( document ).ready(function() {
	
	var queryString = window.location.href;
	
	var search = queryString.split("=");

	var searchTerm = search[1];
	alert("Search Term is : " + searchTerm);
	
});
