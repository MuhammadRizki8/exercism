//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const lowerStr = str.toLowerCase();

  const uniqueLetters = new Set();

  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];

    if (char >= 'a' && char <= 'z') {
      uniqueLetters.add(char);
    }
  }

  return uniqueLetters.size === 26;
};
