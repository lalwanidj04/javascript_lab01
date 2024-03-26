arr1 = ["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij"];
let max = arr1[0];
for(let i=1;i<10;i++){
    if(arr1[i].length>max.length){
        max = arr1[i];
    }
}
console.log(max);