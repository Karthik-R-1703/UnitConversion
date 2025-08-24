// Area conversion functions
function Area_Conversion(fromUnit, toUnit, fromValue, roundingValue) {
  const fromFactor = Area_FromUnit_Base_ConversionFactor(fromUnit);
  const toFactor = Area_Base_ToUnit_ConversionFactor(toUnit);
  let rounding = parseInt(roundingValue, 10);
  if (isNaN(fromFactor) || isNaN(toFactor) || isNaN(fromValue)) return "Error";
  if (isNaN(rounding) || rounding < 0 || rounding > 10) rounding = 2;
  const baseValue = fromValue * fromFactor;
  const result = baseValue * toFactor;
  return Number(result).toFixed(rounding);
}

function Area_FromUnit_Base_ConversionFactor(fromUnit) {
  const factors = {
    "mm^2": 0.000001,
    "cm^2": 0.0001,
    "m^2": 1,
    "km^2": 1000000,
    "in^2": 0.00064516,
    "ft^2": 0.092903,
    "yd^2": 0.836127,
    "mi^2": 2589988.11
  };
  return factors[fromUnit] ?? NaN;
}

function Area_Base_ToUnit_ConversionFactor(toUnit) {
  const factors = {
    "mm^2": 1000000,
    "cm^2": 10000,
    "m^2": 1,
    "km^2": 0.000001,
    "in^2": 1 / 0.00064516,
    "ft^2": 1 / 0.092903,
    "yd^2": 1 / 0.836127,
    "mi^2": 1 / 2589988.11
  };
  return factors[toUnit] ?? NaN;
}
