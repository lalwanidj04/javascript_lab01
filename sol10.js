var array = [1,2,3,4,5,6,7,8];
var newArr = array.map(squaring);
console.log(newArr);

function squaring(num){
    return num*num;
}