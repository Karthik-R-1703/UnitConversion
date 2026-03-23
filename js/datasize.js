// Data size conversion functions (binary 1024-based)
function DataSize_Conversion(fromUnit, toUnit, fromValue, roundingValue) {
  const exponents = {
    B: 0,
    KB: 1,
    MB: 2,
    GB: 3,
    TB: 4,
    PB: 5,
    EB: 6
  };
  if (exponents[fromUnit] === undefined || exponents[toUnit] === undefined || isNaN(fromValue) || isNaN(roundingValue)) return "Error";
  const diff = exponents[fromUnit] - exponents[toUnit];
  const result = fromValue * Math.pow(1024, diff);
  return Number(result).toFixed(roundingValue);
}
