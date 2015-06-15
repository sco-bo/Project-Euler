var max = 1000;
var total = 0;

for (i = 1; i < max; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        total += i;
    } 
}
console.log(total);