
///<reference path="./formGenerator.ts" />

function checkSelectedValue(){
	let selectElement = <HTMLInputElement>document.getElementById("select-option");
	let selectedValue = selectElement.value;
	
	let	formGenerator = new FormGenerator();
	// display selected form
	formGenerator.displayForm(selectedValue).bindingEditProperties(selectedValue);

	//formGenerator.bindingEditProperties(selectedValue);

	

}









