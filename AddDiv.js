// (function(){

// console.log("Before onload");

// // window.onload = function() {



//     console.log("Inside onload");
// 	var newDiv = document.createElement('div');
// 	newDiv.id = 'bd_rec_Horizontal';
// 	newDiv.dataTemplateType = 'carousel';
	
// 	if (document.body != null) { 
// 	    document.getElementByTagName('body')[0].appendChild('div'); 
// 	    console.log("Div added");
// 	}
// // };
    
// })();


$( document ).ready(function() {
	
	var text = '[ {
    "channel": "Shopify",
    "pageType": "Cart",
    "placement": "Horizontal2",
    "uiElement": "PGRpdiBpZD0iYmRfcmVjX2hvcml6b250YWwyIiBkYXRhLXRlbXBsYXRlLXR5cGU9ImNhcm91c2VsIj48L2Rpdj4="
  },

{
    "channel": "Shopify",
    "pageType": "Home",
    "placement": "Grid",
    "uiElement": "PGRpdiBpZD0iYmRfcmVjX2dyaWQiIGRhdGEtdGVtcGxhdGUtdHlwZT0iZ3JpZCI+PC9kaXY+="
  }
]';

	$.ajax({
		url: "https://httpbin.org/get",
		success: function(jsonFromCheyenne) {
			result(text);
			console.log(text);
// 			console.log(jsonFromCheyenne);
		}
	});

    console.log( "Div - ready!" );
    
//     var $div = $('<div />').appendTo('body');
    var container = $("#home-imagebox");
    var $div = $('<div />').appendTo(container);
    $div.attr('id', 'bd_rec_Grid');
    $div.attr('data-template-type', 'carousel');
    console.log( "Div - Done!" );

    console.log( "Script - ready!" );
    var $script = document.createElement("script");
    $script.type = "text/javascript";
    $script.src = "https://rawgit.com/MariamZaheer/ShopifyApp/master/example.js";
    // Use any selector
    $("body").append($script);
    console.log( "Script - Done!" );
});
