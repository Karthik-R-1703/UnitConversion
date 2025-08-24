// Temperature conversion functions
function Temperature_Conversion(fromUnit, toUnit, value, roundingValue) {
  if (isNaN(value) || isNaN(roundingValue)) return "Error";
  let celsius;
  switch (fromUnit) {
    case "C": celsius = value; break;
    case "F": celsius = (value - 32) * 5 / 9; break;
    case "K": celsius = value - 273.15; break;
    default: return "Error";
  }
  let result;
  switch (toUnit) {
    case "C": result = celsius; break;
    case "F": result = celsius * 9 / 5 + 32; break;
    case "K": result = celsius + 273.15; break;
    default: return "Error";
  }
  return Number(result).toFixed(roundingValue);
}
