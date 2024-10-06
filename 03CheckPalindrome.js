function realWords(words){
    ans=""
    for (let word of words){
        if("!@#$%^&*(), ".includes(word)) continue
        ans+=word.toLowerCase()
    }
    return ans
}
function isPalindrome(words){
    let nwords=realWords(words)

    let i=0
    for (let j=nwords.length-1; j>=0; j--){
        if(nwords[i]!==nwords[j])return false
        i++
    }
    return true
}

const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true

