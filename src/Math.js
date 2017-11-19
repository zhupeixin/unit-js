function factorial(n) {
    if(n instanceof Array){
        return NaN;
    }
    n = parseInt(n);
    if(isNaN(n)){
        return NaN;
    }else{
        let sum = 0;
        if(n === 0){
            return 1;
        }else {
            sum = n * factorial(--n);
        }
        return sum;
    }
}