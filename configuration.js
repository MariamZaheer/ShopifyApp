$( document ).ready(function() {
	
	var queryString = $("script[src*='configuration.js']").attr('src').split('?')[1];
	console.log(queryString);

	var variables = queryString.split("&");
	console.log(variables);
	
	var planVariables = variables[0];
	console.log(planVariables);
	
	var planType = planVariables.split("=");
	console.log(planType);
	var plan = planType[1];
	console.log(plan);
	
	// Loading the silver recommendations js if the plan is Silver.
	if (plan == "Silver") {
		console.log( "silver - ready!" );
		var $script = document.createElement("script");
		$script.type = "text/javascript";
		$script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/silver.js";
		$("body").append($script);
		console.log( "silver - Done!" );
	} else if (plan == "Gold") {
		// Loading the gold recommendations js if the plan is Gold.
		console.log( "gold - ready!" );
		var $script = document.createElement("script");
		$script.type = "text/javascript";
		$script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/gold.js";
		$("body").append($script);
		console.log( "gold - Done!" );
	} else if (plan == "Platinum") {
		// Loading the platinum recommendations js if the plan is Platinum.
		console.log( "platinum - ready!" );
		var $script = document.createElement("script");
		$script.type = "text/javascript";
		$script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/platinum.js";
		$("body").append($script);
		console.log( "platinum - Done!" );
	}

	function result(text) {
		// Iterate the JSON array and extract the values.
		for(var i in text)
		{
			var channel = text[i].channel;
			var pageType = text[i].pageType;
			var placement = text[i].placement;
			var uiElement = text[i].uiElement;

			console.log(pageType);
		}
	};

	// JSON string containing the hardcoded BP configurations.
	var text = [{"channel":"Shopify","pageType":"Cart","placement":"Horizontal2","uiElement":"PGRpdiBpZD0iYmRfcmVjX2hvcml6b250YWwyIiBkYXRhLXRlbXBsYXRlLXR5cGU9ImNhcm91c2VsIj48L2Rpdj4="},{"channel":"Shopify","pageType":"Home","placement":"Grid","uiElement":"PGRpdiBpZD0iYmRfcmVjX2dyaWQiIGRhdGEtdGVtcGxhdGUtdHlwZT0iZ3JpZCI+PC9kaXY+="}];

	// Ajax call to get configuration from BP.
	$.ajax({
		url: "https://httpbin.org/get",
		success: function(jsonFromCheyenne) {
			result(text);
			console.log(text);
		}
	});

	console.log( "Div - ready!" );
	
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
	
	var getJSON = function(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			var status = xhr.status;
			if (status == 200) {
				callback(null, xhr.response);
			} else {
				callback(status);
			}
		};
		xhr.send();
	};
	
	// Collections page
	if (top.location.pathname === '/collections') {
		alert("Collections");
		
		getJSON('https://prometheus-asgard.myshopify.com/collections/summer-collection/products.json',
			function(err, data) {
				if (err != null) {
					alert('Something went wrong: ' + err);
				} else {
					alert('Your query count: ' + data.query.count);
				}
			});
		
		alert("done");
	}
	
// 	var xhr;
//             if (window.XMLHttpRequest) {
//                 xhr = new XMLHttpRequest();
//             } 
	    //else if (window.ActiveXObject) {
              //  xhr = new ActiveXObject("Microsoft.XMLHTTP");
            //}

//             xhr.onreadystatechange = function(){
//                 alert(xhr.responseText);
//             };
//             xhr.open("GET", "https://rawgit.com/MariamZaheer/ShopifyApp/master/sample.txt");
//             xhr.send();
});
