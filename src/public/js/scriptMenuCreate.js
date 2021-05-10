$("#form-create-menu").submit((e) => {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/createMenu',
        data: {
            name: document.getElementById('in-name').value,
            desc: document.getElementById('in-desc').value,
            value: document.getElementById('in-value').value,
            img: document.getElementById('in-img').value
        },
        success: (res) => {
            if (res.msg != 'ok') {
                swal({
                    icon: 'error',
                    title: 'Não foi possivel adicionar o prato',
                    text: res.msg,
                });
            } else {
                swal(
                    'Prato adicionado com sucesso!',
                    '',
                    'success'
                );
            }
        }
    });
});