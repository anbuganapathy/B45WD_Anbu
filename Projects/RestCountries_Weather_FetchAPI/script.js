let div1 = document.createElement("div");
div1.setAttribute("class", "container");
document.body.append(div1);

let h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.setAttribute("class", "text-center");
h1.innerText = "Rest Countries & Weather using fetch API";
div1.append(h1);

let div2 = document.createElement("div");
div2.setAttribute("class", "row");
div1.append(div2);

function cardItem(...arr) {
  let div3 = document.createElement("div");
  div3.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4");
  div2.append(div3);

  let div4 = document.createElement("div");
  div4.setAttribute("class", "card h-100 text-center");
  div3.append(div4);

  let div5 = document.createElement("div");
  div5.setAttribute("class", "card-header text-center");
  div5.innerText = `${arr[0]}`;
  div4.append(div5);

  let div6 = document.createElement("div");
  div6.setAttribute("class", "card-body");
  div4.append(div6);

  let img = document.createElement("img");
  img.setAttribute("src", `${arr[1]}`);
  img.setAttribute("alt", "COUNTRY FLAG");
  img.setAttribute("height", "180");
  img.setAttribute("width", "60");
  img.setAttribute("class", "card-img-top");
  div6.append(img);

  let div7 = document.createElement("div");
  div7.setAttribute("class", "card-text");
  div6.append(div7);

  let p1 = document.createElement("p");
  p1.innerText = `Capital: ${arr[2]}`;
  div7.append(p1);

  let p2 = document.createElement("p");
  p2.innerText = `Region: ${arr[3]}`;
  div7.append(p2);

  let p3 = document.createElement("p");
  p3.innerText = `Country Code: ${arr[4]}`;
  div7.append(p3);

  let btn = document.createElement("button");
  btn.setAttribute("class", "btn btn-primary");
  btn.setAttribute(
    "onclick",
    `location.href="https://api.openweathermap.org/data/2.5/weather?lat=${arr[5]}&lon=${arr[6]}&appid=83bdc6322bae8309a1727fa2107f9eb8"`
  );
  btn.innerText = "Click for Weather";
  div6.append(btn);
}

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((res) => {
    let restCountriesData = res.map(
      ({ name, flags, capital, region, cca3, latlng }) => {
        return {
          name,
          flags,
          capital,
          region,
          cca3,
          latlng,
        };
      }
    );
    console.log("REST COUNTRIES:", restCountriesData);
    return restCountriesData;
  })
  .then((restCountriesData) => {
    restCountriesData.forEach((element) => {
      cardItem(
        element.name.common,
        element.flags.svg,
        element.capital,
        element.region,
        element.cca3,
        element.latlng[0],
        element.latlng[1]
      );
      //   console.log("COUNTRY NAME:", element.name.common,"FLAG:",element.flags.png,"CAPITAL:",element.capital,"REGION:",element.region,"COUNTRY CODE:",element.cca3,"LAT:",element.latlng[0],"LNG:",element.latlng[1] );
    });
  })
  .catch((err) => console.log("ERROR:", err));

function extractData() {
  restCountriesData.forEach((element) => {
    console.log("NAME:", element.name.common);
  });
}
