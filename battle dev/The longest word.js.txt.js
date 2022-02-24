const prompt = require("prompt-sync")(); //This is just a module required for the code

//this code is about to know which of the entered words is the longest one

function longest_word (){
    //first prompt the number of the words in the dictionnary
    let number_of_words = +prompt("Enter the number of words in the dictionnary : ");
    //this table will be used to store the datas
    let tab = [];
    for(let i =1; i<=number_of_words; i++){
        //prompt for each word in the dictionnary according to the number entered above
        let word = String(prompt("Enter the word : "));
        //store each word's character number in the table
        tab.push(word.length);
    }
    //sorting the datas by growing order
    tab.sort((a,b) => b - a);
    //show the character's number of the longest word
    console.table(tab[0]);
}
longest_word();