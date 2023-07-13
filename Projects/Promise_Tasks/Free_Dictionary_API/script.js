function searchText() {
  let promise = new Promise((resolve, reject) => {
    let searchTxt = document.getElementById("searchTxt").value;
    // console.log(searchTxt);
    let dictRes = fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTxt}`
    );
    resolve(dictRes);
    reject(err);
  });

  promise
    .then((dictRes) => dictRes.json())
    .then((res) => {
      console.log("RESPONSE:", res);
      let searchID = document.getElementById("searchText");
      let searchResult = document.getElementById("searchResult");
      searchResult.setAttribute("style", "background-color: aliceblue;");
      searchResult.innerHTML = "";
      searchID.append(searchResult);
      res.forEach((element, ind) => {
        let h3 = document.createElement("h3");
        h3.innerHTML = `${element.word}<sup>[${ind + 1}]</sup>`;
        searchResult.append(h3);
        if (element.phonetic !== "") {
          let h5 = document.createElement("h5");
          h5.setAttribute("class", "pronunciation");
          h5.innerHTML = `<i>${element.phonetic}</i>`;
          searchResult.append(h5);
        } else if (element.phonetic === "") {
          let h5 = document.createElement("h5");
          h5.setAttribute("class", "pronunciation");
          h5.innerText = "";
          searchResult.append(h5);
        }
        for (let i = 0; i < element.meanings.length; i++) {
          let h5 = document.createElement("h5");
          h5.innerHTML = `${element.meanings[i].partOfSpeech}`;
          searchResult.append(h5);
          // console.log(element.meanings[i].partOfSpeech);
          let ul = document.createElement("ol");
          searchResult.append(ul);
          for (let j = 0; j < element.meanings[i].definitions.length; j++) {
            let li = document.createElement("li");
            li.innerHTML = `${element.meanings[i].definitions[j].definition}`;
            ul.append(li);
          }
        }
      });
    })
    .catch((err) => {
      console.log("ERROR:", err);
      let searchID = document.getElementById("searchText");
      let searchResult = document.getElementById("searchResult");
      searchResult.setAttribute("style", "background-color: aliceblue;");
      searchResult.innerHTML =
        "<b>No exact match found in English. Try to search a different word.</b>";
      searchID.append(searchResult);
    });
}
