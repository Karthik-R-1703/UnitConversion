// Data size conversion functions
function DataSize_Conversion(fromUnit, toUnit, fromValue, roundingValue) {
  const factors = {
    B: 1,
    KB: 1024,
    MB: 1048576,
    GB: 1073741824,
    TB: 1099511627776,
    PB: 1125899906842624,
    EB: 1152921504606846976
  };
  if (!factors[fromUnit] || !factors[toUnit] || isNaN(fromValue) || isNaN(roundingValue)) return "Error";
  const bytes = fromValue * factors[fromUnit];
  const result = bytes / factors[toUnit];
  return Number(result).toFixed(roundingValue);
}
