let nums=[ 4, 7,3, 23, 56, 78, 35, 90];

// create a program that creates a new array that contains only even numbers 
let newArr = [];
for(let n of nums){
    if(n%2==0){
        newArr.push(n);
    }
}
// console.log(newArr);

// use filter

let res= nums.filter( (n)  => { return n%2==0} );
console.log(res);

let prices = [ 1200, 1499, 3200, 2400, 4599, 6000, 999];
let watch= prices.filter( (n) => n>=1000 && n<=2000);
console.log(watch);

const numsSQR = nums.map( (a)=> { return a**2} );
console.log(numsSQR);

let prices2 = [ '₹1200.89', '₹844.89', '₹944.89', '₹111.55', '₹953.55' ];
console.log(parseInt('₹844.293'.slice(1)));

let res2 = prices2.map( (p)=>{ return parseInt(p.slice(1))});
console.log(res2);

