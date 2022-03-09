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