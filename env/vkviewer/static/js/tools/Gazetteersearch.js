/**
 * This functions adds a gazetteer search behavior to a given input field 
 * 
 * container - {DOMElement} - Input field
 * 
 * @TODO - consider the type of the poi (city, country, ...) for the choosing of the zoom level at the select event
 */
var addGazetteer = function(container, map){
	
	var _map = map;
	
    $(document.getElementById(container)).autocomplete({
    	source: function( request, response ){
    		$.ajax({
                url: 'http://open.mapquestapi.com/nominatim/v1/search.php',
                dataType: 'json',
                data: {
                	featureClass: "P",
                	style: "full",
                	maxRows: 8,
                    format: 'json',
                    q: request.term,
                    viewbox: '4.35,58.48,27.78,45.97',
                    bounded: 1
                },
    			success: function( data ){
    				response( $.map( data, function( item ){
    					return {
    						label: item.display_name,
    						value: item.display_name,
    						lonlat: new OpenLayers.LonLat(item.lon,item.lat),
    						type: item.type
    					}
    				}));
    			}
    		});
    	},
    	delay: 500,
        minLength: 3,
    	select: function( event, ui ){
    		//var map = mainMap.getMapObject();
    		_map.setCenter(ui.item.lonlat.transform(new OpenLayers.Projection("EPSG:4326"),map.getProjectionObject(),12));
    	},
    	open: function(){
    		$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
    	},
    	close: function(){
    		$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
    	}
    });
}

