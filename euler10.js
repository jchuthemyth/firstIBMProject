
// declare a function to check if it's prime number
function isPrime(n){
    
    //any number can be devided by any other number is not prime number
    //prime number start from 2
    for (var i=2; i<= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    //if none of the above matching, then, it's prime number
    //So, return true
    return true;
}

// Trial Division
function euler10(num){
    
//    var test = [];
    
    primeSum = 17;
    
    for(var i=11; i<=num; i++){
        
        if(isPrime(i)){
            primeSum += i;
        }
    }
    
    return primeSum;
}


var t0 = performance.now();
euler10(2000000);
var t1 = performance.now();
var time = t1-t0;
console.log(time);

// method 2 = sieve

function problem10() {

    var i, j, k, l = Math.floor((2000000-1)/2), a = [];
    for (i = 0; i < l; i++) {
        a[i] = true;
    } var m = Math.sqrt(2000000);
    for (i = 0; i <= m; i++) {
        if (a[i]) {
            j = 2 * i + 3;
            k = i + j;
            while (k < l) {
                a[k] = false;
                k += j;
            }
        }
    } var s = 2;
    for (i = 0; i < l; i++) {
        if (a[i]) {
            s += 2 * i + 3;
        }
    }
    return s;

}

var d1 = new Date().getTime();
var answer = problem10();
var d2 = new Date().getTime();

console.log('Answer:' + answer + ' time:' + (d2 - d1));