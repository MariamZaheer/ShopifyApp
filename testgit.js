(function(){

console.log("initial upload");

// window.onload = function() {



    console.log("Inside onload");
	var newDiv = document.createElement('div');
	newDiv.id = 'bd_rec_Horizontal';
	newDiv.dataTemplateType = 'carousel';
	
	if (document.body != null) { 
	    document.getElementByTagName('body')[0].appendChild('div'); 
	    console.log("Div added");
	}
// };
    
})();