var wms_layers = [];

var format_PROV_LaLibertad_0 = new ol.format.GeoJSON();
var features_PROV_LaLibertad_0 = format_PROV_LaLibertad_0.readFeatures(json_PROV_LaLibertad_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROV_LaLibertad_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROV_LaLibertad_0.addFeatures(features_PROV_LaLibertad_0);
var lyr_PROV_LaLibertad_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROV_LaLibertad_0, 
                style: style_PROV_LaLibertad_0,
                popuplayertitle: 'PROV_LaLibertad',
                interactive: true,
    title: 'PROV_LaLibertad<br />\
    <img src="styles/legend/PROV_LaLibertad_0_0.png" /> ASCOPE<br />\
    <img src="styles/legend/PROV_LaLibertad_0_1.png" /> BOLIVAR<br />\
    <img src="styles/legend/PROV_LaLibertad_0_2.png" /> CHEPEN<br />\
    <img src="styles/legend/PROV_LaLibertad_0_3.png" /> GRAN CHIMU<br />\
    <img src="styles/legend/PROV_LaLibertad_0_4.png" /> JULCAN<br />\
    <img src="styles/legend/PROV_LaLibertad_0_5.png" /> OTUZCO<br />\
    <img src="styles/legend/PROV_LaLibertad_0_6.png" /> PACASMAYO<br />\
    <img src="styles/legend/PROV_LaLibertad_0_7.png" /> PATAZ<br />\
    <img src="styles/legend/PROV_LaLibertad_0_8.png" /> SANCHEZ CARRION<br />\
    <img src="styles/legend/PROV_LaLibertad_0_9.png" /> SANTIAGO DE CHUCO<br />\
    <img src="styles/legend/PROV_LaLibertad_0_10.png" /> TRUJILLO<br />\
    <img src="styles/legend/PROV_LaLibertad_0_11.png" /> VIRU<br />' });
var format_Rios_LaLibertad_1 = new ol.format.GeoJSON();
var features_Rios_LaLibertad_1 = format_Rios_LaLibertad_1.readFeatures(json_Rios_LaLibertad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_LaLibertad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_LaLibertad_1.addFeatures(features_Rios_LaLibertad_1);
var lyr_Rios_LaLibertad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_LaLibertad_1, 
                style: style_Rios_LaLibertad_1,
                popuplayertitle: 'Rios_LaLibertad',
                interactive: true,
    title: 'Rios_LaLibertad<br />\
    <img src="styles/legend/Rios_LaLibertad_1_0.png" /> Río Principal<br />\
    <img src="styles/legend/Rios_LaLibertad_1_1.png" /> Río Secundario<br />' });
var format_RVD_LaLibertad_2 = new ol.format.GeoJSON();
var features_RVD_LaLibertad_2 = format_RVD_LaLibertad_2.readFeatures(json_RVD_LaLibertad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVD_LaLibertad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_LaLibertad_2.addFeatures(features_RVD_LaLibertad_2);
var lyr_RVD_LaLibertad_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_LaLibertad_2, 
                style: style_RVD_LaLibertad_2,
                popuplayertitle: 'RVD_LaLibertad',
                interactive: true,
    title: 'RVD_LaLibertad<br />\
    <img src="styles/legend/RVD_LaLibertad_2_0.png" /> Afirmado<br />\
    <img src="styles/legend/RVD_LaLibertad_2_1.png" /> Pavimento Asfaltico<br />\
    <img src="styles/legend/RVD_LaLibertad_2_2.png" /> Pavimento de Concreto<br />\
    <img src="styles/legend/RVD_LaLibertad_2_3.png" /> Proyectado<br />\
    <img src="styles/legend/RVD_LaLibertad_2_4.png" /> Sin Afirmar<br />\
    <img src="styles/legend/RVD_LaLibertad_2_5.png" /> Trocha Carrozable<br />' });

lyr_PROV_LaLibertad_0.setVisible(true);lyr_Rios_LaLibertad_1.setVisible(true);lyr_RVD_LaLibertad_2.setVisible(true);
var layersList = [lyr_PROV_LaLibertad_0,lyr_Rios_LaLibertad_1,lyr_RVD_LaLibertad_2];
lyr_PROV_LaLibertad_0.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'Nombre de provincia', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'Superficie (ha)', 'Web': 'Web informativa', 'Videos': 'Video informativo', 'Imagen': 'Imagen referencial', });
lyr_Rios_LaLibertad_1.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_RVD_LaLibertad_2.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'Rodadura', 'COD_DS11': 'COD', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'Departamento', 'PROV': 'Provincia', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'Longitud (km) ', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'Distrito', 'CAPITAL': 'CAPITAL', });
lyr_PROV_LaLibertad_0.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDPR': 'Hidden', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'Hidden', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'TextEdit', 'Web': 'TextEdit', 'Videos': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Rios_LaLibertad_1.set('fieldImages', {'fid': 'Hidden', 'Rasgo_Prin': 'Hidden', 'Rasgo_Secu': 'Hidden', 'Nombre': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_RVD_LaLibertad_2.set('fieldImages', {'fid': 'Hidden', 'RODADURA': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'Hidden', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'Hidden', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'TextEdit', 'OBS': 'Hidden', 'SENTIDO': 'Hidden', 'BASE': 'Hidden', 'DATA': 'Hidden', 'FECHA_ACTU': 'Hidden', 'FUENTE': 'Hidden', 'COD_RODADU': 'Hidden', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'Hidden', });
lyr_PROV_LaLibertad_0.set('fieldLabels', {'NOMBPROV': 'header label - always visible', 'ha': 'header label - always visible', 'Web': 'header label - always visible', 'Videos': 'header label - always visible', 'Imagen': 'header label - always visible', });
lyr_Rios_LaLibertad_1.set('fieldLabels', {'Nombre': 'header label - always visible', 'Longitud': 'header label - always visible', });
lyr_RVD_LaLibertad_2.set('fieldLabels', {'RODADURA': 'header label - always visible', 'COD_DS11': 'header label - always visible', 'DEP': 'header label - always visible', 'PROV': 'header label - always visible', 'LONG_KM': 'header label - always visible', 'NOMBDIST': 'header label - always visible', });
lyr_RVD_LaLibertad_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});