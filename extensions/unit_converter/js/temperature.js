var unitID = "temperature";
var defaultUnitIndex = 0;

var units = [
  ["Celsius",    'value + 273.15',         'value - 273.15'],
  ["Fahrenheit", '5/9 * (value + 459.67)', '9/5 * value - 459.67'],
  ["Kelvin",     1],
  ["Rankine",    '5/9 * value',            '9/5 * value'],
  ["Réaumure",   '5/4 * value + 273.15',   '4/5 * (value - 273.15)']
];