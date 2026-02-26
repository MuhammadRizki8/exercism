export function decodedValue(args:string[]) :number {
  const [first, second]=args;
  const result = bandColors.indexOf(first).toString() + bandColors.indexOf(second).toString()
  return Number(result);
}

const bandColors: string[] = [
  "black",  // 0
  "brown",  // 1
  "red",    // 2
  "orange", // 3
  "yellow", // 4
  "green",  // 5
  "blue",   // 6
  "violet", // 7
  "grey",   // 8
  "white"   // 9
];
