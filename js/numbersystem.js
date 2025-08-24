// Number system conversion functions
function NumberSystem_Conversion(fromUnit, fromValue) {
  let num;
  fromValue = fromValue.trim();
  if (fromValue === "") return { error: "Please enter a value." };
  switch (fromUnit) {
    case "binary":
      if (!/^[01]+$/.test(fromValue)) return { error: "Invalid binary number." };
      num = parseInt(fromValue, 2);
      break;
    case "octal":
      if (!/^[0-7]+$/.test(fromValue)) return { error: "Invalid octal number." };
      num = parseInt(fromValue, 8);
      break;
    case "decimal":
      if (!/^\d+$/.test(fromValue)) return { error: "Invalid decimal number." };
      num = parseInt(fromValue, 10);
      break;
    case "hexadecimal":
      if (!/^[0-9a-fA-F]+$/.test(fromValue)) return { error: "Invalid hexadecimal number." };
      num = parseInt(fromValue, 16);
      break;
    default:
      return { error: "Select a valid number system." };
  }
  if (isNaN(num)) return { error: "Invalid input." };
  return {
    binary: num.toString(2),
    octal: num.toString(8),
    decimal: num.toString(10),
    hexadecimal: num.toString(16).toUpperCase()
  };
}
