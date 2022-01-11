// Acess Token
mapboxgl.accessToken = '' // Inserte aqui el token de acceso
// Globales
var numeroEjecuciones = 0;
var marcadores = {};
var mapa = new mapboxgl.Map({ // mapa
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542,42.358862],
    zoom: 12
});
// Anadir marker
function anadirMarker(coordenadas, mapa) {
    let miMarker = new mapboxgl.Marker()
    .setLngLat(coordenadas)
    .addTo(mapa);
    return miMarker
}
function actualizarCoordenadas(coordenadas, marcador){
    marcador.setLngLat(coordenadas);
}
// Metodos organizacion info

function generarPrimerosMarcadores (informacion) {
    let contador = 1;
    let limite = 5; // Esta variable define que tantos buses se trackearan
    informacion.forEach(
        function(elemento){
            if (contador <= limite){
                let idBus = elemento.id;
                let coordenadas = [
                    elemento.attributes.longitude, elemento.attributes.latitude
                ];
                marcadores[idBus] = {
                    coord: coordenadas,
                    marker: anadirMarker(coordenadas, mapa)
                }
            }
            else {
                return
            }
            contador ++;
        }
    )
}

function actualizarPosicionBuses (informacion) {
    for (let miElemento in marcadores){
        informacion.forEach( (infoElemento) => {
            if (miElemento == infoElemento.id) {
                marcadores[miElemento].coord = [
                    infoElemento.attributes.longitude, infoElemento.attributes.latitude
                ]
                actualizarCoordenadas(marcadores[miElemento].coord, marcadores[miElemento].marker);
            }
        })
    }
}

// Obtener informacion

async function obtenerInfo() {
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const info = await response.json();
    return info.data;
}

async function ejecutar() {
    const informacion = await obtenerInfo();
    if (numeroEjecuciones == 0) {
        generarPrimerosMarcadores( informacion);
    }
    else {
        actualizarPosicionBuses(informacion)
    }
    numeroEjecuciones ++;
    setTimeout(ejecutar, 15000);

}

// Ejecucion
ejecutar()