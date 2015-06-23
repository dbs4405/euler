/* 
Sum square difference from Project Euler
https://projecteuler.net/problem=6

*/
function ssd (n) {
    var sum1 = 0, sum2 = 0;
    for (var i = 1; i <= n; i++) {
        sum1+=i*i;
        sum2+= i;
    }
    sum2 = sum2*sum2;
    console.log(sum2-sum1);
}

ssd(100);
