
function ocultarOMostrar(texto, flecha){
    
    if (!texto.style.display || texto.style.display == 'none') {
        texto.style.display = 'block';
        flecha.style.transform= 'rotate(180deg)';
    } else {
        texto.style.display = 'none';
        flecha.style.transform= 'rotate(0deg)';
    }
}

document.getElementById('perfil').onclick = function() {
    ocultarOMostrar(document.getElementById('dataPerfil'), document.getElementById('flechaPerfil'))
}
document.getElementById('exp').onclick = function() {
    ocultarOMostrar(document.getElementById('dataExp'), document.getElementById('flechaExp'))
}
document.getElementById('tecno').onclick = function() {
    ocultarOMostrar(document.getElementById('dataTecno'), document.getElementById('flechaTecno'))
}
document.getElementById('formacion').onclick = function() {
    ocultarOMostrar(document.getElementById('dataFormacion'), document.getElementById('flechaFormacion'))
}
document.getElementById('idiomas').onclick = function() {
    ocultarOMostrar(document.getElementById('dataIdiomas'), document.getElementById('flechaIdiomas'))
}