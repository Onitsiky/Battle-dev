export default function condition (dictionnary){ 
    let alphabet = ["ab","bc","cd","de","ef","fg","gh","hi","ij","jk","kl","lm","mn","no","op","qr","rs","st","tu","uv","vw","wx","xy","yz","za"]
    let vowel = ["a", "e", "i", "o", "u", "y"];
    let result = 0;
    for(let p of dictionnary){
        if(p.length >= 5 && p.length <= 7 && alphabet.includes(p.slice(0,2)) && vowel.includes(p.slice(p.length-1,p.length))){
            result ++;
        }
    }
     return result;
}
