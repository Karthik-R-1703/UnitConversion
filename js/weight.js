// Utility function for weight units
function isWeightUnit(unit) {
  return ["mg", "g", "kg", "t", "lb", "oz"].includes(unit);
}
// Weight conversion functions
function Weight_Conversion(fromUnit, toUnit, fromValue, roundingValue) {
  const fromFactor = Weight_FromUnit_Base_ConversionFactor(fromUnit);
  const toFactor = Weight_Base_ToUnit_ConversionFactor(toUnit);
  if (isNaN(fromFactor) || isNaN(toFactor) || isNaN(fromValue) || isNaN(roundingValue)) return "Error";
  const baseValue = fromValue * fromFactor;
  const result = baseValue * toFactor;
  return Number(result).toFixed(roundingValue);
}

function Weight_FromUnit_Base_ConversionFactor(fromUnit) {
  const factors = {
    mg: 0.000001,
    g: 0.001,
    kg: 1,
    t: 1000,
    lb: 1 / 2.205,
    oz: 1 / 35.274
  };
  return factors[fromUnit] ?? NaN;
}

function Weight_Base_ToUnit_ConversionFactor(toUnit) {
  const factors = {
    mg: 1000000,
    g: 1000,
    kg: 1,
    t: 0.001,
    lb: 2.205,
    oz: 35.274
  };
  return factors[toUnit] ?? NaN;
}
