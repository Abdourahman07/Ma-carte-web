var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_parcelle_2 = new ol.format.GeoJSON();
var features_parcelle_2 = format_parcelle_2.readFeatures(json_parcelle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelle_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelle_2.addFeatures(features_parcelle_2);
var lyr_parcelle_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelle_2, 
                style: style_parcelle_2,
                popuplayertitle: 'parcelle',
                interactive: true,
                title: '<img src="parcelle_2.png" /> parcelle'
            });
var format_ETAB_2025_3 = new ol.format.GeoJSON();
var features_ETAB_2025_3 = format_ETAB_2025_3.readFeatures(json_ETAB_2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ETAB_2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETAB_2025_3.addFeatures(features_ETAB_2025_3);
var lyr_ETAB_2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ETAB_2025_3, 
                style: style_ETAB_2025_3,
                popuplayertitle: 'ETAB_2025',
                interactive: true,
                title: '<img src="ETAB_2025_3.png" /> ETAB_2025'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_parcelle_2.setVisible(true);lyr_ETAB_2025_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OSMStandard_1,lyr_parcelle_2,lyr_ETAB_2025_3];
lyr_parcelle_2.set('fieldAliases', {'Id': 'Id', 'ZAE': 'ZAE', 'idpar': 'idpar', });
lyr_ETAB_2025_3.set('fieldAliases', {'Id': 'Id', 'SIRET': 'SIRET', 'ZAE': 'ZAE', 'ENSEIGNE': 'ENSEIGNE', 'SALAR_REC': 'SALAR_REC', });
lyr_parcelle_2.set('fieldImages', {'Id': '', 'ZAE': '', 'idpar': '', });
lyr_ETAB_2025_3.set('fieldImages', {'Id': '', 'SIRET': '', 'ZAE': '', 'ENSEIGNE': '', 'SALAR_REC': '', });
lyr_parcelle_2.set('fieldLabels', {'Id': 'inline label - always visible', 'ZAE': 'inline label - always visible', 'idpar': 'inline label - always visible', });
lyr_ETAB_2025_3.set('fieldLabels', {'Id': 'inline label - always visible', 'SIRET': 'inline label - always visible', 'ZAE': 'inline label - always visible', 'ENSEIGNE': 'inline label - always visible', 'SALAR_REC': 'inline label - always visible', });
lyr_ETAB_2025_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
