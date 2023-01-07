// Number of Products
const product = (a,b) => {
    return a*b;
} 

console.log(product(2,3));

// Student Object


const student =  {
  name:'Suraj',
 age:25,

 greet() {
    console.log(this.name+ ' is ' +this.age + ' years old');
 }
};

student.greet();