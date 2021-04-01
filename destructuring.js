// // destructuring
// // simple technique 
// const name = "rajesh kumar singh"
// const nameArr = name.split(' ');
// console.log(nameArr);

// let firstName = nameArr[0];
// let lastName = nameArr[2];
// //console.log(firstName,lastName)

// destructuring
//let[FirstName,middleName] = nameArr;
// let[FirstName,,LastName] = nameArr;
// //console.log(firstName,middleName);
// console.log(FirstName,LastName);

// destructuring with object
const person ={
  firstName : 'rajesh',
  middleName : 'kumar',
  lastName : 'singh',
  age : 22
}
let{firstName,lastName,middleName,age}=person;
console.log("My name is",firstName,middleName,lastName,".", "My age is ",age);

