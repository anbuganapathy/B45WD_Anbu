// let div1=document.createElement('div');
// div1.setAttribute("class","imgClass");
// document.body.append(div1);
// let img=document.createElement('img');
// img.setAttribute("src","https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
// img.setAttribute("height","350px");
// img.setAttribute("width","350px");
// div1.append(img);

// let div2=document.createElement('div');
// document.body.append(div2);
// let button=document.createElement('button');
// button.setAttribute("onclick","imageResize()");
// button.append(document.createTextNode("Image Resize"));
// div2.append(button);

// const imageResize=()=>{
//   document.getElementsByClassName('imgClass');
//   img.setAttribute("height","600px");
//   img.setAttribute("width","1020px");
//   div1.append(img);
// }

// window.addEventListener("click",()=>{
//   document.getElementById("demo").innerHTML=Date();
// });
// // window.removeEventListener("keydown",()=>{
// //   document.getElementById("demo").innerHTML=Date();
// // });

// let submitBtn = document.getElementById("submit");
// submitBtn.addEventListener("keydown",()=>{
//   document.getElementById("demo").innerHTML="";
// })

// let btn3=document.createElement('Button');
// btn3.appendChild(document.createTextNode("Red"));
// btn3.setAttribute("onclick","bgChange('red')");
// document.body.append(btn3);

// let btn2=document.createElement('Button');
// btn2.appendChild(document.createTextNode("Blue"));
// btn2.setAttribute("onclick","bgChange('Blue')");
// document.body.append(btn2);

// let btn1=document.createElement('Button');
// btn1.appendChild(document.createTextNode("Green"));
// btn1.setAttribute("onclick","bgChange('Green')");
// document.body.append(btn1);

// const bgChange=(colour)=>{
//   document.body.style.backgroundColor = colour;
// }
// let count=0;
// let setTimer=setInterval(()=>{
//   count++;
//   document.getElementById('demo').innerHTML=count;
//   if(count==20){
//     clearInterval(setTimer);
//   }
// },1000);

// let btn=document.getElementById("submit");
// btn.setAttribute("onclick","clearInterval(setTimer)");
// document.body.appendChild(btn);

// let userName=prompt("Enter username");
// let passWord=prompt("Enter password");
// let res=confirm("Do you want to login?");
// if(res)
// alert("logged in successfully!!!");
// else{
//   alert("Signed out");
// }

// let span=document.createElement('span');
// span.setAttribute("id","spanValue");
// let a=prompt("Enter your name:");
// span.innerText=a;
// document.body.appendChild(span);

// let heading1=document.createElement('h1');
// heading1.innerHTML="<p>I am a paragraph. I give a detailed information about a topic.</p>";
// heading1.setAttribute("onclick","getMouseCoOrd(event)");
// document.body.appendChild(heading1);

// let span1=document.createElement('span');
// span1.setAttribute("id","spanMouseCoOrd")
// document.body.appendChild(span1);

// let getMouseCoOrd=(event)=>{

//   document.getElementById('spanMouseCoOrd');
//   span1.innerText=`"X-CoOrdinate: ${event.pageX}, Y-CoOrdinate: ${event.pageY}"`;
//   document.body.appendChild(span1);
// }

// let textArea=document.createElement('textarea');
// textArea.setAttribute("id","tACharCount");
// textArea.setAttribute("onkeydown","charCount()");
// document.body.appendChild(textArea);

// let charCount=()=>{
//   let totalCount=document.getElementById("tACharCount").value;
//   console.log(totalCount.length);
// }

// var x = document.createElement("hr");
// document.body.appendChild(x);

// let div = document.createElement("div");
// document.body.appendChild(div);

// let input1 = document.createElement("input");
// input1.setAttribute("type", "number");
// input1.setAttribute("placeholder", "Enter a decimal value");
// input1.setAttribute("id", "decimalValue");
// div.appendChild(input1);

// div.appendChild(document.createElement("br"));

// let input2 = document.createElement("input");
// input2.setAttribute("type", "number");
// input2.setAttribute("id", "hexaDecimalValue");
// div.appendChild(input2);

// div.appendChild(document.createElement("br"));

// let btn = document.createElement("button");
// let btnName = document.createTextNode("Convert");
// btn.appendChild(btnName);
// btn.setAttribute("onclick", "decToHexaDecConversion()");
// div.appendChild(btn);

// div.appendChild(document.createElement("br"));

// let decToHexaDecConversion = () => {
//   let decValue = document.getElementById("decimalValue").value;
//   let num = decValue.split(".");
//   let result = [];
//   let remainder = 0;
//   let quotient = 0;
//   let i = 0;
//   if (decValue !== "") {
//     console.log("decimalValue:", decValue);
//     console.log("num:", num);
//     if (num.length == 1) {
//       //integer calc
//       while (num[0] / 16 !== 0) {
//         quotient = Math.floor(num[0] / 16);
//         result.push(quotient);
//         console.log("result value:", result);
//         num[0] = quotient;
//         i++;
//         if (num[0] < 16) {
//           break;
//         }
//       }
//       result.push(0);
//       console.log("final result value:", result.join(''));
//     } else {
//       //floating calc
//     }
//   } else {
//     alert("Enter a decimal number");
//   }
//   document.getElementById("hexaDecimalValue").value = result.join('');
// };

// let name,age;
// function print(callback){
//     name = prompt("Enter the name:");
//     age = prompt("Enter the age:");
//     callback();
// }

// function getDetails(){
//     console.log(name);
//     console.log(age);
// }

// print(getDetails);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((res) => {
    res.forEach((element) => {
      if (element.name.length > 5) console.log(element.name);
    });
  })
  .catch((err) => console.log("ERROR:", err));
