var arr = [1,2,3,4,5,4,3,2,1];
function findUnique(arr){
    let unique = arr.reduce(function (acc,curr){
        if(!acc.includes(curr)){
            acc.push(curr);
        }
        return acc;
    },[]);
    return unique;
}
console.log(findUnique(arr));