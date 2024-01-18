/***********************************************************************
Write a function `setKeyInObject(obj, string, value)` that takes in three
parameters. The first parameter is an object, the second parameter will be a
string and the third parameter will be a value. Your job is to return the object
adding the second parameter as a key using the third parameter as its value.

Examples:

let obj = {}
setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

let obj1 = {str: "hello"}
setKeyInObject(obj1, "num", 3); // => {str: "hello", num: 3}

TO ADD A KEY INSIDE YOUR OBJECT YOU NEED THE NAME OF YOUR OBJECT AND YOU NEED [] AND THEN YOU PASS THE KEY INSIDE THE OBJECT THEN YOU DO = VALUE EXAMPLE BELOW

const obj = {
  name:'susie'
}
obj[age] = '23'

console.log(obj)
***********************************************************************/

function setKeyInObject(obj, string, value) {
  // Your code here
  // obj[string] = value
  obj[string] = value
  console.log(obj)
}

let obj = {}
setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = setKeyInObject;
