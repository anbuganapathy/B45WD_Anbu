//About the task
let p = document.createElement("p");
p.setAttribute("id", "description");
p.innerHTML =
  "<ul><li>Create a form using HTML,CSS and DOM.</li> <li>The form should contain First Name, Last Name, Address, Pincode, Gender, Choice of food (must choose atleast 2 out of 5 options), State and Country.</li> <li>OnSubmit of the form the value should get appended to the table. </li> <li>The columns of the table must contain First Name, Last Name, Address, Pincode, Gender, Food, State and Country. </li><li> Clear the form fields after updating the records to the table.</li></ul>";
document.body.appendChild(p);

//form element
let form = document.createElement("form");
form.setAttribute("id", "form");
form.setAttribute("class", "Form");
document.body.appendChild(form);

//Create a 'div' element
let div1 = document.createElement("div");
div1.setAttribute("class", "card");
form.append(div1);

//Create a 'div' element
let div2 = document.createElement("div");
div2.setAttribute("class", "card-body");
div1.append(div2);

//Create a 'div' element
let formDiv = document.createElement("div");
formDiv.setAttribute("class", "form-group");
div2.append(formDiv);

//form title for registration
let h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.setAttribute("class", "card-title");
h1.innerText = "DOM Manipulation with Forms";
formDiv.appendChild(h1);

//First Name label
let firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("for", "first-name");
firstNameLabel.innerText = "First Name:";
formDiv.appendChild(firstNameLabel);

//First Name text box
let firstNameTextBox = document.createElement("input");
firstNameTextBox.setAttribute("type", "text");
firstNameTextBox.setAttribute("class", "form-control");
firstNameTextBox.setAttribute("id", "first-name");
firstNameTextBox.setAttribute("placeholder", "Enter the first name here");
firstNameTextBox.setAttribute("required", "");
formDiv.appendChild(firstNameTextBox);

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Last Name label
let lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("for", "last-name");
lastNameLabel.innerText = "Last Name:";
formDiv.appendChild(lastNameLabel);

//Last Name text box
let lastNameTextBox = document.createElement("input");
lastNameTextBox.setAttribute("type", "text");
lastNameTextBox.setAttribute("class", "form-control");
lastNameTextBox.setAttribute("id", "last-name");
lastNameTextBox.setAttribute("placeholder", "Enter the last name here");
lastNameTextBox.setAttribute("required", "");
formDiv.appendChild(lastNameTextBox);

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Address label
let addressLabel = document.createElement("label");
addressLabel.setAttribute("for", "address");
addressLabel.innerText = "Address:";
formDiv.appendChild(addressLabel);

//Address text box
let addressTextBox = document.createElement("textarea");
addressTextBox.setAttribute("class", "form-control");
addressTextBox.setAttribute("id", "address");
addressTextBox.setAttribute("placeholder", "Enter the address here");
addressTextBox.setAttribute("required", "");
formDiv.appendChild(addressTextBox);

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Pincode label
let pincodeLabel = document.createElement("label");
pincodeLabel.setAttribute("for", "pincode");
pincodeLabel.innerText = "Pincode:";
formDiv.appendChild(pincodeLabel);

//Pincode text box
let pincodeTextBox = document.createElement("input");
pincodeTextBox.setAttribute("type", "text");
pincodeTextBox.setAttribute("min", "6");
pincodeTextBox.setAttribute("max", "6");
pincodeTextBox.setAttribute("class", "form-control");
pincodeTextBox.setAttribute("id", "pincode");
pincodeTextBox.setAttribute("placeholder", "Enter the pincode here");
pincodeTextBox.setAttribute("required", "");
formDiv.appendChild(pincodeTextBox);

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Gender label
let genderLabel = document.createElement("label");
genderLabel.setAttribute("for", "gender");
genderLabel.innerHTML = "Gender: &nbsp &nbsp";
formDiv.appendChild(genderLabel);

//Male radio button
let maleRadioBtn = document.createElement("input");
maleRadioBtn.setAttribute("type", "radio");
maleRadioBtn.setAttribute("class", "form-check-input");
maleRadioBtn.setAttribute("id", "male");
maleRadioBtn.setAttribute("name", "gender");
maleRadioBtn.setAttribute("value", "Male");
maleRadioBtn.setAttribute("required", "");
formDiv.appendChild(maleRadioBtn);

