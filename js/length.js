// Utility function for length units
function isLengthUnit(unit) {
  return ["mm", "cm", "m", "km", "in", "ft", "mi", "yd"].includes(unit);
}
// Length conversion functions
function Length_Conversion(fromUnit, toUnit, fromValue, roundingValue) {
  const fromFactor = Length_FromUnit_Base_ConversionFactor(fromUnit);
  const toFactor = Length_Base_ToUnit_ConversionFactor(toUnit);
  if (isNaN(fromFactor) || isNaN(toFactor) || isNaN(fromValue) || isNaN(roundingValue)) return "Error";
  const baseValue = fromValue * fromFactor;
  const result = baseValue * toFactor;
  return Number(result).toFixed(roundingValue);
}

function Length_FromUnit_Base_ConversionFactor(fromUnit) {
  const factors = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    mi: 1 / 0.00062137,
    yd: 1 / 1.0936,
    ft: 1 / 3.2808,
    in: 0.0254
  };
  return factors[fromUnit] ?? NaN;
}

function Length_Base_ToUnit_ConversionFactor(toUnit) {
  const factors = {
    mm: 1000,
    cm: 100,
    m: 1,
    km: 0.001,
    mi: 0.00062137,
    yd: 1.0936,
    ft: 3.2808,
    in: 1 / 0.0254
  };
  return factors[toUnit] ?? NaN;
}
