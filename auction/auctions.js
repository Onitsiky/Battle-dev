const prompt = require("prompt-sync")();

let N = +prompt("Enter the number of received bids : ");
let O = +prompt("Enter the reserve price the object : ");
let datas = [];
for (let i = 0; i< N; i++){
    let E = prompt("Enter the bid price and the bidder's name: ");
    datas.push(E.split(" "));
}
function sortData (datas){
    for(let i = 0; i < datas.length -1 ; i++){
        for(let j = i+1 ; j < datas.length; j++){
            if(parseInt(datas[i][0]) < parseInt(datas[j][0])){
                let temp = datas[j];
                datas[j] = datas[i];
                datas[i] = temp;
            }
        }
    }
    return datas;
}
function showResult(datas,O){
    sortData(datas);
    if (parseInt(datas[0][0]) == O || parseInt(datas[0][0]) < O){
        return "KO";
    }
    else {
        return datas[0][1];
    }
}
console.log(showResult(datas,O));