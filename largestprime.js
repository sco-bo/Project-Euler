function largestPrime (number) {
    var i = 2;
    while (i <= number) {
    if ( number % i === 0) {
        number /= i;    
    } else {
        i++;
    }
}
console.log(i);
}
var k = 600851475143; 
largestPrime(k);