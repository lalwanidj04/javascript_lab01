const prompt = require("prompt-sync")();
var arr = ["Nagpur","Delhi","Bhopal","Udaipur","Mumbai"];
var city = prompt("Enter the city you want to search: ");
let flag = 0;
let index;
for(let i=0;i<arr.length;i++){
    if(arr[i]==city){
        flag = 1;
        index = i;
    }
    
}
if(flag==0){
    console.log("not found");
}
else{
    console.log("City found at index: ", (index));
}