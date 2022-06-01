//pseudocode

/*
1. Collect sentence
2. go through  each character in the sentence
    2a. convert each character to lower case
    2b. if the character is a period, stop
    2c. if the character is a space, increase words count by 1
    2d. if the character is a vowel, increase vowels count
    2e. increase character count

3. display all counters (word counters, vowels counter, character count)

*
* */

function endPoint(str) {
  let length = str.length;

  let words = str.split(" ").length;

  let vowels = str.match(/[aeiou]/gi).length;

  return `the sentence has ${length} characters, ${words} words and ${vowels} vowel`;
}

console.log(endPoint("Cece is the capitano extraordinaire"));
