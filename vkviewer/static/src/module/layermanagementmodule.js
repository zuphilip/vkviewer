goog.provide('vk2.module.LayerManagementModule');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');
//goog.require('ol.Collection');
goog.require('vk2.factory.LayerManagementFactory');
goog.require('vk2.control.DynamicMapVisualization');

/**
 * @param {Element|string} parentEl
 * @param {ol.Collection} layers
 * @param {ol.Map} map
 * @constructor
 * @extends {goog.events.EventTarget}
 */
vk2.module.LayerManagementModule = function(parentEl, layers, map){
	
	/**
	 * @type {Element}
	 * @private
	 */
	this._parentEl = goog.isString(parentEl) ? goog.dom.getElement(parentEl) : parentEl;
	
	/**
	 * @type {ol.Collection}
	 * @private
	 */
	this._layers = layers;
	
	/**
	 * @type {ol.Map}
	 * @private
	 */
	this.map_ = map;
	
	this.dynamicMapVisControl_ = new vk2.control.DynamicMapVisualization(this.map_);
	// load html content
	this.loadHtmlContent_(this._parentEl, this.dynamicMapVisControl_);
	
	// listeners for registering new or removed layers
	this._activate();
	
	goog.base(this);
};
goog.inherits(vk2.module.LayerManagementModule, goog.events.EventTarget);

/**
 * This methods returns an array of layer which have should be display in the layerswitcher
 * @return {Array.<ol.layer.Base>}
 * @private
 */
vk2.module.LayerManagementModule.prototype._getLayers = function(){
	var allLayers = this._layers.getArray();
	var layers = [];
	for (var i = 0, ii = allLayers.length; i < ii; i++){
		if (goog.isDef(allLayers[i].getDisplayInLayerManagement)	&& allLayers[i].getDisplayInLayerManagement()){
			layers.push(allLayers[i])
		};
	};
	return layers;
};

/**
 * @param {ol.layer.Base} layer
 * @return {number}
 * @private
 */
vk2.module.LayerManagementModule.prototype._getIndexToLayer = function(layer){
	var layers = this._layers.getArray();
	for (var i = 0, ii = layers.length; i < ii; i++){
		if (layer === layers[i]){
			return i
		};
	};
};

/**
 * @param {Element} parentEl
 * @param {vk2.control.DynamicMapVisualization} controlDynMapVis
 * @private
 */
vk2.module.LayerManagementModule.prototype.loadHtmlContent_ = function(parentEl, controlDynMapVis){
	
	var containerEl = goog.dom.createDom('div',{'class':'layermanagement-container', 'id':'layermanagement-container'});
	goog.dom.appendChild(parentEl, containerEl);
	
	// header
	var headerContainer = goog.dom.createDom('div', {'class':'heading'});
	goog.dom.appendChild(containerEl, headerContainer);
	
	var headerLabel = goog.dom.createDom('span', {
		'class':'header-label',
		'innerHTML': vk2.utils.getMsg('layermanagement_label')
	});
	goog.dom.appendChild(headerContainer, headerLabel);
	
	goog.dom.appendChild(headerContainer, controlDynMapVis.getElement());
	// body
	/**
	 * @type {Element}
	 * @private
	 */
	this._bodyEl = goog.dom.createDom('ul',{
		'class':'layermanagement-body',
		'innerHTML':'<li class="empty">' + vk2.utils.getMsg('start_message') + '</li>'});
	goog.dom.appendChild(containerEl, this._bodyEl);
};

/**
 * @param {ol.CollectionEvent} event
 * @private
 */
vk2.module.LayerManagementModule.prototype._refresh = function(event){
	if (goog.isDef(event.element.getDisplayInLayerManagement) 
			&& event.element.getDisplayInLayerManagement()){
		// clear list
		this._bodyEl.innerHTML = '';

		var layers = this._getLayers();
		for (var i = layers.length-1, ii = 0; i >= ii; i--){
			var layermanagementrecord = vk2.factory.LayerManagementFactory.getLayerManagementRecord(layers[i], i, this.map_);
			goog.dom.appendChild(this._bodyEl, layermanagementrecord);
		};
	};
	
	// activates the sortable
	$(this._bodyEl).sortable({
		'revert': true,
		'handle': '.drag-btn',
		'stop': goog.bind(function(event, ui){
			var layers = this._getLayers();
			var listElements = goog.dom.getElementsByClass('layermanagement-record', this._bodyEl);
			var oldListIndex = listElements.length - parseInt(listElements[ui.item.index()].id, 0) - 1;
			var newListIndex = ui.item.index();
			var newLayerIndex = (layers.length - 1) - newListIndex;
			var oldLayerIndex = parseInt(listElements[newListIndex].id, 0);
			
			if (goog.DEBUG){
				console.log('Sort event stop!');
				console.log('OldListId: '+oldListIndex);
				console.log('NewListId: '+newListIndex);
				console.log(layers);
				console.log('OldLayerId: '+oldLayerIndex);
				console.log('NewLayerId: '+newLayerIndex);
			};
		
			// prevent from removing/adding the layer if it was drag on the same place
			if (goog.isDef(oldLayerIndex) && (oldListIndex != newListIndex)){
				var layer = layers[oldLayerIndex];
					
				// remove old layer
				var removeLayerIndex = this._getIndexToLayer(layer);
				this._layers.removeAt(removeLayerIndex);
					
				// add new layer
				var index = this._getIndexToLayer(layers[newLayerIndex]);
				if (newLayerIndex > oldLayerIndex){
					this._layers.insertAt(index + 1, layer);
					return;
				}
				this._layers.insertAt(index, layer);	
			};
		}, this)
	});
};

/**
 * @private
 */
vk2.module.LayerManagementModule.prototype._activate = function(){
	this._layers.on('add', this._refresh, this);
	this._layers.on('remove', this._refresh, this);	
};

/**
 * @private
 */
vk2.module.LayerManagementModule.prototype._deactivate = function(){
	this._layers.un('add', this._refresh, this);
	this._layers.un('remove', this._refresh, this);	
};

/**
 * @return {Array.<ol.layer.Base>}
 */
vk2.module.LayerManagementModule.prototype.getLayers = function(){
	return this._layers.getArray();
};