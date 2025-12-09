//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function hey(message) {
  const trimmed = message.trim();

  // Silence
  if (trimmed === '') {
    return 'Fine. Be that way!';
  }

  // Check if message contains letters
  const hasLetters = /[a-zA-Z]/.test(trimmed);
  // Yelling: contains letters AND all letters are uppercase
  const isYelling = hasLetters && trimmed === trimmed.toUpperCase();
  // Question: ends with "?"
  const isQuestion = trimmed.endsWith('?');

  // Yelled question
  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  // Only yelling
  if (isYelling) {
    return 'Whoa, chill out!';
  }

  // Only question
  if (isQuestion) {
    return 'Sure.';
  }

  // Default
  return 'Whatever.';
}