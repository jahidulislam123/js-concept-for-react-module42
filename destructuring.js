//array destructuring
const number = [43, 64];
// const x =number[0];
// const y=number[1];
// console.log(x,y);
// eta ager sytstem 


// new system e jevabe kre 
const [x, y] = [42, 34];
console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(90, 34));

const [first, second] = boxify[90, 54]

const student = {
    name: 'salib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan'];
}

const [firstMovie, secondMovie] = student.movies;


// object er  destructuring 
const {
    name,
    age
} = {
    name: 'alu',
    age: 14
}
const {
    salary,
    time
} = {
    salary: 340,
    time: 14
}


const employee ={
    ide:'vs code',
    designation: 'developer',
    machine : 'mac',
    language :['html','css','js'],
    specification:{
        height: 66,
        wight :45,
        address: 'kumarkhali',
        drink : 'water',
        watch:{
            color:'black',
            price:500,
            brand:'gardian'
        }

    }
}
const {machine,ide}=employee;
const {wight,address}=employee.specification;
const {brand}=employee.specification.watch;
