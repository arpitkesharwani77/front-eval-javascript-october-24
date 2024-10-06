function reverseWords(words){
    let newS=""
    let ans=[]
    for (let i=words.length-1; i>=0; i--){
        if (words[i]===" "){
            ans.push(newS);
            newS="";
        }
            
        else newS+=words[i];
        
    }
    ans.push(newS)
    return ans.reverse().join(" ")
    }
    


const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"

