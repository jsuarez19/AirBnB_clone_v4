$(function () {
    // almacena la lista de id de amenity
    const selectedAmenities = {};

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
