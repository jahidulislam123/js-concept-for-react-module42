
// array of object
const product =[
    {name: 'laptop',price:43333,brand:'lenevo',color:'silver'},
    {name: 'phone',price:3444,brand:'iphone',color:'golden'},
    {name: 'watch',price:333,brand:'csion',color:'yellow'},
    {name: 'sunglass',price:433,brand:'ribon',color:'black'},
    {name: 'camera ',price:9333,brand:'canon',color:'gray'}
];

// ekhane ami name gulake niye arekta object e rakhte cai
const brand =product.map(products =>products.brand);
// console.log(brand);
const price =product.map(price=>price.price);
// console.log(price);

//for each use korle loop throug korbe but return korbe na 
product.forEach(product=>console.log(product.color));

// multiline arrow function korle ja korbo 

product.forEach(product=>{
    // ekhane ami ja icca tai korte parbo 
})


// filter 
// filter ki kore ami kicu sorto dibo sorto ta jara fullfill korbe tader ke dibe
// filter ekta array retun korbe

const cheap =product.filter(product=>product.price<=4000);
console.log(cheap);

//include er kaj hocce kader kader modde ace 
const specificName =product.filter(p=>p.name.includes('n'));
console.log(specificName);


//find
const special =product.find(p=>p.name.includes('n'));
console.log(special);