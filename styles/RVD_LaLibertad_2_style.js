var size = 0;
var placement = 'point';
function categories_RVD_LaLibertad_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Afirmado':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,252,245,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pavimento Asfaltico':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,239,207,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pavimento de Concreto':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(158,215,152,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Proyectado':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,181,103,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sin Afirmar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(29,134,65,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Trocha Carrozable':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,68,27,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RVD_LaLibertad_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("RODADURA");
    var labelFont = "19.5px \'Monotype Corsiva\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("COD_DS11") !== null) {
        labelText = String(feature.get("COD_DS11"));
    }
    
    var style = categories_RVD_LaLibertad_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
