let num = 266219;

let result = 1;
let strNum = num.toString().split("");
for (let i = 0; i < strNum.length; i++) {
  if (strNum[i] != 0) result *= strNum[i];
}
console.log(result);

let degree = result ** 3;
console.log(degree);
let strDegree = degree.toString();
console.log(strDegree.substring(0, 2));
