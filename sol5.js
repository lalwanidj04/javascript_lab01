
for(let i=1;i<=10;i++){
    string = "";
    var result = 3*i;
    for (let j=0;j<i;j++){
        string += "3";
        if(j<i-1){
            string += "+";
        }
    }
    console.log(`3*${i} = ${string} = ${result}`);
}