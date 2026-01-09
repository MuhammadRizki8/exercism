export function toRna(dna: string): string {
  let result = "";

  for (const nucleotide of dna) {
    switch (nucleotide) {
      case "G":
        result += "C";
        break;
      case "C":
        result += "G";
        break;
      case "T":
        result += "A";
        break;
      case "A":
        result += "U";
        break;
      default:
        throw new Error("Invalid input DNA.");
    }
  }

  return result;
}
