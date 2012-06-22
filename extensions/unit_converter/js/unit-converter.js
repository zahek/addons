// Copyright 1998-2008 digitaldutch.com (info@digitaldutch.com)

var numDigs;

window.addEvent('domready', initialize);
window.addEvent('unload', saveUnitDefaults);

function initialize(){

  loadGlobalOptions();
  
  if (document.forms['ConvertForm']) {
    loadUnitDefaults();
    Convert();
  }
}

function loadGlobalOptions(){
  numDigs = getNumDigs();
}

function loadUnitDefaults() {

  var lUnitFromIndex = getCookieDefault(unitID + "LastUnitFromName", defaultUnitIndex);
  var lUnitToIndex   = getCookieDefault(unitID + "LastUnitToName",   defaultUnitIndex);
  
  setUnitSelectOption('UnitFrom', lUnitFromIndex);
  setUnitSelectOption('UnitTo',   lUnitToIndex);
  
  document.forms['ConvertForm'].elements['ValueFrom'].value = getCookieDefault(unitID + "LastFromValue", 1)
}

function saveUnitDefaults() {

  if (document.forms['ConvertForm']) {

    var lElement;
    
    lElement = document.forms['ConvertForm'].elements['UnitFrom'];
    Cookie.set(unitID + 'LastUnitFromName', lElement.options[lElement.selectedIndex].value, {duration: 365});

    lElement = document.forms['ConvertForm'].elements['UnitTo'];
    Cookie.set(unitID + 'LastUnitToName', lElement.options[lElement.selectedIndex].value, {duration: 365});
    
    lElement = document.forms['ConvertForm'].elements['ValueFrom'];
    Cookie.set(unitID + 'LastFromValue', lElement.value, {duration: 365});

  }
}

function setUnitSelectOption(aElementName, aOptionIndex) {

  var lElement = document.forms['ConvertForm'].elements[aElementName];

  if ((aOptionIndex >= 0) && 
      (aOptionIndex < lElement.options.length)) {
      
    lElement.selectedIndex = aOptionIndex;
  }

}

function formatFloat(number, X) {
// rounds number to X decimal places, default is 6

  X = (!X ? 6 : X);

  return Math.round(number * Math.pow(10,X)) / Math.pow(10,X);
}

function getCookieDefault(aName, aDefault) {

  var lValue = Cookie.get(aName);
  
  if (lValue === false) {
    return aDefault;
  }
  else {
    return lValue;
  }

}

function getNumDigs() {
  return parseInt(getCookieDefault("NumDigs", 6));
}
 
function isNumeric(aText) {
  var ValidChars = "0123456789.";
 
  for (i = 0; i < aText.length; i++) { 
    if (ValidChars.indexOf(aText.charAt(i)) == -1) {
      return false;
    }
  }

  return true;   
}  
  
function InsertUnitSelector(aElementName) {
  document.writeln('        <select name="' + aElementName + '" size="1" onchange="Convert()">');

  for (i=0; i<units.length; i++) {
    document.writeln('        <option value="' + i + '">' + units[i][0] + '</option>');
  }

  document.writeln('</select>');
}

function ConvertInternal(aFromUnitIndex, value, aToUnitIndex) {

  var lUnitFrom = units[aFromUnitIndex];
  var lUnitTo   = units[aToUnitIndex];;

  if (isNumeric(lUnitFrom[1])) {
    value = value * lUnitFrom[1];
  }
  else {
    value = eval(lUnitFrom[1]);
  }

  if (isNumeric(lUnitTo[1])) {
    value = value / lUnitTo[1];
  }
  else {
    value = eval(lUnitTo[2]);
  }

  return formatFloat(value, numDigs);

}

function Convert() { 
  with (document.forms['ConvertForm']) {

    var lFromValue = parseFloat(elements['ValueFrom'].value);

    if (isNaN(lFromValue)) {
      elements['ValueTo'].value = '';
    }
    else {
      var lUnitFromIndex = elements['UnitFrom'].selectedIndex;
      var lUnitToIndex   = elements['UnitTo'].selectedIndex;

      elements['ValueTo'].value = ConvertInternal(lUnitFromIndex, lFromValue, lUnitToIndex);
    }
  }
}

function ConvertBack() {
  with (document.forms['ConvertForm']) {

    var lFromValue = parseFloat(elements['ValueTo'].value);

    if (isNaN(lFromValue)) {
      elements['ValueFrom'].value = '';
    }
    else {
      var lUnitFromIndex = elements['UnitTo'].selectedIndex;
      var lUnitToIndex   = elements['UnitFrom'].selectedIndex;

      elements['ValueFrom'].value = ConvertInternal(lUnitFromIndex, lFromValue, lUnitToIndex);
    }
  }
}
