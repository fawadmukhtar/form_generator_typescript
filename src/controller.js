///<reference path="./formGenerator.ts" />
function checkSelectedValue() {
    var selectElement = document.getElementById("select-option");
    var selectedValue = selectElement.value;
    var formGenerator = new FormGenerator();
    // display selected form
    formGenerator.displayForm(selectedValue).bindingEditProperties(selectedValue);
    //formGenerator.bindingEditProperties(selectedValue);
}
