const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map(firstLetter => {
    const rearrange = firstLetter.split(' '); // split the char
    const capitalizeSplits = 
      rearrange.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
      const result = capitalizeSplits.join(' ');
      return result;
  });
}

// output: first letter of each word capitalize
//For example, 'what does the this keyword mean?' should become 'What Does The This Keyword Mean?'


//How can we "iterate" through individual words in a string?
//Can we execute an interation inside an iteration? How?
//How can we capitalize just the first letter in a word?