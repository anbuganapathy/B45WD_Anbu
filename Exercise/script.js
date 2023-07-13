let div1 = document.createElement("div");
div1.setAttribute("class", "container");
document.body.append(div1);

let countryLabel = document.createElement("label");
countryLabel.setAttribute("for", "country");
countryLabel.innerText = "Countries list: ";
div1.append(countryLabel);

let dropdown = document.createElement("select");
dropdown.setAttribute("class", "form-select");
dropdown.setAttribute("id", "country");
dropdown.setAttribute("name", "country");
dropdown.setAttribute("onchange", "populationData()");
div1.append(dropdown);

let option1 = document.createElement("option");
option1.setAttribute("selected","");
option1.innerText = "Choose a country";
dropdown.append(option1);

document.body.append(document.createElement("br"));

let div2 = document.createElement("div");
div2.setAttribute("id", "country population");
document.body.append(div2);

let p = document.createElement("p");
p.setAttribute("id", "population");
div2.append(p);

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((res) => {
    res.forEach((element) => {
      let option = document.createElement("option");
      option.setAttribute("value", `${element.name.common}`);
      option.innerText = `${element.name.common}`;
      dropdown.append(option);
    });
  });

let populationData = async () => {
  let ddElem = document.getElementById("country").value;
  await fetch(    `https://restcountries.com/v3.1/name/${ddElem}?fullText=true`
  ).then(res=>res.json()).then(res=>{
    let divElem=document.getElementById("country population");
    let pElem = document.getElementById("population");
    pElem.innerText = `Total population of ${res[0].name.common}: ${res[0].population}`;
    // console.log(res);
    divElem.append(pElem);
  });
};

