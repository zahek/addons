// Copyright 1998-2008 digitaldutch.com (info@digitaldutch.com)

window.addEvent('domready', highLightActiveMenuItem);
window.addEvent('domready', createDynamicMenuItems);

function createDynamicMenuItems() {

  function attachEffectToItem(aMenuItem) {

    var fx = new Fx.Styles(aMenuItem, {duration:1500, transition: Fx.Transitions.Elastic.easeOut, wait:false});
    
    function mouseEnterEffect() {
      fx.start({
            'margin-left': 10,
            'background-color': '#98FF65'
          });
    }

     
    var lColor = aMenuItem.getStyle('background-color');
    
    function mouseLeaveEffect() {
      fx.start({
            'margin-left': 0,
            'background-color': lColor
          });
    }
    
    aMenuItem.addEvent('mouseenter', mouseEnterEffect);
    aMenuItem.addEvent('mouseleave', mouseLeaveEffect);

  }

  var lMenuItems = $$('.unit-converter-menu li');

  lMenuItems.each(attachEffectToItem);

}

function highLightActiveMenuItem() { 
  lID = 'convert-' + unitID;
  
  $(lID).setStyle('background-color', '#98FF65');
}

