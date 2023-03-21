let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  if (xhr.status == 200) {
    let users = JSON.parse(xhr.response);
    for (let i of users) {
        if (i.hasOwnProperty("currencies")) {
            if(i.currencies.hasOwnProperty("USD"))
            console.log(i);
      } 
    }
  } else {
    console.log(xhr.status);
  }
};
