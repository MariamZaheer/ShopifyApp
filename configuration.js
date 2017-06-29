$( document ).ready(function() {
	
	var queryString = $("script[src*='configuration.js']").attr('src').split('?')[1];

	var variables = queryString.split("&");
	
	var planVariables = variables[0];
	
	var planType = planVariables.split("=");
	var plan = planType[1];
	
	// Loading the silver recommendations js if the plan is Silver.
	if (plan == "Silver") {
		var $script = document.createElement("script");
		$script.type = "text/javascript";
		$script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/silver.js";
		$("body").append($script);
	} else if (plan == "Gold") {
		// Loading the gold recommendations js if the plan is Gold.
		var $script = document.createElement("script");
		$script.type = "text/javascript";
		$script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/gold.js";
		$("body").append($script);
	} else if (plan == "Platinum") {
		// Loading the platinum recommendations js if the plan is Platinum.
		var $script = document.createElement("script");
		$script.type = "text/javascript";
		$script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/platinum.js";
		$("body").append($script);
	}

	function result(text) {
		// Iterate the JSON array and extract the values.
		for(var i in text)
		{
			var channel = text[i].channel;
			var pageType = text[i].pageType;
			var placement = text[i].placement;
			var uiElement = text[i].uiElement;
		}
	};

	// JSON string containing the hardcoded BP configurations.
	var text = [{"channel":"Shopify","pageType":"Cart","placement":"Horizontal2","uiElement":"PGRpdiBpZD0iYmRfcmVjX2hvcml6b250YWwyIiBkYXRhLXRlbXBsYXRlLXR5cGU9ImNhcm91c2VsIj48L2Rpdj4="},{"channel":"Shopify","pageType":"Home","placement":"Grid","uiElement":"PGRpdiBpZD0iYmRfcmVjX2dyaWQiIGRhdGEtdGVtcGxhdGUtdHlwZT0iZ3JpZCI+PC9kaXY+="}];

	// Ajax call to get configuration from BP.
	$.ajax({
		url: "https://httpbin.org/get",
		success: function(jsonFromCheyenne) {
			result(text);
		}
	});
	
	// Search term
	if (top.location.pathname === '/search') {
		
		var queryString = window.location.href;
		var search = queryString.split("=");
		var searchTerm = search[1];
		console.log("search : " + searchTerm);
		
		if (searchTerm != null) {
			alert("Search Term is : " + searchTerm);
		} else {
			alert("No Search Term");
		}
	}
	
	var getAllCollections = function(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			var status = xhr.status;
			if (status == 200) {
				var response = xhr.response;
				callback(null, response);
				
				var key = Object.keys(response);
				console.log("Key for a specific collection : " + key);
				
				var collectionLength = Object.keys(response.products).length;
				console.log("Length of each collection : " + collectionLength);
				
				var data = response.products;
				for (var i in data) {
					
					var title = data[i].title;
					console.log("Product Title : " + title);
					
					var id = data[i].id;
					console.log("Product Id : " + id);
					
					console.log("##########");
				}
			} else {
				callback(status);
			}
		};
		xhr.send();
	}
		
	
	var getCollectionsJSON = function(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			var status = xhr.status;
			if (status == 200) {
				var response = xhr.response;
				callback(null, response);
				
				var key = Object.keys(response);
				console.log("Key for all collections : " + key);
				
				var collectionLength = Object.keys(response.collections).length;
				console.log("Length of the collection : " + collectionLength);
				
				var data = response.collections;

				for (var i in data) {
					
					var title = data[i].title;					
					console.log("Title : " + title);
					
					var handle = data[i].handle;					
					console.log("Handle : " + handle);
					
					var url = "https://prometheus-asgard.myshopify.com/collections/" + handle + "/products.json";
					console.log("URl : " + url);
					
					getAllCollections(url, function(err, data) {
							if (err != null) {
								alert('Something went wrong 2 : ' + err);
							} else {
								var count = Object.keys(data).length;
							}
					});
					
					console.log("======================================");
				}
				
				var response = Object.values(response);
			} else {
				callback(status);
			}
		};
		xhr.send();
	};
	
	// Collections page
	if (top.location.pathname === '/collections') {
		currentURL = (document.URL);
		var part = currentURL.split("/");
		console.log("Current Page 1: " + part);
		var currentPage = part[3];
		console.log("Current Page : " + currentPage);
		alert("Collections");
		
		getCollectionsJSON('https://prometheus-asgard.myshopify.com/collections.json',
			function(err, data) {
				if (err != null) {
					alert('Something went wrong: ' + err);
				} else {
					var count = Object.keys(data).length;
				}
			});
		
		alert("done");
	}
	
	var getSpecificCollectionJSON = function(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			var status = xhr.status;
			if (status == 200) {
				var response = xhr.response;
				callback(null, response);
				
				var key = Object.keys(response);
				console.log("Key for all collections : " + key);
				
				var collectionLength = Object.keys(response.products).length;
				console.log("Length of the collection : " + collectionLength);
				
				var data = response.products;

				for (var i in data) {
					
					var title = data[i].title;					
					console.log("Title : " + title);
					
					var handle = data[i].handle;					
					console.log("Handle : " + handle);
					
					var id = data[i].id;					
					console.log("ID : " + id);
					
					console.log("======================================");
				}
				
				var response = Object.values(response);
			} else {
				callback(status);
			}
		};
		xhr.send();
	};
	
	// Specific collection
	if (top.location.href.indexOf("/collections/") > -1) {
		alert("Inside Specific Collection");
		
		currentURL = (document.URL);
		var part = currentURL.split("/");
		var currentPage = part[4];
		console.log("Current Page : " + currentPage);
		
		var url = "https://prometheus-asgard.myshopify.com/collections/" + currentPage + "/products.json";

		getSpecificCollectionJSON(url, function(err, data) {
				if (err != null) {
					alert('Something went wrong: ' + err);
				} else {
					var count = Object.keys(data).length;
					alert("done");
				}
			});
	}
	
	// Product Page
	if (top.location.href.indexOf("/products/") > -1) {
		alert("Inside PDP");
		
		currentURL = (document.URL);
		var part = currentURL.split("/");
		console.log(part);
		
		var length = part.length;
		console.log("Length : " + length);
		
		var key = part[3];
		console.log("Key : " + key);
		
		if (key == "products" && length == 5) {
			alert("Products PDP");
		} else if (key == "collections" && length == 7) {
			alert("Through Collection PDP");
		}
		
	}
	
// 	if (top.location.pathname === '/products') {
// 		alert("Product");
		
// 		getJSON('https://prometheus-asgard.myshopify.com/collections.json',
// 			function(err, data) {
// 				if (err != null) {
// 					alert('Something went wrong: ' + err);
// 				} else {
// 					var count = Object.keys(data).length;
// 				}
// 			});
		
// 		alert("done");
// 	}
});
