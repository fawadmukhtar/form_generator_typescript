class FormGenerator{
	static FormsData = [];

	constructor(){
	}
	
	public displayForm(selectedField:string){
		// use type assertion
		let displayForms:any = document.querySelectorAll('div.form-display');
		for(let i = 0; i < displayForms.length; i++){
			if(displayForms[i].classList.contains(selectedField)){
				displayForms[i].style.display = 'block';
			}else{
				displayForms[i].style.display = 'none';
			}
		}
		return this;
	}


	public bindingEditProperties(selectedForm){	

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

	}

	private bindTextForm(selectedForm){
		
		let dynamicName = '';
		let outputFormLabel = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper div.form-group label`);

		let outputFormInput:any = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper div.form-group input`);

		let inputElements:any = document.querySelectorAll
		(`div.${selectedForm} div.edit-properties div.edit-form input`);

		let formSubmitButton:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form button`);

		let form = <HTMLFormElement>document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form form`);

		let jsonForm = document.querySelector
		('div.json-output-form div.josn-output-data pre');

		for(let i = 0; i < inputElements.length; i++){
			
			if(inputElements[i].classList.contains('changeForm')){

				if(inputElements[i].classList.contains('classLabel')){
					// bind label element
					inputElements[i].onkeyup = () => 
						{
							outputFormLabel.innerHTML = inputElements[i].value;
						} 
				}else{
				//	set placehodler attribute
					inputElements[i].onkeyup = () =>
					{
						outputFormInput.setAttribute('placeholder',inputElements[i]
							.value);
					}
				}
			}
		}

		formSubmitButton.onclick = (el) => {
			el.preventDefault();
		
				if(inputElements[3].value == ''){
					dynamicName = dynamicName;
				}else{
					dynamicName = inputElements[3].value;
				}

				let formData = {
					type: 'text',
					[dynamicName]: outputFormInput.value, 
					label: inputElements[0].value,
					id: inputElements[1].value,
					class: inputElements[2].value,
					name: inputElements[3].value,
					placehoder: inputElements[4].value,
					required: inputElements[5].checked
				};

				this.displayData(formData);

				form.reset();
		} 

	}

	

	private bindPasswordForm(selectedForm){
		let dynamicName = '';
		let outputFormLabel = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper div.form-group label`);

		let outputFormInput:any = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper div.form-group input`);

		let inputElements:any = document.querySelectorAll
		(`div.${selectedForm} div.edit-properties div.edit-form input`);

		let formSubmitButton:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form button`);

		let form = <HTMLFormElement>document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form form`);

		let jsonForm = document.querySelector
		('div.json-output-form div.josn-output-data pre');

		for(let i = 0; i < inputElements.length; i++){
			
			if(inputElements[i].classList.contains('changeForm')){

				if(inputElements[i].classList.contains('classLabel')){
					// bind label element
					inputElements[i].onkeyup = () => 
						{
							outputFormLabel.innerHTML = inputElements[i].value;
						} 
				}else{
				//	set placehodler attribute
					inputElements[i].onkeyup = () =>
					{
						outputFormInput.setAttribute('placeholder',inputElements[i]
							.value);
					}
				}
			}
		}

		formSubmitButton.onclick = (el) => {
			el.preventDefault();
				
			if(inputElements[3].value == ''){
				dynamicName = dynamicName;
			}else{
				dynamicName = inputElements[3].value;
			}

			let formData = {
				type: 'password',
				[dynamicName]: outputFormInput.value, 
				label: inputElements[0].value,
				id: inputElements[1].value,
				class: inputElements[2].value,
				name: inputElements[3].value,
				placehoder: inputElements[4].value,
				required: inputElements[5].checked
			};

			this.displayData(formData);

			form.reset();
		}
	}

	private bindTextareaForm(selectedForm){
		let dynamicName = '';
		let outputFormLabel = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper div.form-group label`);

		let outputFormTextarea:any = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper div.form-group textarea`);

		let inputElements:any = document.querySelectorAll
		(`div.${selectedForm} div.edit-properties div.edit-form input`);

		let formSubmitButton:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form button`);

		let form = <HTMLFormElement>document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form form`);

		for(let i = 0; i < inputElements.length; i++){
			
			if(inputElements[i].classList.contains('changeForm')){

				if(inputElements[i].classList.contains('textarea-label')){
					inputElements[i].onkeyup = () => 
					{
						outputFormLabel.innerHTML = inputElements[i].value;
					}
				}else if(inputElements[i].classList.contains('textarea-rows')){
						inputElements[i].onkeyup = () =>
						{
							outputFormTextarea.setAttribute('rows',
							 inputElements[i].value);
						}
				}else if(inputElements[i].classList.contains('textarea-cols')){
						inputElements[i].onkeyup = () =>
						{
							outputFormTextarea.setAttribute('cols', 
								inputElements[i].value);
						}
				}else{
						inputElements[i].onkeyup = () =>
						{
							outputFormTextarea.setAttribute('placeholder',
								inputElements[i].value);
						}
				}
			}
		}

		formSubmitButton.onclick = (el) => {
			el.preventDefault();
				
			if(inputElements[5].value == ''){
				dynamicName = dynamicName;
			}else{
				dynamicName = inputElements[5].value;
			}

			let formData = {
				type: 'textarea',
				[dynamicName]: outputFormTextarea.value, 
				label: inputElements[0].value,
				id: inputElements[1].value,
				class: inputElements[2].value,
				rows: inputElements[3].value,
				cols: inputElements[4].value,
				name: inputElements[5].value,
				placehoder: inputElements[6].value,
				required: inputElements[7].checked
			};

			this.displayData(formData);

			form.reset();
		}
	}

	private bindRadioForm(selectedForm){
		let dynamicName = '';
		let outputFormLabel = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper div.form-group label`);

		let radioOutputForm:any = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper form`);

		

		let radioFormInput:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.add-radio input`);
		

		let addRadioButton:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.add-radio button`);
		
		let radioForm: any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.add-radio form`)

		let inputElements:any = document.querySelectorAll
		(`div.${selectedForm} div.edit-properties div.edit-form input`);

		let formSubmitButton:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form button`);

		let form = <HTMLFormElement>document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form form`);

		// let jsonForm = document.querySelector
		// ('div.json-output-form div.josn-output-data pre');
		

		for(let i = 0; i < inputElements.length; i++){
			
			if(inputElements[i].classList.contains('changeForm')){
				inputElements[i].onkeyup = () =>
				{
					outputFormLabel.innerHTML = inputElements[i].value;
				}
			}
		}

		let radioObject;

		addRadioButton.onclick = (el) => {
			el.preventDefault();
			// radioObject = {};
			if(radioFormInput.value){
				//first create element
				let newDiv = document.createElement('div');
				newDiv.setAttribute('class', 'radio');

				let newLabelElement = document.createElement('label');

				let newInputElement = document.createElement('input');
				newInputElement.setAttribute('type', 'radio');
				// newInputElement.setAttribute('name', 'option1');
				newInputElement.setAttribute('name',  radioFormInput.value);				
				let labelTextNode = document.createTextNode(radioFormInput.value);

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
				let radioOutputBtn: any = document.querySelectorAll
				(`div.${selectedForm} div.output-form div.form-wrapper form div.radio input`);

				for(let i = 0; i < radioOutputBtn.length; i++){
					radioObject[radioOutputBtn[i].getAttribute('name')] =
					 radioOutputBtn[i].getAttribute('name');
				}

				radioForm.reset();
			}
		}

		formSubmitButton.onclick = (el) => {
			el.preventDefault();
				
			if(inputElements[1].value == ''){
				dynamicName = dynamicName;
			}else{
				dynamicName = inputElements[1].value;
			}

			let formData = {
				type: 'radio', 
				label: inputElements[0].value,
				name: inputElements[1].value,
				required: inputElements[2].checked,
				radio: radioObject
			};

			// console.log(formData.radio);
			if(formData.radio == undefined){
				formData.radio = '';
			}

			this.displayData(formData);
			form.reset();
		}



	}

	private bindCheckboxForm(selectedForm){
		let dynamicName = '';
		let outputFormLabel = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper div.form-group label`);

		let inputElements:any = document.querySelectorAll
		(`div.${selectedForm} div.edit-properties div.edit-form input`);

		let formSubmitButton:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form button`);

		let form = <HTMLFormElement>document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form form`);

		for(let i = 0; i < inputElements.length; i++){	
			if(inputElements[i].classList.contains('changeForm')){
					// bind label element
				inputElements[i].onkeyup = () => 
					{
						outputFormLabel.innerHTML = inputElements[i].value;
					} 
			}
		}

		formSubmitButton.onclick = (el) => {
			el.preventDefault();
			let formData = {
				type: 'checkbox',
				label: inputElements[0].value,
				name: inputElements[1].value,
				required: inputElements[2].checked
			};
			this.displayData(formData);
			form.reset();
		}
	}


	private bindSelectForm(selectedForm){
		let dynamicName = '';
		// don't need
		let outputFormLabel = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper div.form-group label`);

		// for append child
		let listOutputForm:any = document.querySelector
		(`div.${selectedForm} div.output-form div.form-wrapper form select`);

		// add new list item
		let listFormInput:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.add-list input`);
		

		let addListButton:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.add-list button`);
		
		// for clear form
		let listForm: any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.add-list form`)

		// edit properties
		let inputElements:any = document.querySelectorAll
		(`div.${selectedForm} div.edit-properties div.edit-form input`);

		// form submittion
		let formSubmitButton:any = document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form button`);

		// edit properties form clear
		let form = <HTMLFormElement>document.querySelector
		(`div.${selectedForm} div.edit-properties div.edit-form form`);

		// let jsonForm = document.querySelector
		// ('div.json-output-form div.josn-output-data pre');
		

		for(let i = 0; i < inputElements.length; i++){
			
			if(inputElements[i].classList.contains('changeForm')){
				inputElements[i].onkeyup = () =>
				{
					outputFormLabel.innerHTML = inputElements[i].value;
				}
			}
		}

		let listObject;

		addListButton.onclick = (el) => {
			el.preventDefault();
			// radioObject = {};
			if(listFormInput.value){
				//first create element
				
				let newOptionElement = document.createElement('option');				
				newOptionElement.setAttribute('value', listFormInput.value);

				let newOptionTextNode = document.createTextNode(listFormInput.value);

				newOptionElement.appendChild(newOptionTextNode);
				listOutputForm.appendChild(newOptionElement);

				listObject = {};
				// get all radio buttons
				let outputList: any = document.querySelectorAll
				(`div.${selectedForm} div.output-form div.form-wrapper form select option`);
				// console.log(outputList);
				for(let i = 0; i < outputList.length; i++){
					listObject[outputList[i].getAttribute('value')] =
					 outputList[i].getAttribute('value');
				}

				listForm.reset();
			}
		}

		formSubmitButton.onclick = (el) => {
			el.preventDefault();
				
			if(inputElements[1].value == ''){
				dynamicName = dynamicName;
			}else{
				dynamicName = inputElements[1].value;
			}

			let formData = {
				type: 'select', 
				label: inputElements[0].value,
				name: inputElements[1].value,
				required: inputElements[2].checked,
				list: listObject
			};

			// // console.log(formData.radio);
			if(formData.list == undefined){
				formData.list = '';
			}

			this.displayData(formData);
			form.reset();
		}
	}



	private displayData(object:any){

		let jsonForm = document.querySelector
		('div.json-output-form div.josn-output-data pre');

		jsonForm.innerHTML = '';

		FormGenerator.FormsData.push(object);

		for(let i= 0; i < FormGenerator.FormsData.length; i++){

			jsonForm.innerHTML += `"control-${i+1}":`;
			jsonForm.innerHTML += ' { <br>';
			// console.log(FormGenerator.FormsData);
			for(let val in FormGenerator.FormsData[i]){	
				if(val !== ''){
					if(typeof(FormGenerator.FormsData[i][val]) == 'object'){
						// console.log(FormGenerator.FormsData[i][val]);
						jsonForm.innerHTML += '		"'+ val + '":  {<br>';
						// below insert object property 
						for(let value in FormGenerator.FormsData[i][val]){
							jsonForm.innerHTML +='			"'+FormGenerator.FormsData[i][val][value]+
							'":';
							jsonForm.innerHTML +='	"'+FormGenerator.FormsData[i][val][value]+
							'"<br>';
						}
						jsonForm.innerHTML += '          		}<br>';
						//console.log(FormGenerator.FormsData[i][val]);
					}else{
						jsonForm.innerHTML += '		"'+ val + '":';
						jsonForm.innerHTML +='    "'+FormGenerator.FormsData[i][val]+
						'"<br>';
					}
				}
			}
			jsonForm.innerHTML += '	     }<br>';	
		}
		// FormGenerator.count++;
	}
}
