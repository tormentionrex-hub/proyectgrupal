// Función para agregar comentarios dinámicamente
function agregarComentario() {
    const usuarioInput = document.getElementById('usuarioComentario');
    const comentarioInput = document.getElementById('nuevoComentario');
    const usuario = usuarioInput.value.trim();
    const comentario = comentarioInput.value.trim();

    if(usuario !== '' && comentario !== '') {
        const lista = document.getElementById('listaComentarios');

        const li = document.createElement('li');
        li.className = "list-group-item d-flex align-items-start";
        li.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" class="rounded-circle me-3" width="40">
<<<<<<< HEAD
            <div><strong>${usuario}</strong> - usuario invitado <br>"${comentario}"</div>
=======
            <div><strong>${usuario}</strong> - Colegio Inventado<br>"${comentario}"</div>
>>>>>>> 085746115844c0515edebfdc7105296ddac5ce25
        `;

        lista.appendChild(li);

        // Limpiar inputs
        usuarioInput.value = '';
        comentarioInput.value = '';
    } else {
        alert('Por favor ingresa tu nombre y comentario.');
    }
}
