let div1 = document.createElement("div");
div1.setAttribute("class", "header");
document.body.append(div1);

let p = document.createElement("p");
p.setAttribute("id", "description");
p.innerHTML =
  "<ul><li>Design a Pagination in DOM Manipulation</li><li>Create the needed HTML elements using DOM</li><li>Use only CSS for the design</li><li>Usage of any deprecated tags is not allowed to be created in DOM</li></ul>";
div1.appendChild(p);

let div2 = document.createElement("div");
div2.setAttribute("id", "pagination");
document.body.append(div2);

let h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.innerText = "Pagination in DOM Manipulation";
div2.append(h1);

let div3 = document.createElement("div");
div3.setAttribute("class", "table-responsive");
div2.append(div3);

let table = document.createElement("table");
table.setAttribute("class", "table table-bordered border-primary");
table.setAttribute("id", "table");
div3.append(table);

let thead = document.createElement("thead");
table.append(thead);

let tr1 = document.createElement("tr");
thead.append(tr1);

let th1 = document.createElement("th");
th1.innerText = "ID";
tr1.append(th1);

let th2 = document.createElement("th");
th2.innerText = "NAME";
tr1.append(th2);

let th3 = document.createElement("th");
th3.innerText = "EMAIL";
tr1.append(th3);

let tbody = document.createElement("tbody");
table.append(tbody);

let count = 0;
let total = 0;
let users = [];
let tr, td1, td2, td3, div4, nav, ul;
let currentPage=1;
function viewPage(num) {
  currentPage=num;
  let max = num * 10;
  let min = max - 10;
  console.log("---VIEW PAGE---");
  console.log("VIEW PAGE NO.:", num);
  console.log("CURRENT PAGE:", currentPage);
  console.log("MAX:", max);
  console.log("MIN:", min);
  let newData = users.slice(min, max);
  for (let i = 0; i < newData.length; i++) {
    let newrow = document.getElementById(`row${i + 1}`);
    let newID = document.getElementById(`id${i + 1}`);
    newID.innerText = `${newData[i].id}`;
    // console.log("ID:",newData[i].id);
    newrow.append(newID);
    let newName = document.getElementById(`name${i + 1}`);
    newName.innerText = `${newData[i].name}`;
    // console.log("NAME:",newData[i].name);
    newrow.append(newName);
    let newEmail = document.getElementById(`email${i + 1}`);
    newEmail.innerText = `${newData[i].email}`;
    // console.log("EMAIL:",newData[i].email);
    newrow.append(newEmail);
  }
}

function viewPreviousPage() {
  let max = (currentPage-1) * 10;
  let min = max - 10;
  console.log("---VIEW PREVIOUS PAGE---");
  console.log("CURRENT PAGE:", currentPage);
  console.log("MAX:", max);
  console.log("MIN:", min);
  let newData = users.slice(min, max);
  for (let i = 0; i < newData.length; i++) {
    let newrow = document.getElementById(`row${i + 1}`);
    let newID = document.getElementById(`id${i + 1}`);
    newID.innerText = `${newData[i].id}`;
    // console.log("ID:",newData[i].id);
    newrow.append(newID);
    let newName = document.getElementById(`name${i + 1}`);
    newName.innerText = `${newData[i].name}`;
    // console.log("NAME:",newData[i].name);
    newrow.append(newName);
    let newEmail = document.getElementById(`email${i + 1}`);
    newEmail.innerText = `${newData[i].email}`;
    // console.log("EMAIL:",newData[i].email);
    newrow.append(newEmail);
  }
  currentPage=currentPage-1;
  if(currentPage==0)
    currentPage=1;
}

