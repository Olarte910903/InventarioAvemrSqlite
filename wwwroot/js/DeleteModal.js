var deleteModal = document.getElementById('deleteModal');
deleteModal.addEventListener('show.bs.modal', function (event) {
    //Botón que activó el modal
    var button = event.relatedTarget;

    //Extraemos la información de los atributos data del boton que activa el modal
    var itemId = button.getAttribute('data-id');
    var itemName = button.getAttribute('data-name');

    //Actualizar el modal
    var modalTitle = deleteModal.querySelector('.modal-title');
    var modalBody = deleteModal.querySelector('.modal-body');

    modalTitle.textContent = 'Eliminar ' + itemName;
    modalBody.textContent = '¿Estás seguro que deseas eliminar "' + itemName + '"?';

    //Actualizar la acción del formulario
    var form = deleteModal.querySelector('form');
    form.action = '/Item/Deleteitem/' + itemId;
});