var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KBW_Boundary_2 = new ol.format.GeoJSON();
var features_KBW_Boundary_2 = format_KBW_Boundary_2.readFeatures(json_KBW_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KBW_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KBW_Boundary_2.addFeatures(features_KBW_Boundary_2);
var lyr_KBW_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KBW_Boundary_2, 
                style: style_KBW_Boundary_2,
                popuplayertitle: 'KBW_Boundary',
                interactive: true,
                title: '<img src="styles/legend/KBW_Boundary_2.png" /> KBW_Boundary'
            });
var format_20241130_survey_result_3 = new ol.format.GeoJSON();
var features_20241130_survey_result_3 = format_20241130_survey_result_3.readFeatures(json_20241130_survey_result_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20241130_survey_result_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20241130_survey_result_3.addFeatures(features_20241130_survey_result_3);
cluster_20241130_survey_result_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_20241130_survey_result_3
});
var lyr_20241130_survey_result_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_20241130_survey_result_3, 
                style: style_20241130_survey_result_3,
                popuplayertitle: '20241130_survey_result',
                interactive: true,
                title: '<img src="styles/legend/20241130_survey_result_3.png" /> 20241130_survey_result'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_KBW_Boundary_2.setVisible(true);lyr_20241130_survey_result_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_KBW_Boundary_2,lyr_20241130_survey_result_3];
lyr_KBW_Boundary_2.set('fieldAliases', {'Layer': 'Layer', 'Meter_newp': 'Meter_newp', 'meter_expi': 'meter_expi', 'cluster_ne': 'cluster_ne', 'cluster_ex': 'cluster_ex', 'NUMPOINTS': 'NUMPOINTS', });
lyr_20241130_survey_result_3.set('fieldAliases', {'Area': 'Area', 'Pipeline n': 'Pipeline n', 'Survey no': 'Survey no', 'Pipe ID': 'Pipe ID', 'Road': 'Road', 'House no': 'House no', 'single': 'single', 'cluster': 'cluster', 'type': 'type', 'DMS coordi': 'DMS coordi', 'lat_dms': 'lat_dms', 'long_dms': 'long_dms', 'lat_dec': 'lat_dec', 'long_dec': 'long_dec', 'Memo': 'Memo', });
lyr_KBW_Boundary_2.set('fieldImages', {'Layer': '', 'Meter_newp': '', 'meter_expi': '', 'cluster_ne': '', 'cluster_ex': '', 'NUMPOINTS': '', });
lyr_20241130_survey_result_3.set('fieldImages', {'Area': '', 'Pipeline n': '', 'Survey no': '', 'Pipe ID': '', 'Road': '', 'House no': '', 'single': '', 'cluster': '', 'type': '', 'DMS coordi': '', 'lat_dms': '', 'long_dms': '', 'lat_dec': '', 'long_dec': '', 'Memo': '', });
lyr_KBW_Boundary_2.set('fieldLabels', {'Layer': 'no label', 'Meter_newp': 'no label', 'meter_expi': 'no label', 'cluster_ne': 'no label', 'cluster_ex': 'no label', 'NUMPOINTS': 'no label', });
lyr_20241130_survey_result_3.set('fieldLabels', {'Area': 'no label', 'Pipeline n': 'no label', 'Survey no': 'no label', 'Pipe ID': 'no label', 'Road': 'no label', 'House no': 'no label', 'single': 'no label', 'cluster': 'no label', 'type': 'no label', 'DMS coordi': 'no label', 'lat_dms': 'no label', 'long_dms': 'no label', 'lat_dec': 'no label', 'long_dec': 'no label', 'Memo': 'no label', });
lyr_20241130_survey_result_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});