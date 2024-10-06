// <===================== count vowels and consonant ============================>

    function countVowelsAndConsonants(str){
        let countVowels=0;
        let countCons=0;
        let vowels="aeiou";

        for (let word of str){
            if(" !@#$%^&*()_+=".includes(word)) continue
            let res=vowels.includes(word)
            console.log(res)
            if(res){
                countVowels++
            }
        
            else 
            countCons++
        }
        
        return {
            "vowels":countVowels,
            "consonants":countCons
        }
    }



const result = countVowelsAndConsonants("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }
    
    