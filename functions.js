function addNums(a,b){
    var c=a+b;
    console.log(c);
}
addNums(345,6547);
// console.log(c);

const checkPrime =function(n){
    let prime=true;
    for(let i=2; i<n; i++){
        if(n%i ==0){
            console.log('not Prime');
            prime=false;
            break;
        }
    }
    if(prime)console.log('prime');
}
checkPrime(7);

const factorial = ( n ) => {
    let f = 1;
    for( let i=2; i<=n; i++ ){
        f = f*i;
    }
    // console.log(f);
    return f;
}
factorial(6);
let res = factorial(6);
console.log(res);

// Create a function that check if a number is perfect square

const checkPerfect = (num)=>{
    // let root = num**0.5;
    let root = Math.sqrt(num);
    console.log(root);
    if (root === parseInt(root)){
        console.log('perfect square');
    }else{
        console.log('not perfect');
    }

}
checkPerfect(36);
checkPerfect(26);
checkPerfect(121);