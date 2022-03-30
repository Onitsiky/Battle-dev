const prompt = require("prompt-sync")(); // This is just the module required for this code 

//this code is about to know the loser at the short straw game
function straw (){
    //first prompt the number of participants
    let number_of_participants = +prompt("Enter the number of participants : "); 
    //we will use this table to store the name of each participant in the first column, and their straw's length in the second one
    let tab = [];
    for(let i = 1; i<=number_of_participants; i++){
        //asking for the participant's name and straw's length
        let participant = prompt("Enter your name + space + your straw's length : ");
        //after, store in the table the datas separated with a space
        tab.push(participant.split(" "));
    }
  //let's manually sort the table by participant's straw's length
  //they will be sorted by descending order
    for(let i =0; i<tab.length-1; i++){ 
        for(let j= i+1; j<tab.length; j++){
            //use parseInt to convert into number their straw's length because when entered it was not an integer but a string
            if(parseInt(tab[j][0]) < parseInt(tab[i][0])){
            let temp = tab[j] 
            tab[j] = tab[i] 
            tab [i] = temp
        }
        }
    } 
       //finally show the one who has got the smallest straw(the first one)
       console.table(tab[0][0]);
   }

straw();