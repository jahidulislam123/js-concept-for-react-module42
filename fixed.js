// JSON   1:stringify 2: json .parse 
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}


const studentJson =JSON.stringify(student);
console.log(student);
console.log(studentJson);


const studentOnj =JSON.parse(studentJson);
console.log(studentOnj);


// fetch

fetch("url")
.then(res=>res.json())
.then(data=>console.log(data));


//  keys,values

const keys =Object.keys(student);
const.values=Object.values(student);


// for 
const numbers =[34,54,23,44,34,55];
numbers.forEach(num=>console.log(num));
numbers.map(num=>num*3);
