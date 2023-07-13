fetch("https://dog.ceo/api/breeds/list/all")
  .then((data) => data.json())
  .then((res) => {
    // console.log("RES (BREED LIST):", res);
    let breedList = Object.keys(res.message);
    // console.log("BREED LIST:", breedList);
    let selectElem = document.getElementById("dropdownMenu");
    breedList.forEach((element) => {
    //   console.log(element);
      let options = document.createElement("option");
      options.setAttribute("value", `${element}`);
      options.innerText = `${element}`;
      selectElem.append(options);
    });
  })
  .catch((err) => console.log("Breed error:", err));

let dogImage = () => {
  let promise1 = new Promise((resolve, reject) => {
    // let data = fetch("https://dog.ceo/api/breeds/image/random");
    let dropdownOption=document.getElementById("dropdownMenu").value;
    // console.log("DropdownOption:",dropdownOption);
    let data = fetch(`https://dog.ceo/api/breed/${dropdownOption}/images/random`);
    resolve(data);
    reject(err);
  });
  promise1
    .then((data) => data.json())
    .then((res) => {
    //   console.log(res);
    //   console.log("Keys:", Object.keys(res.message));
      let parentElem = document.getElementById("imgResult");
      parentElem.innerHTML = "";
      document.body.append(parentElem);
      childElem = document.createElement("img");
      childElem.setAttribute("src", `${res.message}`);
      childElem.setAttribute("class", "dogImg");
      childElem.setAttribute("id", "dogImg");
      parentElem.append(childElem);
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
};
