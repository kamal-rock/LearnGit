// Arrays in javascript

//when we use var,we can stored only one value at a time.

// var friends1 = 'kamal';
// var friends2 = 'rock';
// var friends3 = 'peter';

// var myFriends = ['kamal','rock','peter',123,true];

//when we feel like storing multiple values in one variable then instead of var we will use an Array.
//in javascript, we have an array class, and arrays are the prototype of this class.

//Array traversal

// if we want to get the single data at a time and also if we want to change the data

// var myFriends = ["kamal","rock","peter","jaction"];
// // console.log(myFriends[3]);
// console.log(myFriends[myFriends.length-1]);

// //if we want to check the length of an array

// console.log(myFriends.length);


//Afetr ES6 we have for ..in  loop or for ..of loop too.
// var myFriends = ['kamal','rock','peter','jaction'];
// for(let elements in myFriends){
//    // console.log(elements);      
// }
// var arr =[];
// for(let elements of myFriends){
    
//  arr.push(elements);
// }
// arr.shift();
// console.log(arr);

// myFriends.forEach(function(element,index,array){
//     console.log(element +" index : " +index + " " + array);
// })

// myFriends.forEach((element,index,array) =>{
//     console.log(element +" index : " +index + " " + array);
// })




//we use for loop to navigate
// var myFriends = ["kamal","rock","peter","jaction"]
// for(var i =0; i < myFriends.length; i++){
//   console.log(myFriends[i]);
// }


//  let vegetables = ["cabbage","turnip","radish","carrot"]
// vegetables.unshift('brinjal');
// vegetables.shift('onion');
// vegetables.push('potato');
// vegetables.pop();

// for(var i = 0; i < vegetables.length;i++){
// console.log(vegetables[i]);
// }

// console.log(vegetables.length);

// let newArrLength = vegetables.indexOf('turnip');
// console.log(newArrLength);

// vegetables.forEach(function(item,index,Array){
//   console.log(item,index);
// })

// let pos = 1;
// let n = 3;
// let newArr = vegetables.splice(pos,n);
// console.log(vegetables); 
// console.log(newArr);




//  console.log(vegetables);

// const fruits = [];
// fruits.push('apple','banana','peach');
// console.log(fruits.length);
// fruits[5]='mango';
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// fruits.length=10;
// console.log(fruits);
// console.log(fruits.length);

//copying an array

// let array1 = [1, 2, 3];
// let array1Reference = array1;
// array1[1] = 9;
// console.log(array1Reference);


//Array() constructor

//Array literal notation
// let fruits = ['apple','mango'];
// console.log(fruits.length);
// console.log(fruits);

//Array constructor with a single parameter

// let fruits = new Array(3);
// console.log(fruits.length);
// console.log(fruits[0]);

//Array constructor with multiple parameters
let fruits = new Array('apple','banana','mongo');
console.log(fruits.length);
console.log(fruits[2]);



//life cycle method of components

// 1.getInitialState() - this is executed before the creation of the component
// 2. componentDidmount() - is executed when the component gets rendedered and placed on the dom.
// 3. shouldComponentupdate() - is invocked when the component determins changes to the dom and return true or false.
//4. componentdidUpdate() - is invocked immedietely after rendering;
//5. componentWillUnmount() - is invocked immedietely before a comopoent is destroyed.and unmount permanantly.







