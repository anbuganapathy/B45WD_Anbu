//Remove duplicates from an array

let arrD = [1, 9, 15, 1, 78, 3, 48];

(function () {
  for (let i = 0; i < arrD.length; i++) {
      if (arrD[i] == arrD[i + 1]) {
          console.log(arrD[i+1]);
          arrD.pop(arrD[i+1]);
      }
  }
  console.log(arrD);
})();
