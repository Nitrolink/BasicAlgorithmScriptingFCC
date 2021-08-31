function findLongestWordLength(str) {
    let wordArray = str.split(" ")
    wordArray.sort(function(a,b){return b.length - a.length})
    return wordArray[0].length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");