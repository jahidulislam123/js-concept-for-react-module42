const number =[34,54,64,65,65,6];

const student ={
    name:'jahid',
    age: 43,
    movies: [
        'khing khan','rani mama','sumi jkha'
    ]

}

// 1 tempalte string 
const about =`my name is ${student.name} age of ${student.age} has number ${Number[2]}  also liked movies ${student.movies[0]}`;
console.log(about);


//arrow function 
//perameter cara
const getFiftyFive =()=>55;
// perametera ace 
const addSixtyFive =(num)=>num+65;
const isEven =(x)=>x%2==0;

// multiple perameter owala 
const addThree =(x,y,z)=>x+y+z;

//miltiline arrow function
const doMath =(num1,num2)=>{
   
   const sum=num1+num2;
    return  sum;
}



// spread operator
// const newNumbers =number;
const newNumbers =[number];
number.push(99);
console.log(newNumbers);

console.log(number);


// creat an new array from an older array
const currentArray =[...number,55];
console.log(currentArray);
