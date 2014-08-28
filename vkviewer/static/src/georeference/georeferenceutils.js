goog.provide('vk2.georeference.utils');

/**
 * The function initialize the coordinates systems relavant for the georeferencing application
 */
vk2.georeference.utils.initializeGeorefenceCRS = function(){
	proj4.defs("EPSG:4314",'+proj=longlat +ellps=bessel +datum=potsdam +no_defs');
	proj4.defs("EPSG:900913",'+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +over no_defs');
}