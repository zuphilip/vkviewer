goog.provide('vk2.factory.MapSearchFactory');

goog.require('goog.dom');
goog.require('goog.dom.classes');
//goog.require('ol.layer.Vector');
goog.require('vk2.settings');
goog.require('vk2.utils');

/**
 * @param {ol.Feature} feature
 * @static
 */
vk2.factory.MapSearchFactory.getMapSearchRecord = function(feature){
	
	var containerEl = goog.dom.createDom('li', {
		'class':'mapsearch-record',
		'id':feature.get('id')
	});
	
	// add hidden cols
	var timeCol = goog.dom.createDom('span',{
		'class':'data-col time',
		'innerHTML': parseInt(feature.get('time'), 0)
	});
	goog.dom.appendChild(containerEl, timeCol);
	
	var titleCol = goog.dom.createDom('span',{
		'class':'data-col title',
		'innerHTML': feature.get('title')
	});
	goog.dom.appendChild(containerEl, titleCol);
		
	var georefCol = goog.dom.createDom('span',{
		'class':'data-col time',
		'innerHTML': 1
	});
	goog.dom.appendChild(containerEl, georefCol);
	
	// build content div
	var contentEl = goog.dom.createDom('div',{'class':'view-item'});
	goog.dom.appendChild(containerEl, contentEl);
	
	var anchor_thumbnails = goog.dom.createDom('a',{
		'class':'thumbnail',
		'href':'#'
	})
	goog.dom.appendChild(contentEl, anchor_thumbnails);
	
	var thumbnail = goog.dom.createDom('img',{
		'onerror':'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"',
		'alt':'...',
		'src':vk2.settings.THUMBNAIL_URL+feature.get('dataid')+'.jpg'
	});
	goog.dom.appendChild(anchor_thumbnails, thumbnail);
	
	var overview = goog.dom.createDom('div',{'class':'overview'});
	goog.dom.appendChild(contentEl, overview);

	var heading = goog.dom.createDom('h2',{'innerHTML':feature.get('title')});
	goog.dom.appendChild(overview, heading);
	
	var details = goog.dom.createDom('p',{'class':'details'});
	goog.dom.appendChild(overview, details);
	
	var time = goog.dom.createDom('div',{
		'class':'timestamp',
		'innerHTML': vk2.utils.getMsg('timestamp') + ' ' + feature.get('time')
	});
	goog.dom.appendChild(details, time);
	
	var description = goog.dom.createDom('div',{
		'class':'scale',
		'innerHTML': vk2.utils.getMsg('scale') + ' 1:25.000'
	});
	goog.dom.appendChild(details, description);

	return containerEl;
};

/**
 * @param {Element} element
 * @param {ol.Feature} feature
 * @param {ol.FeatureOverlay} featureOverlay
 * @static
 */
vk2.factory.MapSearchFactory.addHoverToMapSearchRecord = function(element, feature, featureOverlay){
	$(element).hover( 
			// handlerIn
			function(event){
				if (!goog.dom.classes.has(this, 'hover')){
					// clear old features and add hover feature
					featureOverlay.getFeatures().clear();
					featureOverlay.addFeature(feature);					
					goog.dom.classes.add(this, 'hover');
				};
			}, 
			// handlerOut
			function(event){
				if (goog.dom.classes.has(this, 'hover')){
					featureOverlay.removeFeature(feature);	
					goog.dom.classes.remove(this, 'hover');
				}
			}
		);
};