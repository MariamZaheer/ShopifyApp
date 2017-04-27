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
    console.log( "ready!" );
    
    var $div = $('<div />').appendTo('body');
    $div.attr('id', 'bd_rec_Horizontal');
    $div.attr('data-template-type', 'carousel');
    
    console.log( "Done!" );
});