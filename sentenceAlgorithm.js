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

function analyse(sentence) {
  let numberOfCharacters = 0;
  let numberOfWords = 1;
  let numberOfVowels = 0;
  for (const character of sentence) {
    if (character === ".") break;
    if (character === " ") numberOfWords++;
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    )
      numberOfVowels++;
    numberOfCharacters++;
  }
  output(" number of characters is: " + numberOfCharacters);
  output(" number of words is: " + numberOfWords);
  output(" number of Vowels: " + numberOfVowels);
}
function output(sentence) {
  alert(sentence);
}

//test
const sentence = "The quick brown fox, jumped over the lazy dogs";
analyse(sentence);
