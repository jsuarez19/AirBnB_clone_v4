$(function () {
  // almacena la lista de id de amenity
  const selectedAmenities = {};

  // Función para actualizar la clase del div#api_status
  function updateApiStatusClass(status) {
    const apiStatusDiv = $('#api_status');

    if (status === 'OK') {
      apiStatusDiv.addClass('available');
    } else {
      apiStatusDiv.removeClass('available');
    }
  }
  
  // Hacer una solicitud a la URL
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    const status = data.status;
    // Llamar a la función para actualizar la clase de api_status
    updateApiStatusClass(status);
  });

  // escuchamos los cambios de cada etiqueta 
  $("input[type='checkbox']").on("change", function () {
    // si la casilla esta marcada, agrega el id de amentity a la variable
    if ($(this).is(":checked")) {
      selectedAmenities[$(this).val()] = true;
    } else {
      // Si la casilla está desmarcada, elimina el ID de la amenity de la variable
      delete selectedAmenities[$(this).val()];
    }

    // actualizamos el titulo h4
    $('.amenities h4').text(checkedAmenities.join(', '));
  })
})
