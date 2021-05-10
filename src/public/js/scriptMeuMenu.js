function remove(idMenu) {
    $.ajax({
        type: 'POST',
        url: '/deleteMenu',
        data: {
            id: idMenu
        },
        success: (res) => {
            swal(
                'Prato removido com sucesso!',
                '',
                'success'
            );
            removeElement('id-menu-' + idMenu);
        }
    });
}

function removeElement(id) {
    var element = document.getElementById(id);
    if (element) {
        element.parentNode.removeChild(element);
    }
}