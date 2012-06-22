// Copyright 1998-2008 digitaldutch.com (info@digitaldutch.com)

var unitID = "options";

window.addEvent('domready', loadOptionsGUI);
window.addEvent('unload', saveOptions);

function loadOptionsGUI() {

  with (document.forms['FormOptions']) {
    elements['EditNumDigs'].value = getNumDigs();
 }

}

function saveOptions() {

  with (document.forms['FormOptions']) {

    numDigs = parseInt(elements['EditNumDigs'].value);
    
    if (numDigs < 0) {
      window.alert("Error: Number of digits should be larger than 0.");
      if (numDigs < 0) numDigs = 0;
    }

    Cookie.set("NumDigs", numDigs, {duration: 365});
  }
  
}