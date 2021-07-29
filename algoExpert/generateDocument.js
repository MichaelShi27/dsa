// given str of chars & a str representign doc we wanna make, can we make the doc?

// 2n solution
const generateDocument = (characters, document) => {
  if (!document) return true;
  if (characters.length < document.length) return false;

  const obj = {};

  for (let char of characters)
    obj[char] = 1 + (obj[char] || 0);

  for (let char of document) {
    if (!obj[char]) return false;
    obj[char]--;
  }
  return true;
};

const generateDocument = (characters, document) => {
  if (!document) return true;
  if (characters.length < document.length) return false;

  const obj = {};

  for (let i = 0; i < characters.length; i++) {
    let char = characters[i];
    let doc = document[i];

    if (char !== undefined) obj[char] = (obj[char] || 0) + 1;
    if (doc !== undefined) obj[doc] = (obj[doc] || 0) - 1;
  }

  for (let key in obj)
    if (obj[key] < 0) return false;

  return true;
};

let chars = 'abcabc';
let doc = 'ccbbaaa';
console.log( generateDocument(chars, doc) );