//Male label for Male radio button
let maleLabel = document.createElement("label");
maleLabel.setAttribute("for", "male");
maleLabel.setAttribute("class", "labelOptions");
maleLabel.innerHTML = "Male &nbsp";
formDiv.appendChild(maleLabel);

//Female radio button
let femaleRadioBtn = document.createElement("input");
femaleRadioBtn.setAttribute("type", "radio");
femaleRadioBtn.setAttribute("class", "form-check-input");
femaleRadioBtn.setAttribute("id", "female");
femaleRadioBtn.setAttribute("name", "gender");
femaleRadioBtn.setAttribute("value", "Female");
femaleRadioBtn.setAttribute("required", "");
formDiv.appendChild(femaleRadioBtn);

//Female label for Male radio button
let femaleLabel = document.createElement("label");
femaleLabel.setAttribute("for", "female");
femaleLabel.setAttribute("class", "labelOptions");
femaleLabel.innerHTML = "Female &nbsp";
formDiv.appendChild(femaleLabel);

//Transgender radio button
let transgenderRadioBtn = document.createElement("input");
transgenderRadioBtn.setAttribute("type", "radio");
transgenderRadioBtn.setAttribute("class", "form-check-input");
transgenderRadioBtn.setAttribute("id", "transgender");
transgenderRadioBtn.setAttribute("name", "gender");
transgenderRadioBtn.setAttribute("value", "Transgender");
transgenderRadioBtn.setAttribute("required", "");
formDiv.appendChild(transgenderRadioBtn);

//Transgender label for Male radio button
let transgenderLabel = document.createElement("label");
transgenderLabel.setAttribute("for", "transgender");
transgenderLabel.setAttribute("class", "labelOptions");
transgenderLabel.innerHTML = "Transgender &nbsp";
formDiv.appendChild(transgenderLabel);

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Choice of food label
let choiceOfFoodLabel = document.createElement("label");
choiceOfFoodLabel.setAttribute("for", "choiceOfFood");
choiceOfFoodLabel.innerHTML = "Choice of food: &nbsp &nbsp";
formDiv.appendChild(choiceOfFoodLabel);

//Idly check box
let idlyCheckBox = document.createElement("input");
idlyCheckBox.setAttribute("type", "checkbox");
idlyCheckBox.setAttribute("class", "form-check-input");
idlyCheckBox.setAttribute("id", "idly");
idlyCheckBox.setAttribute("name", "choiceOfFood");
idlyCheckBox.setAttribute("value", "Idly");
formDiv.appendChild(idlyCheckBox);

//idly Label
let idlyLabel = document.createElement("label");
idlyLabel.setAttribute("for", "idly");
idlyLabel.setAttribute("class", "labelOptions");
idlyLabel.innerHTML = "Idly &nbsp";
formDiv.appendChild(idlyLabel);

//chappathi check box
let chappathiCheckBox = document.createElement("input");
chappathiCheckBox.setAttribute("type", "checkbox");
chappathiCheckBox.setAttribute("class", "form-check-input");
chappathiCheckBox.setAttribute("id", "chappathi");
chappathiCheckBox.setAttribute("name", "choiceOfFood");
chappathiCheckBox.setAttribute("value", "Chappathi");
formDiv.appendChild(chappathiCheckBox);

//chappathi Label
let chappathiLabel = document.createElement("label");
chappathiLabel.setAttribute("for", "chappathi");
chappathiLabel.setAttribute("class", "labelOptions");
chappathiLabel.innerHTML = "Chappathi &nbsp";
formDiv.appendChild(chappathiLabel);

//dosa check box
let dosaCheckBox = document.createElement("input");
dosaCheckBox.setAttribute("type", "checkbox");
dosaCheckBox.setAttribute("class", "form-check-input");
dosaCheckBox.setAttribute("id", "dosa");
dosaCheckBox.setAttribute("name", "choiceOfFood");
dosaCheckBox.setAttribute("value", "Dosa");
formDiv.appendChild(dosaCheckBox);

//dosa Label
let dosaLabel = document.createElement("label");
dosaLabel.setAttribute("class", "labelOptions");
dosaLabel.setAttribute("for", "dosa");
dosaLabel.innerHTML = "Dosa &nbsp";
formDiv.appendChild(dosaLabel);

//poori check box
let pooriCheckBox = document.createElement("input");
pooriCheckBox.setAttribute("type", "checkbox");
pooriCheckBox.setAttribute("class", "form-check-input");
pooriCheckBox.setAttribute("id", "poori");
pooriCheckBox.setAttribute("name", "choiceOfFood");
pooriCheckBox.setAttribute("value", "Poori");
formDiv.appendChild(pooriCheckBox);

