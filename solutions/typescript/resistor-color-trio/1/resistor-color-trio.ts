export function decodedResistorValue(args:string[]):string {
  const [first, second, third]=args;
  const mainValue= Number(bandColors.indexOf(first).toString() + bandColors.indexOf(second).toString());
  const zerosValue = "0".repeat(bandColors.indexOf(third));
  const resultValue = Number(mainValue.toString() + zerosValue);
  return ohmConversion(resultValue);
}

function ohmConversion(value:number):string{
  if (value >= 1_000_000_000) {
    return `${value / 1_000_000_000} gigaohms`;
  }
  if (value >= 1_000_000) {
    return `${value / 1_000_000} megaohms`;
  }

  if (value >= 1_000) {
    return `${value / 1_000} kiloohms`;
  }

  return value.toString()+" ohms";
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
