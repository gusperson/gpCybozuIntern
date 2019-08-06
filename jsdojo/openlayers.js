(function() {
    'use strict';
    kintone.events.on('app.record.detail.show', function(event) {
        let div = document.createElement('div');
        let location = event.record.locations.value;
        let coords = [0, 0];
        switch (location) {
        case 'Tokyo':
            coords = [139.6503, 35.6267];
            break;
        case 'San Francisco':
            coords = [-122.4194, 37.7749];
            break;
        case 'London':
            coords = [0.1278, 51.5074];
            break;
        case 'Osaka':
            coords = [135.5023, 34.6937];
            break;
        case 'Bangkok':
            coords = [100.5018, 13.7563];
            break;
        case 'Nevada':
            coords = [-115.4830, 37.14];
            break;
        }
        div.setAttribute('id', 'map');
        div.setAttribute('style', 'width: 100%; height: 300px');
        kintone.app.record.getHeaderMenuSpaceElement().appendChild(div);
        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat(coords),
                zoom: 10
            })
        });
    });
})();
