
        // var year = 2023;
        // if(year%4===0 || year%400===0){
        //     console.log(`The year ${year} is a leap year`);
        // }
        // else if(year%100!==0){
        //     console.log(`The year ${year} is not a leap year`);
        // }
        // else{
        //     console.log(`The year ${year} is nottttt a leap year`);
        // }


            // table of 8

            // for(var i=1;i<=10;i++){
            //     debugger;
            //     console.log(`8 * ${i} = ${8*i}`);
            // }

            // table
            // var num = prompt('Enter your number');
            // for(var i=1;i<=10;i++){
            //     console.log(`${num} * ${i} = ${num*i}`);
            // }


            // swap two numbers using third variables
            // var a = 5;
            // var b = 10;

            // var c = a; //c=5
            // b = c; //b=5
            // a = b + c;
            // console.log(`The value of a is ${a} and the value of b is ${b}.`);


            // swap two numbers without using third variables
            // var a = 5;
            // var b = 10;

            // a = b; //a=10
            // b = a - 5; //b=10
            // console.log(`The value of a is ${a} and the value of b is ${b}.`);



// function myfunc(){
//     var a = 5;
//     var b = 10;
//     var sum = a+b;
//     console.log(`The sum of a and b is ${sum}.`);
// }
// myfunc();


// var sum = function(a,b){
//     return a+b;
// }
// console.log(sum(5,20));


// function mult(a,b){
//     return a*b;
// }
// console.log(mult(5,8));


// function mult(a=8,b=6){
//     return a*b;
// }
// console.log(mult());


// const sum = (a=5,b=7) => a+b;
// console.log(`The sum of two numbers is ${sum()}`);





// Array
// const arr = ['saransh','sanjay','ajita','siddhant','shrishank'];
// arr.forEach(function(elements,index,array){
//     console.log(array);
// });

// By fat arrow function 
// const arr = ['saransh','sanjay','ajita','siddhant','shrishank'];
// arr.forEach((elements,index,array)=>{
//     console.log(elements + " : " + index +" -> " + array);
// });



// const arr = ['saransh','sanjay','ajita','siddhant','shrishank'];
// let newArr = arr.forEach((elements,index,array)=>{
//     return `${elements} : ${index} -> ${array}`;
// });
// console.log(newArr);

// //output: undefined....ForEach() method on return always undefined but map() method shows result

// const arr1 = ['saransh','sanjay','ajita','siddhant','shrishank'];
// let newArr1 = arr1.map((elements,index,array)=>{
//     return `${elements} : ${index} -> ${array}`;
// });
// console.log(newArr1);



// find
// const prices = [200,250,300,350,400,450,500,100,550,600];

// const newPriceTag = prices.find((element)=>{
//     return element < 350;
// });
// console.log(newPriceTag);




// filter
// const prices = [200,250,300,350,400,450,500,100,550,600];

// const newPriceTag = prices.filter((element)=>{
//     return element < 350;
// });
// console.log(newPriceTag);



// const arr = [1,2,3,4,5,8,10,15,22,7,09]
// console.log(arr.sort());



// const arr = [1,2,3,5,7,8];
// arr.sort().push(4,6);
// console.log(arr.sort());




// Multiply the array by 2 and search the value greater than 10
// const arr = [2,3,5,7,9];
// let newArr = arr.map((currElement)=>{
//     return currElement*2;
// }).filter((newElem)=>{
//     return newElem > 10;
// });
// console.log(newArr);


// Using reduce() method 
// const arr = [2,3,5,7,9];
// let newArr = arr.map((currElement)=>{
//     return currElement*2;
// }).filter((newElem)=>{
//     return newElem > 10;
// }).reduce((accumlator, currElm)=>{
//     return accumlator += currElm;
// });
// console.log(newArr);


// In short form 
// const arr = [2,3,5,7,9];
// let newArr = arr.map((currElement) => currElement*2).filter((newElem) => newElem > 10).reduce((accumlator, currElm) => accumlator += currElm);
// console.log(newArr);
// //Single value bhako ma return nalekhda ni hunxa

// we can also do multiply, subtract, division in reduce() method
// const arr = [2,3,5,7,9];
// let newArr = arr.map((currElement) => currElement*2).filter((newElem) => newElem > 10).reduce((accumlator, currElm) => accumlator *= currElm);
// console.log(newArr);


// const str = "Apple, Banana, Kiwi, Mango";
// let res = str.slice(3,-2);
// console.log(res);



