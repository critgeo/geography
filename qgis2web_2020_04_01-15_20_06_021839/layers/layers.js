var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SBARCHIONGSheet1_1 = new ol.format.GeoJSON();
var features_SBARCHIONGSheet1_1 = format_SBARCHIONGSheet1_1.readFeatures(json_SBARCHIONGSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBARCHIONGSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBARCHIONGSheet1_1.addFeatures(features_SBARCHIONGSheet1_1);
var lyr_SBARCHIONGSheet1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SBARCHIONGSheet1_1, 
                style: style_SBARCHIONGSheet1_1,
                interactive: true,
                title: 'SBARCHI ONG - Sheet1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SBARCHIONGSheet1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SBARCHIONGSheet1_1];
lyr_SBARCHIONGSheet1_1.set('fieldAliases', {'DATE': 'DATE', 'BOAT/NGO': 'BOAT/NGO', 'PORT': 'PORT', 'NUMBER': 'NUMBER', 'X': 'X', 'Y': 'Y', });
lyr_SBARCHIONGSheet1_1.set('fieldImages', {'DATE': 'TextEdit', 'BOAT/NGO': 'TextEdit', 'PORT': 'TextEdit', 'NUMBER': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_SBARCHIONGSheet1_1.set('fieldLabels', {'DATE': 'no label', 'BOAT/NGO': 'no label', 'PORT': 'no label', 'NUMBER': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_SBARCHIONGSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});