var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Roads_1 = new ol.format.GeoJSON();
var features_Roads_1 = format_Roads_1.readFeatures(json_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1.addFeatures(features_Roads_1);
var lyr_Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_1, 
                style: style_Roads_1,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_1.png" /> Roads'
            });
var format_ServiceArea_2 = new ol.format.GeoJSON();
var features_ServiceArea_2 = format_ServiceArea_2.readFeatures(json_ServiceArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_2.addFeatures(features_ServiceArea_2);
var lyr_ServiceArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_2, 
                style: style_ServiceArea_2,
                popuplayertitle: 'Service Area',
                interactive: true,
    title: 'Service Area<br />\
    <img src="styles/legend/ServiceArea_2_0.png" /> 500,0000000<br />\
    <img src="styles/legend/ServiceArea_2_1.png" /> 1000,0000000<br />\
    <img src="styles/legend/ServiceArea_2_2.png" /> 1500,0000000<br />\
    <img src="styles/legend/ServiceArea_2_3.png" /> 2000,0000000<br />\
    <img src="styles/legend/ServiceArea_2_4.png" /> 2500,0000000<br />\
    <img src="styles/legend/ServiceArea_2_5.png" /> 3000,0000000<br />' });
var format_BusStop_3 = new ol.format.GeoJSON();
var features_BusStop_3 = format_BusStop_3.readFeatures(json_BusStop_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStop_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStop_3.addFeatures(features_BusStop_3);
var lyr_BusStop_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStop_3, 
                style: style_BusStop_3,
                popuplayertitle: 'Bus Stop',
                interactive: true,
                title: '<img src="styles/legend/BusStop_3.png" /> Bus Stop'
            });

lyr_Positron_0.setVisible(true);lyr_Roads_1.setVisible(true);lyr_ServiceArea_2.setVisible(true);lyr_BusStop_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Roads_1,lyr_ServiceArea_2,lyr_BusStop_3];
lyr_Roads_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', });
lyr_ServiceArea_2.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_BusStop_3.set('fieldAliases', {'name': 'name', 'highway': 'highway', });
lyr_Roads_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', });
lyr_ServiceArea_2.set('fieldImages', {'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_BusStop_3.set('fieldImages', {'name': 'TextEdit', 'highway': 'TextEdit', });
lyr_Roads_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', });
lyr_ServiceArea_2.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', });
lyr_BusStop_3.set('fieldLabels', {'name': 'no label', 'highway': 'no label', });
lyr_BusStop_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});