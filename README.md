# Real Time BusTracker

DESCRIPCION
Este proyecto muestra la ubicacion de distintos buses de transporte publico de la ciudad de Boston.
Para ello, solicita informacion a la API de MBTA y utiliza la API de mapboxgl para renderizar el mapa.
La ubicacion de los buses es actualizada cada 15 segundos.
Se usan funciones Await/Async para este proposito.
Este ejercicio parte de un ejemplo de un programa de desarrollo web de MIT. Por el Dr Sanchez.
Los cambios que se hicieron al ejemplo anteriormente mencionado, son los siguientes:
  - Se creo un metodo que obtiene solamenete x cant de buses.
  - Se creo un objeto que guarda los atributos de los distintos buses, segun su id, que se utiliza para ser actualizado.
  - Se creo un metodo que permite actualizar las coordenadas de un marcador, que es usado para cuando se actualiza la informacion.

A TENER EN CUENTA
- En el codigo se debe especificar el token para la API de mapboxgl
- Se puede modificar la url de donde se obtiene la informacion
- Se puede modificar la variable que permite modificar el numero de buses que se desean rastrear

Licencia

La licencia de uso debe cumplir las condiciones del MIT.
