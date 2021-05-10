$("#form-login").submit((e) => {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/login',
        data: {
            email: document.getElementById('in-email').value,
            pass: document.getElementById('in-pass').value
        },
        success: (res) => {
            if (res.status === 'error') {
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuário ou senha invalido(s)',
                });
            } else {
                if (res.user == 1) {
                    window.location.replace('/user');
                } else if (res.user == 2) {
                    window.location.replace('/rest');
                }
            }
        },
    });
});