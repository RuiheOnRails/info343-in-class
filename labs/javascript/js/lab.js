// Put your JavaScript lab code here!

//Strings
let party = "I like JavaScript more than I like to party.";

console.log(party.substring(party.indexOf("I",1),party.length-1));

let washington = "I love Washington State University."
washington.replace("Washington State University","The University of Washington");
console.log(washington);

let combined = party + " "+ washington;

//Functions
/**
 * 
 * @param {integer} n 
 */
function sumUpTo(n){
    let res = 0;
    for (let i = 1; i <= n; i++){
        res += i;
    }
    return res;
}

console.log(sumUpTo(5));

/**
 * 
 * @param {string} s 
 */
function vowelCount(s){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let res = 0;
    for (let i = 0 ; i<s.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if (s.charAt(i) == vowels[j]){
                res++;
            }
        }
    }
    return res;
}

console.log(vowelCount("kookaburra"));

//Arrays

/**
 * 
 * @param {float[]} n 
 */

 var nums = [-1, 3.2, 12, 15, -1, 1, -12.5, 1, 8];
function findMin(n){
    let min = n[0];
    for (let i = 0; i < n.length; i++){
        if (min > n[i]){
            min = n[i];
        }
    }
    return min;
}

console.log(findMin(nums));

//find longest word

var words = ["Java", "PHP", "JavaScript", "SML", "C", "Python", "Ruby"];

/**
 * 
 * @param {String[]} s 
 */
function longestWord(s){
    if(s.length == 0){
        return "";
    }else{
        let longestWord = s[0];
        for(let i = 0; i < s.length; i++){
            if(s[i].length >= longestWord.length){
                longestWord = s[i];
            }
        }
        return longestWord;
    }
}

console.log(longestWord(words));


//remove all instance of a word 

/**
 * 
 * @param {String[]} strings
 * @param {String} word
 */
var rwords = ["foo" , "bar", "baz", "foo", "FOO"];

function removeAll(strings,word){
    let res = [];
    for (let i = 0; i < strings.length; i++){
        if( strings[i].toUpperCase() !== word.toUpperCase()){
            res.push(strings[i]);
        }
    }
    return res;
}

console.log(removeAll(rwords, "foo"));


//Objects

books = [
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        read: true
    },
];