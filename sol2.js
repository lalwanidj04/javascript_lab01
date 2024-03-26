function evenOdd(n){
    var ans = n%2==0 ? "Even" : "Odd";
    return ans;
}

var n = prompt("Enter the number: ");
var ans = evenOdd(n);
console.log(ans);