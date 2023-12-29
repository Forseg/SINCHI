function limitarLongituddni(input, maxLength) {
    if (input.value.length > maxLength) {
        alert('El DNI debe contener exactamente 8 dígitos.');
        input.value = input.value.slice(0, maxLength); 
    }
}

function limitarLongitudcelular(input, maxLength) {
    if (input.value.length > maxLength) {
        alert('El número de celular debe contener exactamente 9 dígitos.');
        input.value = input.value.slice(0, maxLength); 
    }
}