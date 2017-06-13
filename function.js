$( document ).ready(function() {
	
	var queryString = window.location.href;
	console.log(queryString);

	var variables = queryString.split("&");
	console.log(variables);
	
	var planVariables = variables[0];
	console.log(planVariables);
	
	var planType = planVariables.split("=");
	console.log(planType);
	var plan = planType[1];
	console.log(plan);
	
});
