1// how to declare a variabel using let and variable \
 const fatherName ='siddiqur rahaman';
 let session ='rainy';
  session ='summer';
  session ='winter';
// session e let dici karon session jekono somoye change houte dpare tai 
// but babar name kokhono change hobe na tai etake const e rakhci 




// 2 condition cheacking 
// 6 basic condition >,< ,<=,>=,===,
// multiple condition &&,||
if(fatherName==="arnold"|| session ==='rainy'){

    console.log('lala');
}
else if(fatherName==='arnold'){

}

// array
const number =[34,54,64,65,65,6];
//lenght ,push,pop 
// how to change 
number[0]=54;


// 4 loop 1:for loop and while loop 
for (let i=0;i<number.length;i++){
    const number=number[i];
    console.log(number);
}

//5 function
function add(a,b){
    return a+b;
}
const result =add(4,5);
console.log(result);

// object 
const student ={
    name:'jahid',
    age: 43,
    movies: [
        'khing khan','rani mama','sumi jkha'
    ]

}


const myvariabel ='age';
// 3 ways to access properties?   
// 1,console.log(student.age);   ----direct by properti
 
// 2 .console.length(student[age]); -----acces via string
// 3 console.log(student(myvariabel)); --- access via properties via variable
