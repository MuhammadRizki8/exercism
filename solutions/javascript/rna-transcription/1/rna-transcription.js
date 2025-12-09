//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const translate ={
  "G":"C",
  "C":"G",
  "T":"A",
  "A":"U",
}
export const toRna = (dna) => {
  const rna = dna.split("").map(char => translate[char] || char).join("");
  console.log(rna);
  return rna;
};
