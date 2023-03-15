let isPrime = true;
let number = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let primeFunc = (arr)=>{
  for (let j = 0; j < arr.length; j++) {
    number = arr[j];
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
      else {
        isPrime = true;
      }
    }

    if (isPrime) {
      console.log(number);
    }
  }
}
primeFunc(arr);