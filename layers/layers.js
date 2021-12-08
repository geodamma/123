ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3826").setExtent([-33253.202678, 2701696.633279, -26670.455936, 2708697.708051]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 烈嶼自然村'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 磚造'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'村名': '村名', });
lyr__2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', '樓高': '樓高', });
lyr__1.set('fieldImages', {'村名': 'TextEdit', });
lyr__2.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', '樓高': 'TextEdit', });
lyr__1.set('fieldLabels', {'村名': 'no label', });
lyr__2.set('fieldLabels', {'Build_STR': 'no label', 'Build_NO': 'no label', '樓高': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});