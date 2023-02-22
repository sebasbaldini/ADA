// muestra solo el boton seleccionado.
$(document).ready(() =>{
       $('#mostrarmap').click(function(){
        $('#map').show();
        $('#grafico').hide();
          });
    $('#mostrargraficos').click(function(){
        $('#map').hide();
        $('#graficos').show();
           });
    
});

// funcion de mapa
var map = L.map('map').setView([-34.61315, -58.37723], 10);
var marker = L.marker([-34.61315, -58.37723]).addTo(map);
var marker2 = L.marker([-34.61315, -51]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const url = 'https://blockchain.info/ticker';
$.ajax({
  url: url,
  type: 'GET',
  dataType: 'json',
  success: (data) => {
    // console.log(data);
    $('#graficos').text(data.USD.last + ' US$ ');
  },
  error: () => {
    alert('Error vuelva a intentarlo mas tarde.');
  }
});