function viewNextPage() {
  let max = (currentPage+1) * 10;
  let min = max - 10;
  console.log("---VIEW NEXT PAGE---");
  console.log("CURRENT PAGE:", currentPage);
  console.log("MAX:", max);
  console.log("MIN:", min);
  let newData = users.slice(min, max);
  for (let i = 0; i < newData.length; i++) {
    let newrow = document.getElementById(`row${i + 1}`);
    let newID = document.getElementById(`id${i + 1}`);
    newID.innerText = `${newData[i].id}`;
    // console.log("ID:",newData[i].id);
    newrow.append(newID);
    let newName = document.getElementById(`name${i + 1}`);
    newName.innerText = `${newData[i].name}`;
    // console.log("NAME:",newData[i].name);
    newrow.append(newName);
    let newEmail = document.getElementById(`email${i + 1}`);
    newEmail.innerText = `${newData[i].email}`;
    // console.log("EMAIL:",newData[i].email);
    newrow.append(newEmail);
  }
  currentPage=currentPage+1;
  if(currentPage==total+1)
    currentPage=total;
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "data.json");
xhr.send();
xhr.onload = () => {
  try {
    if (xhr.status == 200) {
      users = JSON.parse(xhr.response);
      console.log("RESPONSE:", users);
      for (let i of users) {
        count += 1;
      }
      total = count / 10;
      console.log("COUNT:", count);
      console.log("TOTAL PAGES:", total);

      for (let i of users) {
        if (i.id <= 10) {
          tr = document.createElement("tr");
          tr.setAttribute("id", `row${i.id}`);
          tbody.append(tr);
          td1 = document.createElement("td");
          td1.setAttribute("id", `id${i.id}`);
          td1.innerText = `${i.id}`;
          tr.append(td1);
          td2 = document.createElement("td");
          td2.setAttribute("id", `name${i.id}`);
          td2.innerText = `${i.name}`;
          tr.append(td2);
          td3 = document.createElement("td");
          td3.setAttribute("id", `email${i.id}`);
          td3.innerText = `${i.email}`;
          tr.append(td3);
        }
      }

      div4 = document.createElement("div");
      div4.setAttribute("id", "buttons");
      div4.setAttribute("class", "d-flex justify-content-center");
      div2.append(div4);

      nav = document.createElement("nav");
      nav.setAttribute("aria-label", "...");
      div4.append(nav);

      ul = document.createElement("ul");
      ul.setAttribute("class", "pagination");
      nav.append(ul);

      let li1 = document.createElement("li");
      li1.setAttribute("class", "page-item");
      li1.setAttribute("id", "1");
      ul.append(li1);

      let a1 = document.createElement("a");
      a1.setAttribute("class", "page-link");
      a1.setAttribute("href", "#");
      a1.setAttribute("onclick", "viewPage(1)");
      a1.innerText = "First";
      li1.append(a1);

      let li2 = document.createElement("li");
      li2.setAttribute("class", "page-item");
      li2.setAttribute("id", "previous");
      ul.append(li2);

      let a2 = document.createElement("a");
      a2.setAttribute("class", "page-link");
      a2.setAttribute("href", "#");
      a2.setAttribute("onclick", "viewPreviousPage()");
      a2.innerText = "Previous";
      li2.append(a2);

      for (let i = 2; i < total; i++) {
        let li = document.createElement("li");
        li.setAttribute("class", "page-item");
        li.setAttribute("id", `${i}`);
        ul.append(li);

        let a = document.createElement("a");
        a.setAttribute("class", "page-link");
        a.setAttribute("href", "#");
        a.setAttribute("onclick", `viewPage(${i})`);
        a.innerHTML = `${i}`;
        li.append(a);
      }

      let li4 = document.createElement("li");
      li4.setAttribute("class", "page-item");
      li4.setAttribute("id", "next");
      ul.append(li4);

      let a4 = document.createElement("a");
      a4.setAttribute("class", "page-link");
      a4.setAttribute("href", "#");
      a4.setAttribute("onclick", "viewNextPage()");
      a4.innerText = "Next";
      li4.append(a4);

      let li5 = document.createElement("li");
      li5.setAttribute("class", "page-item");
      li5.setAttribute("id", `${total}`);
      ul.append(li5);

      let a5 = document.createElement("a");
      a5.setAttribute("class", "page-link");
      a5.setAttribute("href", "#");
      a5.setAttribute("onclick", `viewPage(${total})`);
      a5.innerText = "Last";
      li5.append(a5);
    }
  } catch (err) {
    console.log("ERROR:", err);
  }
};
