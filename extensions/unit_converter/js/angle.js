var unitID = "angle";
var defaultUnitIndex = 3;

var units = [
  ["arcminute",          'value/(360*60)', 'value * (360*60)'],
  ["arcsecond",          'value/(360*3600)', 'value * (360*3600)'],
  ["circle",             1],
  ["degree",             'value/360', 'value*360'],
  ["gon",                'value/400', 'value*400'],
  ["grad",               'value/400', 'value*400'],
  ["mil (Nato)",         'value/6400', 'value*6400'],
  ["mil (Soviet Union)", 'value/6000', 'value*6000'],
  ["mil (Sweden)",       'value/6300', 'value*6300'],
  ["octant",             0.125],
  ["quadrant",           0.25],
  ["radian",             'value / (2 * Math.PI)', 'value * 2 * Math.PI'],
  ["revolution",         1],
  ["sextant",            'value/6', 'value * 6'],
  ["sign",               'value/12', 'value * 12'],
  ["turn",               1]
];