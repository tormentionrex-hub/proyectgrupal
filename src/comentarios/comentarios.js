// Función para agregar comentarios dinámicamente


function agregarComentario() {  // Funciona
    const usuarioInput = document.getElementById('usuarioComentario');
    const comentarioInput = document.getElementById('nuevoComentario');
    const usuario = usuarioInput.value.trim();
    const comentario = comentarioInput.value.trim();

    if(usuario === '' && comentario === '') { // 

        alert('Por favor ingresa tu nombre y un comentario.');

    } else {
        const lista = document.getElementById('listaComentarios');

        const li = document.createElement('li');
        li.className = "list-group-item d-flex align-items-start";
        li.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" class="rounded-circle me-3" width="40">
            <div><strong>${usuario}</strong> - usuario invitado <br>"${comentario}"</div>
        `;

        lista.appendChild(li);

        // Limpiar inputs
        usuarioInput.value = '';
        comentarioInput.value = '';
    }

}



