goog.provide('vk2.control.RotateNorth');

goog.require('goog.events');

/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {Object=} opt_options Control options.
 */
vk2.control.RotateNorth = function(opt_options) {

  var options = opt_options || {};

  var anchor = document.createElement('a');
  anchor.href = '#rotate-north';
  anchor.innerHTML = 'N';
  anchor.className = 'ol-has-tooltip';

  var tooltip = goog.dom.createDom('span', {'role':'tooltip','innerHTML':vk2.utils.getMsg('rotatenorth')})
  goog.dom.appendChild(anchor, tooltip);
  
  var this_ = this;
  var handleRotateNorth = function(e) {
    // prevent #rotate-north anchor from getting appended to the url
    e.preventDefault();
    this_.getMap().getView().setRotation(0);
  };

  goog.events.listen(anchor, 'click', handleRotateNorth, undefined, this);
  goog.events.listen(anchor, 'touchstart', handleRotateNorth, undefined, this);

  var element = document.createElement('div');
  element.className = 'rotate-north ol-unselectable';
  element.appendChild(anchor);

  ol.control.Control.call(this, {
    element: element,
    target: options.target
  });

};
ol.inherits(vk2.control.RotateNorth, ol.control.Control);