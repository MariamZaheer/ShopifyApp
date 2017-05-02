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

	$.ajax({
		url: "http://172.16.16.31:8080/v2/recommendation/channelRecs",
		success: function(jsonFromCheyenne)) {
			jsonFromCheyenne = JSON.parse(jsonFromCheyenne);
			console.log(jsonFromCheyenne);
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
