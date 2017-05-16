$( document ).ready(function() {

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
		
// 		alert(text['channel']);
	};

	// JSON string containing the hardcoded BP configurations.
	var text = [{"channel":"Shopify","pageType":"Cart","placement":"Horizontal2","uiElement":"PGRpdiBpZD0iYmRfcmVjX2hvcml6b250YWwyIiBkYXRhLXRlbXBsYXRlLXR5cGU9ImNhcm91c2VsIj48L2Rpdj4="},{"channel":"Shopify","pageType":"Home","placement":"Grid","uiElement":"PGRpdiBpZD0iYmRfcmVjX2dyaWQiIGRhdGEtdGVtcGxhdGUtdHlwZT0iZ3JpZCI+PC9kaXY+="}];

	// Ajax call to get configuration from BP.
	$.ajax({
		url: "https://httpbin.org/get",
		success: function(jsonFromCheyenne) {
			result(text);
			console.log(text);
// 			console.log(jsonFromCheyenne);
		}
	});

	console.log( "Div - ready!" );
	
	// Adding a div tag.
// 	var container = $("#home-imagebox");
// 	var $div = $('<div />').appendTo(container);
// 	$div.attr('id', 'bd_rec_Grid');
// 	$div.attr('data-template-type', 'carousel');
// 	console.log( "Div - Done!" );

// 	// Loading the basic recommendations js by default.
// 	console.log( "Script - ready!" );
// 	var $script = document.createElement("script");
// 	$script.type = "text/javascript";
// 	$script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/basic.js";
// 	$("body").append($script);
// 	console.log( "Script - Done!" );
	
	console.log( "Script - ready!" );
	var $script = document.createElement("script");
	$script.type = "text/javascript";
	$script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/bd-experience-rendering-sdk.min.js";
	$(".kickstarter__meta").append($script);
	console.log( "Script - Done!" );
	
	// Adding a div tag.
	var container = $(".kickstarter__meta");
	var $div = $('<div />').appendTo(container);
	$div.attr('id', 'bd_rec_Horizontal');
	$div.attr('data-template-type', 'carousel');
	console.log( "Div - Done!" );
	
	// Loading the basic recommendations js by default.
	console.log( "Script - ready!" );
	var $script = document.createElement("script");
	$script.type = "text/javascript";
	$script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/basic.js";
	$(".kickstarter__meta").append($script);
	console.log( "Script - Done!" );
	
});
