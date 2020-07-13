const findLongestWord = function (string) {
  // initialize winner
  let winner = '';
  //define winner
  string = string.split(' ');
  for (let i = 0; i < string.length; i += 1) {
    if (winner.length < string[i].length) {
      winner = string[i];
    }
  }
  //return winner
  return winner;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
