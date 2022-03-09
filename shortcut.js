// falsy '',0,false,null ,undefined
// truthy 'alams'5,true,{},[]


//cheak truthy
let myVar =4;
//cheak any truthy
if(myVar){
    myVar=myVar*200;

}
else{
    myVar=0;
}


//falsy 
let myMoney =50;
// this is how  i cheak negative 
if(!myMoney){

}


const money =80;
let food ;
if(money>100){
    food='biriyani';
}
else{
    food='chabiscte khabo';
}

// short cut e eta jevabe likhbo ;
let food1 =money>100?'biriyani':'cha biscuit khabo';
console.log(food1);

let drink =(money>100&&myVar>100)?'coke':'filter water';
console.log(drink);

//short cut number to string conversion
const num1 =52;
console.log(num1);
const numStr=num1+'';
console.log(numStr);


// string to number 
const input ='543';
const inputNum =+input;
console.log(inputNum);


//
const isActive =true;
const showUser =()=>console.log('display user');
const hideUser =()=>console.log('display mama');

isActive?showUser():hideUser()


const isActive2 =false;
const showUser2 =()=>console.log('display user');
const hideUser2 =()=>console.log('display mama');

isActive2?showUser():hideUser()

isActive&& showUser();