function groupAnagrams(words) {
  const anagrams = {};

  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (anagrams[sortedWord]) {
    anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }

  return Object.values(anagrams);
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);