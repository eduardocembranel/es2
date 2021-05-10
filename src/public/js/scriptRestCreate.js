$("#form-create-rest").submit((e) => {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/rest',
        data: {
            name: document.getElementById('in-name').value,
            dt: document.getElementById('in-dt').value,
            cnpj: document.getElementById('in-cnpj').value,
            city: document.getElementById('in-city').value,
            street: document.getElementById('in-street').value,
            number: document.getElementById('in-number').value,
            uf: document.getElementById('in-uf').value,
            email: document.getElementById('in-email').value,
            pass: document.getElementById('in-pass').value,
            pass2: document.getElementById('in-pass2').value
        },
        success: (res) => {
            if (res.id == -1) {
                swal({
                    icon: 'error',
                    title: 'Não foi possivel criar a conta',
                    text: res.msg,
                });
            } else {
                swal(
                    'Conta criada com sucesso!',
                    '',
                    'success'
                );
            }
        }
    });
});