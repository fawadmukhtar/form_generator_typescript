var FormGenerator = (function () {
    // static count = 0;
    function FormGenerator() {
    }
    FormGenerator.prototype.displayForm = function (selectedField) {
        // use type assertion
        var displayForms = document.querySelectorAll('div.form-display');
        for (var i = 0; i < displayForms.length; i++) {
            if (displayForms[i].classList.contains(selectedField)) {
                displayForms[i].style.display = 'block';
            }
            else {
                displayForms[i].style.display = 'none';
            }
        }
        return this;
    };
    FormGenerator.prototype.bindingEditProperties = function (selectedForm) {
        switch (selectedForm) {
            case "text":
                this.bindTextForm(selectedForm);
                break;
            case "password":
                this.bindPasswordForm(selectedForm);
                break;
            case "textarea":
                this.bindTextareaForm(selectedForm);
                break;
            case "radio":
                this.bindRadioForm(selectedForm);
                break;
            case "checkbox":
                this.bindCheckboxForm(selectedForm);
                break;
            case "select":
                this.bindSelectForm(selectedForm);
                break;
            default:
                console.info('Some Error in selection form');
                break;
        }
    };
    FormGenerator.prototype.bindTextForm = function (selectedForm) {
        var _this = this;
        var dynamicName = '';
        var outputFormLabel = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper div.form-group label");
        var outputFormInput = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper div.form-group input");
        var inputElements = document.querySelectorAll("div." + selectedForm + " div.edit-properties div.edit-form input");
        var formSubmitButton = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form button");
        var form = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form form");
        var jsonForm = document.querySelector('div.json-output-form div.josn-output-data pre');
        var _loop_1 = function (i) {
            if (inputElements[i].classList.contains('changeForm')) {
                if (inputElements[i].classList.contains('classLabel')) {
                    // bind label element
                    inputElements[i].onkeyup = function () {
                        outputFormLabel.innerHTML = inputElements[i].value;
                    };
                }
                else {
                    //	set placehodler attribute
                    inputElements[i].onkeyup = function () {
                        outputFormInput.setAttribute('placeholder', inputElements[i]
                            .value);
                    };
                }
            }
        };
        // let jsonFormProp = document.querySelector
        // ('div.json-output-form div.josn-output-data pre span.object-prop');
        // let jsonFormVal = document.querySelector
        // ('div.json-output-form div.josn-output-data pre span.object-val');
        for (var i = 0; i < inputElements.length; i++) {
            _loop_1(i);
        }
        formSubmitButton.onclick = function (el) {
            el.preventDefault();
            if (inputElements[3].value == '') {
                dynamicName = dynamicName;
            }
            else {
                dynamicName = inputElements[3].value;
            }
            var formData = (_a = {
                    type: 'text'
                },
                _a[dynamicName] = outputFormInput.value,
                _a.label = inputElements[0].value,
                _a.id = inputElements[1].value,
                _a["class"] = inputElements[2].value,
                _a.name = inputElements[3].value,
                _a.placehoder = inputElements[4].value,
                _a.required = inputElements[5].checked,
                _a);
            _this.displayData(formData);
            form.reset();
            var _a;
        };
    };
    FormGenerator.prototype.bindPasswordForm = function (selectedForm) {
        var _this = this;
        var dynamicName = '';
        var outputFormLabel = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper div.form-group label");
        var outputFormInput = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper div.form-group input");
        var inputElements = document.querySelectorAll("div." + selectedForm + " div.edit-properties div.edit-form input");
        var formSubmitButton = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form button");
        var form = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form form");
        var jsonForm = document.querySelector('div.json-output-form div.josn-output-data pre');
        var _loop_2 = function (i) {
            if (inputElements[i].classList.contains('changeForm')) {
                if (inputElements[i].classList.contains('classLabel')) {
                    // bind label element
                    inputElements[i].onkeyup = function () {
                        outputFormLabel.innerHTML = inputElements[i].value;
                    };
                }
                else {
                    //	set placehodler attribute
                    inputElements[i].onkeyup = function () {
                        outputFormInput.setAttribute('placeholder', inputElements[i]
                            .value);
                    };
                }
            }
        };
        for (var i = 0; i < inputElements.length; i++) {
            _loop_2(i);
        }
        formSubmitButton.onclick = function (el) {
            el.preventDefault();
            if (inputElements[3].value == '') {
                dynamicName = dynamicName;
            }
            else {
                dynamicName = inputElements[3].value;
            }
            var formData = (_a = {
                    type: 'password'
                },
                _a[dynamicName] = outputFormInput.value,
                _a.label = inputElements[0].value,
                _a.id = inputElements[1].value,
                _a["class"] = inputElements[2].value,
                _a.name = inputElements[3].value,
                _a.placehoder = inputElements[4].value,
                _a.required = inputElements[5].checked,
                _a);
            _this.displayData(formData);
            form.reset();
            var _a;
        };
    };
    FormGenerator.prototype.bindTextareaForm = function (selectedForm) {
        var _this = this;
        var dynamicName = '';
        var outputFormLabel = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper div.form-group label");
        var outputFormTextarea = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper div.form-group textarea");
        var inputElements = document.querySelectorAll("div." + selectedForm + " div.edit-properties div.edit-form input");
        var formSubmitButton = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form button");
        var form = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form form");
        var _loop_3 = function (i) {
            if (inputElements[i].classList.contains('changeForm')) {
                if (inputElements[i].classList.contains('textarea-label')) {
                    inputElements[i].onkeyup = function () {
                        outputFormLabel.innerHTML = inputElements[i].value;
                    };
                }
                else if (inputElements[i].classList.contains('textarea-rows')) {
                    inputElements[i].onkeyup = function () {
                        outputFormTextarea.setAttribute('rows', inputElements[i].value);
                    };
                }
                else if (inputElements[i].classList.contains('textarea-cols')) {
                    inputElements[i].onkeyup = function () {
                        outputFormTextarea.setAttribute('cols', inputElements[i].value);
                    };
                }
                else {
                    inputElements[i].onkeyup = function () {
                        outputFormTextarea.setAttribute('placeholder', inputElements[i].value);
                    };
                }
            }
        };
        for (var i = 0; i < inputElements.length; i++) {
            _loop_3(i);
        }
        formSubmitButton.onclick = function (el) {
            el.preventDefault();
            if (inputElements[5].value == '') {
                dynamicName = dynamicName;
            }
            else {
                dynamicName = inputElements[5].value;
            }
            var formData = (_a = {
                    type: 'textarea'
                },
                _a[dynamicName] = outputFormTextarea.value,
                _a.label = inputElements[0].value,
                _a.id = inputElements[1].value,
                _a["class"] = inputElements[2].value,
                _a.rows = inputElements[3].value,
                _a.cols = inputElements[4].value,
                _a.name = inputElements[5].value,
                _a.placehoder = inputElements[6].value,
                _a.required = inputElements[7].checked,
                _a);
            _this.displayData(formData);
            form.reset();
            var _a;
        };
    };
    FormGenerator.prototype.bindRadioForm = function (selectedForm) {
        var _this = this;
        var dynamicName = '';
        var outputFormLabel = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper div.form-group label");
        var radioOutputForm = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper form");
        var radioFormInput = document.querySelector("div." + selectedForm + " div.edit-properties div.add-radio input");
        var addRadioButton = document.querySelector("div." + selectedForm + " div.edit-properties div.add-radio button");
        var radioForm = document.querySelector("div." + selectedForm + " div.edit-properties div.add-radio form");
        var inputElements = document.querySelectorAll("div." + selectedForm + " div.edit-properties div.edit-form input");
        var formSubmitButton = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form button");
        var form = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form form");
        var _loop_4 = function (i) {
            if (inputElements[i].classList.contains('changeForm')) {
                inputElements[i].onkeyup = function () {
                    outputFormLabel.innerHTML = inputElements[i].value;
                };
            }
        };
        // let jsonForm = document.querySelector
        // ('div.json-output-form div.josn-output-data pre');
        for (var i = 0; i < inputElements.length; i++) {
            _loop_4(i);
        }
        var radioObject;
        addRadioButton.onclick = function (el) {
            el.preventDefault();
            // radioObject = {};
            if (radioFormInput.value) {
                //first create element
                var newDiv = document.createElement('div');
                newDiv.setAttribute('class', 'radio');
                var newLabelElement = document.createElement('label');
                var newInputElement = document.createElement('input');
                newInputElement.setAttribute('type', 'radio');
                // newInputElement.setAttribute('name', 'option1');
                newInputElement.setAttribute('name', radioFormInput.value);
                var labelTextNode = document.createTextNode(radioFormInput.value);
                newLabelElement.appendChild(newInputElement);
                newLabelElement.appendChild(labelTextNode);
                // newLabelElement.appendTextNode()
                newDiv.appendChild(newLabelElement);
                // display block
                newDiv.style.display = 'block';
                newDiv.style.boxShadow = 'none';
                radioOutputForm.appendChild(newDiv);
                radioObject = {};
                // get all radio buttons
                var radioOutputBtn = document.querySelectorAll("div." + selectedForm + " div.output-form div.form-wrapper form div.radio input");
                for (var i = 0; i < radioOutputBtn.length; i++) {
                    radioObject[radioOutputBtn[i].getAttribute('name')] =
                        radioOutputBtn[i].getAttribute('name');
                }
                radioForm.reset();
            }
        };
        formSubmitButton.onclick = function (el) {
            el.preventDefault();
            if (inputElements[1].value == '') {
                dynamicName = dynamicName;
            }
            else {
                dynamicName = inputElements[1].value;
            }
            var formData = {
                type: 'radio',
                label: inputElements[0].value,
                name: inputElements[1].value,
                required: inputElements[2].checked,
                radio: radioObject
            };
            // console.log(formData.radio);
            if (formData.radio == undefined) {
                formData.radio = '';
            }
            _this.displayData(formData);
            form.reset();
        };
    };
    FormGenerator.prototype.bindCheckboxForm = function (selectedForm) {
        var _this = this;
        var dynamicName = '';
        var outputFormLabel = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper div.form-group label");
        var inputElements = document.querySelectorAll("div." + selectedForm + " div.edit-properties div.edit-form input");
        var formSubmitButton = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form button");
        var form = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form form");
        var _loop_5 = function (i) {
            if (inputElements[i].classList.contains('changeForm')) {
                // bind label element
                inputElements[i].onkeyup = function () {
                    outputFormLabel.innerHTML = inputElements[i].value;
                };
            }
        };
        for (var i = 0; i < inputElements.length; i++) {
            _loop_5(i);
        }
        formSubmitButton.onclick = function (el) {
            el.preventDefault();
            var formData = {
                type: 'checkbox',
                label: inputElements[0].value,
                name: inputElements[1].value,
                required: inputElements[2].checked
            };
            _this.displayData(formData);
            form.reset();
        };
    };
    FormGenerator.prototype.bindSelectForm = function (selectedForm) {
        var _this = this;
        var dynamicName = '';
        // don't need
        var outputFormLabel = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper div.form-group label");
        // for append child
        var listOutputForm = document.querySelector("div." + selectedForm + " div.output-form div.form-wrapper form select");
        // add new list item
        var listFormInput = document.querySelector("div." + selectedForm + " div.edit-properties div.add-list input");
        var addListButton = document.querySelector("div." + selectedForm + " div.edit-properties div.add-list button");
        // for clear form
        var listForm = document.querySelector("div." + selectedForm + " div.edit-properties div.add-list form");
        // edit properties
        var inputElements = document.querySelectorAll("div." + selectedForm + " div.edit-properties div.edit-form input");
        // form submittion
        var formSubmitButton = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form button");
        // edit properties form clear
        var form = document.querySelector("div." + selectedForm + " div.edit-properties div.edit-form form");
        var _loop_6 = function (i) {
            if (inputElements[i].classList.contains('changeForm')) {
                inputElements[i].onkeyup = function () {
                    outputFormLabel.innerHTML = inputElements[i].value;
                };
            }
        };
        // let jsonForm = document.querySelector
        // ('div.json-output-form div.josn-output-data pre');
        for (var i = 0; i < inputElements.length; i++) {
            _loop_6(i);
        }
        var listObject;
        addListButton.onclick = function (el) {
            el.preventDefault();
            // radioObject = {};
            if (listFormInput.value) {
                //first create element
                var newOptionElement = document.createElement('option');
                newOptionElement.setAttribute('value', listFormInput.value);
                var newOptionTextNode = document.createTextNode(listFormInput.value);
                newOptionElement.appendChild(newOptionTextNode);
                listOutputForm.appendChild(newOptionElement);
                // let newDiv = document.createElement('div');
                // newDiv.setAttribute('class', 'radio');
                // let newLabelElement = document.createElement('label');
                // let newInputElement = document.createElement('input');
                // newInputElement.setAttribute('type', 'radio');
                // newInputElement.setAttribute('name', 'option1');
                // newInputElement.setAttribute('name',  radioFormInput.value);				
                // let labelTextNode = document.createTextNode(radioFormInput.value);
                // newLabelElement.appendChild(newInputElement);
                // newLabelElement.appendChild(labelTextNode);
                // // newLabelElement.appendTextNode()
                // newDiv.appendChild(newLabelElement);
                // // display block
                // newDiv.style.display = 'block';
                // newDiv.style.boxShadow = 'none';
                // radioOutputForm.appendChild(newDiv);
                listObject = {};
                // get all radio buttons
                var outputList = document.querySelectorAll("div." + selectedForm + " div.output-form div.form-wrapper form select option");
                // console.log(outputList);
                for (var i = 0; i < outputList.length; i++) {
                    listObject[outputList[i].getAttribute('value')] =
                        outputList[i].getAttribute('value');
                }
                listForm.reset();
            }
        };
        formSubmitButton.onclick = function (el) {
            el.preventDefault();
            if (inputElements[1].value == '') {
                dynamicName = dynamicName;
            }
            else {
                dynamicName = inputElements[1].value;
            }
            var formData = {
                type: 'select',
                label: inputElements[0].value,
                name: inputElements[1].value,
                required: inputElements[2].checked,
                list: listObject
            };
            // // console.log(formData.radio);
            if (formData.list == undefined) {
                formData.list = '';
            }
            _this.displayData(formData);
            form.reset();
        };
    };
    FormGenerator.prototype.displayData = function (object) {
        var jsonForm = document.querySelector('div.json-output-form div.josn-output-data pre');
        jsonForm.innerHTML = '';
        FormGenerator.FormsData.push(object);
        for (var i = 0; i < FormGenerator.FormsData.length; i++) {
            jsonForm.innerHTML += "\"control-" + (i + 1) + "\":";
            jsonForm.innerHTML += ' { <br>';
            // console.log(FormGenerator.FormsData);
            for (var val in FormGenerator.FormsData[i]) {
                if (val !== '') {
                    if (typeof (FormGenerator.FormsData[i][val]) == 'object') {
                        // console.log(FormGenerator.FormsData[i][val]);
                        jsonForm.innerHTML += '		"' + val + '":  {<br>';
                        // below insert object property 
                        for (var value in FormGenerator.FormsData[i][val]) {
                            jsonForm.innerHTML += '			"' + FormGenerator.FormsData[i][val][value] +
                                '":';
                            jsonForm.innerHTML += '	"' + FormGenerator.FormsData[i][val][value] +
                                '"<br>';
                        }
                        jsonForm.innerHTML += '          		}<br>';
                        //console.log(FormGenerator.FormsData[i][val]);
                    }
                    else {
                        jsonForm.innerHTML += '		"' + val + '":';
                        jsonForm.innerHTML += '    "' + FormGenerator.FormsData[i][val] +
                            '"<br>';
                    }
                }
            }
            jsonForm.innerHTML += '	     }<br>';
        }
        // FormGenerator.count++;
    };
    return FormGenerator;
}());
FormGenerator.FormsData = [];