//poori Label
let pooriLabel = document.createElement("label");
pooriLabel.setAttribute("class", "labelOptions");
pooriLabel.setAttribute("for", "poori");
pooriLabel.innerHTML = "Poori &nbsp";
formDiv.appendChild(pooriLabel);

//Upma check box
let upmaCheckBox = document.createElement("input");
upmaCheckBox.setAttribute("type", "checkbox");
upmaCheckBox.setAttribute("class", "form-check-input");
upmaCheckBox.setAttribute("id", "upma");
upmaCheckBox.setAttribute("name", "choiceOfFood");
upmaCheckBox.setAttribute("value", "Upma");
formDiv.appendChild(upmaCheckBox);

//poori Label
let upmaLabel = document.createElement("label");
upmaLabel.setAttribute("class", "labelOptions");
upmaLabel.setAttribute("for", "upma");
upmaLabel.innerHTML = "Upma &nbsp";
formDiv.appendChild(upmaLabel);

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Adding line break
formDiv.appendChild(document.createElement("br"));

//state label
let stateLabel = document.createElement("label");
stateLabel.setAttribute("for", "state");
stateLabel.innerText = "State:";
formDiv.appendChild(stateLabel);

//state drop down box
let stateDropDownBox = document.createElement("select");
stateDropDownBox.setAttribute("id", "state");
stateDropDownBox.setAttribute("class", "form-select");
stateDropDownBox.setAttribute("name", "states");
stateDropDownBox.setAttribute("required", "");
formDiv.appendChild(stateDropDownBox);

let stateOption1 = document.createElement("option");
stateOption1.setAttribute("selected", "");
stateOption1.setAttribute("disabled", "");
stateOption1.setAttribute("value", "");
stateOption1.innerText = "Select a State";
stateDropDownBox.appendChild(stateOption1);

let stateOption2 = document.createElement("option");
stateOption2.setAttribute("value", "Andhra Pradesh");
stateOption2.innerText = "Andhra Pradesh";
stateDropDownBox.appendChild(stateOption2);

let stateOption3 = document.createElement("option");
stateOption3.setAttribute("value", "Assam");
stateOption3.innerText = "Assam";
stateDropDownBox.appendChild(stateOption3);

let stateOption4 = document.createElement("option");
stateOption4.setAttribute("value", "Bihar");
stateOption4.innerText = "Bihar";
stateDropDownBox.appendChild(stateOption4);

let stateOption5 = document.createElement("option");
stateOption5.setAttribute("value", "Chhattisgarh");
stateOption5.innerText = "Chhattisgarh";
stateDropDownBox.appendChild(stateOption5);

let stateOption6 = document.createElement("option");
stateOption6.setAttribute("value", "Goa");
stateOption6.innerText = "Goa";
stateDropDownBox.appendChild(stateOption6);

let stateOption7 = document.createElement("option");
stateOption7.setAttribute("value", "Gujarat");
stateOption7.innerText = "Gujarat";
stateDropDownBox.appendChild(stateOption7);

let stateOption8 = document.createElement("option");
stateOption8.setAttribute("value", "Haryana");
stateOption8.innerText = "Haryana";
stateDropDownBox.appendChild(stateOption8);

let stateOption9 = document.createElement("option");
stateOption9.setAttribute("value", "Himachal Pradesh");
stateOption9.innerText = "Himachal Pradesh";
stateDropDownBox.appendChild(stateOption9);

let stateOption10 = document.createElement("option");
stateOption10.setAttribute("value", "Tamil Nadu");
stateOption10.innerText = "Tamil Nadu";
stateDropDownBox.appendChild(stateOption10);

let stateOption11 = document.createElement("option");
stateOption11.setAttribute("value", "Other States");
stateOption11.innerText = "Other States";
stateDropDownBox.appendChild(stateOption11);

//Adding line break
formDiv.appendChild(document.createElement("br"));

//country label
let countryLabel = document.createElement("label");
countryLabel.setAttribute("for", "country");
countryLabel.innerText = "Country:";
formDiv.appendChild(countryLabel);

//country drop down box
let countryDropDownBox = document.createElement("select");
countryDropDownBox.setAttribute("id", "country");
countryDropDownBox.setAttribute("class", "form-select");
countryDropDownBox.setAttribute("name", "country");
countryDropDownBox.setAttribute("required", "");
formDiv.appendChild(countryDropDownBox);

