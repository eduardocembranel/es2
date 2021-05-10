$("#form-update").submit((e) => {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/updateUser',
        data: {
            name: document.getElementById('in-name').value,
            dt: document.getElementById('in-dt').value,
            cpf: document.getElementById('in-cpf').value,
            city: document.getElementById('in-city').value,
            street: document.getElementById('in-street').value,
            number: document.getElementById('in-number').value,
            uf: document.getElementById('in-uf').value,
            email: document.getElementById('in-email').value,
            pass: document.getElementById('in-pass').value,
            pass2: document.getElementById('in-pass2').value
        },
        success: (res) => {
            if (res.status == 'error') {
                swal({
                    icon: 'error',
                    title: 'Não foi possivel alterar os dados',
                    text: res.msg,
                });
            } else {
                swal(
                    'Dados alterados com sucesso!',
                    '',
                    'success'
                );
            }
        }
    });
});