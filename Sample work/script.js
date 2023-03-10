// let rotate = function(arr, numberOfShifts) {
//   let deletedArray = arr.splice(arr.length-numberOfShifts);
//   for (let i=0; i < deletedArray.length; i++){
//       arr.splice(i,0,deletedArray[i]);
//   }

//   return arr;
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 1));

// const str = 'i have learned something new today';
// const arr = str.split(" ");
// let func = ()=> {

//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     console.log(arr.join(" "));
// }
// func();

let arrRotate = (arr, n) => {
  let arrshifted = [];
  for (let i = 0; i < n; i++) {
    arrshifted.push(arr[arr.length - n + i]);
  }
  for (let j = 0; j < arr.length - n; j++) {
    arrshifted.push(arr[j]);
  }
  return arrshifted;
};
console.log(arrRotate([1, 2, 3, 4, 5, 6, 7], 3));