let countryOption1 = document.createElement("option");
countryOption1.setAttribute("selected", "");
countryOption1.setAttribute("disabled", "");
countryOption1.setAttribute("value", "");
countryOption1.innerText = "Select a Country";
countryDropDownBox.appendChild(countryOption1);

let countryOption2 = document.createElement("option");
countryOption2.setAttribute("value", "India");
countryOption2.innerText = "India";
countryDropDownBox.appendChild(countryOption2);

let countryOption3 = document.createElement("option");
countryOption3.setAttribute("value", "United States");
countryOption3.innerText = "United States";
countryDropDownBox.appendChild(countryOption3);

let countryOption4 = document.createElement("option");
countryOption4.setAttribute("value", "Canada");
countryOption4.innerText = "Canada";
countryDropDownBox.appendChild(countryOption4);

let countryOption5 = document.createElement("option");
countryOption5.setAttribute("value", "Germany");
countryOption5.innerText = "Germany";
countryDropDownBox.appendChild(countryOption5);

let countryOption6 = document.createElement("option");
countryOption6.setAttribute("value", "Australia");
countryOption6.innerText = "Australia";
countryDropDownBox.appendChild(countryOption6);

let countryOption7 = document.createElement("option");
countryOption7.setAttribute("value", "United Kingdom");
countryOption7.innerText = "United Kingdom";
countryDropDownBox.appendChild(countryOption7);

let countryOption8 = document.createElement("option");
countryOption8.setAttribute("value", "France");
countryOption8.innerText = "France";
countryDropDownBox.appendChild(countryOption8);

let countryOption9 = document.createElement("option");
countryOption9.setAttribute("value", "China");
countryOption9.innerText = "China";
countryDropDownBox.appendChild(countryOption9);

let countryOption10 = document.createElement("option");
countryOption10.setAttribute("value", "Russia");
countryOption10.innerText = "Russia";
countryDropDownBox.appendChild(countryOption10);

let countryOption11 = document.createElement("option");
countryOption11.setAttribute("value", "Other Countries");
countryOption11.innerText = "Other Countries";
countryDropDownBox.appendChild(countryOption11);

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Adding button to submit the form
let btn = document.createElement("button");
btn.setAttribute("type", "submit");
btn.setAttribute("id", "submit");
btn.setAttribute("class", "btn btn-primary");
btn.setAttribute("onclick", "formValidation(event)");
btn.innerText = "Submit";
formDiv.appendChild(btn);

//Adding line break
formDiv.appendChild(document.createElement("br"));

//Adding line break
formDiv.appendChild(document.createElement("br"));

//create a table for storing the form data
let table1 = document.createElement("table");
table1.setAttribute("class", "table");
table1.setAttribute("id", "formTableData");
document.body.appendChild(table1);

let thead = document.createElement("thead");
table1.appendChild(thead);

let tr = document.createElement("tr");
thead.appendChild(tr);

let th2 = document.createElement("th");
th2.setAttribute("scope", "col");
th2.innerText = "First Name";
tr.appendChild(th2);

let th3 = document.createElement("th");
th3.setAttribute("scope", "col");
th3.innerText = "Last Name";
tr.appendChild(th3);

let th4 = document.createElement("th");
th4.setAttribute("scope", "col");
th4.innerText = "Address";
tr.appendChild(th4);

let th5 = document.createElement("th");
th5.setAttribute("scope", "col");
th5.innerText = "Pincode";
tr.appendChild(th5);

let th6 = document.createElement("th");
th6.setAttribute("scope", "col");
th6.innerText = "Gender";
tr.appendChild(th6);

let th7 = document.createElement("th");
th7.setAttribute("scope", "col");
th7.innerText = "Food";
tr.appendChild(th7);

let th8 = document.createElement("th");
th8.setAttribute("scope", "col");
th8.innerText = "State";
tr.appendChild(th8);

let th9 = document.createElement("th");
th9.setAttribute("scope", "col");
th9.innerText = "Country";
tr.appendChild(th9);

let tbody = document.createElement("tbody");
table1.appendChild(tbody);

//function that validates the form
let fname = [];
let lname = [];
let address = [];
let pincode = [];
let gender = [];
let foods = [];
let state = [];
let country = [];

let n = 1;
let x = 0;

