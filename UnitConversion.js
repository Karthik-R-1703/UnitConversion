function isLengthUnit(unit) {
  if (
    unit == "mm" ||
    unit == "cm" ||
    unit == "m" ||
    unit == "km" ||
    unit == "in" ||
    unit == "ft" ||
    unit == "mi" ||
    unit == "yd"
  ) {
    return true;
  }

  return false;
}

function isWeightUnit(unit) {
  if (
    unit == "mg" ||
    unit == "g" ||
    unit == "kg" ||
    unit == "t" ||
    unit == "lb" ||
    unit == "oz"
  ) {
    return true;
  }

  return false;
}

function Length_Conversion(fromUnit, toUnit, fromValue, roundingValue) {
  var conversionValue = Lenght_FromUnit_Base_ConversionFactor(fromUnit);
  var baseToValue = fromValue * conversionValue;
  conversionValue = Lenght_Base_ToUnit_ConversionFactor(toUnit);
  return (baseToValue * conversionValue).toFixed(roundingValue);
}

function Lenght_FromUnit_Base_ConversionFactor(fromUnit) {
  var retVal = 0;
  switch (fromUnit) {
    case "mm":
      retVal = 0.001;
      break;
    case "cm":
      retVal = 0.01;
      break;
    case "m":
      retVal = 1;
      break;
    case "km":
      retVal = 1000;
      break;
    case "mi":
      retVal = 1 / 0.00062137;
      break;
    case "yd":
      retVal = 1 / 1.0936;
      break;
    case "ft":
      retVal = 1 / 3.2808;
      break;
    case "in":
      retVal = 0.0254;
      break;
    default:
      retVal = 0;
  }

  return retVal;
}

function Lenght_Base_ToUnit_ConversionFactor(toUnit) {
  var retVal = 0;
  switch (toUnit) {
    case "mm":
      retVal = 1000;
      break;
    case "cm":
      retVal = 100;
      break;
    case "m":
      retVal = 1;
      break;
    case "km":
      retVal = 0.001;
      break;
    case "mi":
      retVal = 0.00062137;
      break;
    case "yd":
      retVal = 1.0936;
      break;
    case "ft":
      retVal = 3.2808;
      break;
    case "in":
      retVal = 1 / 0.0254;
      break;
    default:
      retVal = 0;
  }

  return retVal;
}

function Weight_Conversion(fromUnit, toUnit, fromValue, roundingValue) {
  var conversionValue = Weight_FromUnit_Base_ConversionFactor(fromUnit);
  var baseToValue = fromValue * conversionValue;
  conversionValue = Weight_Base_ToUnit_ConversionFactor(toUnit);
  return (baseToValue * conversionValue).toFixed(roundingValue);
}

function Weight_FromUnit_Base_ConversionFactor(fromUnit) {
  var retVal = 0;
  switch (fromUnit) {
    case "mg":
      retVal = 0.000001;
      break;
    case "g":
      retVal = 0.001;
      break;
    case "kg":
      retVal = 1;
      break;
    case "t":
      retVal = 1000;
      break;
    case "lb":
      retVal = 1 / 2.205;
      break;
    case "oz":
      retVal = 1 / 35.274;
      break;
    default:
      retVal = 0;
  }

  return retVal;
}

function Weight_Base_ToUnit_ConversionFactor(fromUnit) {
  var retVal = 0;
  switch (fromUnit) {
    case "mg":
      retVal = 1000000;
      break;
    case "g":
      retVal = 1000;
      break;
    case "kg":
      retVal = 1;
      break;
    case "t":
      retVal = 0.001;
      break;
    case "lb":
      retVal = 2.205;
      break;
    case "oz":
      retVal = 35.274;
      break;
    default:
      retVal = 0;
  }

  return retVal;
}
