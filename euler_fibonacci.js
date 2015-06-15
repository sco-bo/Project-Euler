var total = 0;

var fib = function(number){
    for(i=0, j=1, k=0; k < number; i=j, j=x, k++){
        x = i + j;
        if (x % 2 === 0) {
        total += x;
    }
    } 
};

fib(32);
console.log(total);