let formValidation = (event) => {
  console.log("FORM VALIDATION");
  let count=0;
  let itemForm1 = document.getElementById("form"); // getting the parent container of all the checkbox inputs
  let checkBoxes1 = itemForm1.querySelectorAll('input[type="checkbox"]'); // get all the check box
  let radioBtnError = true;
  let checkBoxError = true;
  let fNameValid = document.getElementById("first-name").value;
  console.log("FIRST NAME:",fNameValid);
  if (fNameValid == "") {
    alert("Enter the first name.");  event.preventDefault();

  }
  let lNameValid = document.getElementById("last-name").value;
  console.log("LAST NAME:",lNameValid);
  if (lNameValid == "") {
    alert("Enter the last name.");  event.preventDefault();

  }
  let addressValid = document.getElementById("address").value;
  console.log("ADDRESS:",addressValid);
  if (addressValid == "") {
    alert("Enter the address.");  event.preventDefault();

  }
  let pincodeValid = document.getElementById("pincode").value;
  console.log("PINCODE:",pincodeValid);
  if (pincodeValid == "") {
    alert("Enter the pincode.");  event.preventDefault();

  }
  let radioBtn1 = itemForm1.querySelectorAll('input[type="radio"]'); // get all the check box
  radioBtn1.forEach((item) => {
    // loop all the Gender radio button
    if (item.checked) {
      //if the Gender radio button is checked
      radioBtnError = false;
      console.log("GENDER RADIO BUTTON:",item.value);
    }
  });
  if (radioBtnError) {
    alert("Select a gender.");
    event.preventDefault();
  }
    checkBoxes1.forEach((item) => {
      // loop all the Choice of Food checkbox item
      if (item.checked) {
        //if the Choice of Food check box is checked
        checkBoxError = false;
        count=count+1;
        console.log("CHOICE OF FOOD CHECK BOX:",item.value);
      }
    });
    console.log("CHECK BOX COUNT:",count);
  if(checkBoxError || count<2){
    alert("Select atleast two Choice of food.");
    event.preventDefault();
  }
  let stateValid = document.getElementById("state").value;
  console.log("STATE:",stateValid);
  if (stateValid == "") {
    alert("Select a State.");  event.preventDefault();

  }
  let countryValid = document.getElementById("country").value;
  console.log("COUNTRY:",countryValid);
  if (countryValid == "") {
    alert("Select a Country.");
    event.preventDefault();
  }

  if(countryValid!=="" && stateValid !== "" && !checkBoxError && count>=2 && !radioBtnError && pincodeValid !== "" && addressValid !== "" && lNameValid !== "" && fNameValid !== "") {
    // append the form data to the table.
    let addRow = document.getElementById("formTableData");
    let newRow = addRow.insertRow(n);

    fname[x] = document.getElementById("first-name").value;
    lname[x] = document.getElementById("last-name").value;
    address[x] = document.getElementById("address").value;
    pincode[x] = document.getElementById("pincode").value;
    let itemForm = document.getElementById("form");
    let checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]');
    let str = "";
    checkBoxes.forEach((item) => {
      // loop all the checkbox item
      if (item.checked) {
        //if the check box is checked
        str += item.value + " ";
        console.log("Choice of Food:", str);
      }
    });
    foods[x] = str;
    var radioBtn = itemForm.querySelectorAll('input[type="radio"]'); // get all the check box
    radioBtn.forEach((item) => {
      // loop all the radio button
      if (item.checked) {
        //if the radio button is checked
        gender[x] = item.value;
      }
    });
    state[x] = document.getElementById("state").value;
    country[x] = document.getElementById("country").value;
    console.log(
      "FIRST NAME:",
      fname,
      "LAST NAME:",
      lname,
      "ADDRESS:",
      address,
      "PINCODE:",
      pincode,
      "GENDER:",
      gender,
      "FOOD:",
      foods,
      "STATE:",
      state,
      "COUNTRY:",
      country
    );

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = fname[x];
    cell2.innerHTML = lname[x];
    cell3.innerHTML = address[x];
    cell4.innerHTML = pincode[x];
    cell5.innerHTML = gender[x];
    cell6.innerHTML = foods[x];
    cell7.innerHTML = state[x];
    cell8.innerHTML = country[x];

    n++;
    x++;
    
    //clear the form values
    document.getElementById("form").reset();
    
    //prevent the page from reloading
    event.preventDefault();
  }
      //prevent the page from reloading
      event.preventDefault();
};
