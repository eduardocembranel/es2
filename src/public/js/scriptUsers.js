const btnListUsers = document.getElementById('btn-listar-usuarios');
btnListUsers.addEventListener('click', () => {
    $.ajax({
        type : 'GET',
        url : '/users',
        contentType: 'application/json;charset=UTF-8',
        data : {},
        success: (res) => {
            var listUsers =  document.getElementById("lista");
            listUsers.textContent = JSON.stringify(res, undefined, 2);           
        }
    });
});

$("#form-user").submit((e) => {
    e.preventDefault();
    /*
    $.ajax({
        type: 'POST',
        url: '/users',
        data: {
            name: document.getElementById('in-name').value,
            email: document.getElementById('in-email').value,
            city: document.getElementById('in-city').value,
            uf: document.getElementById('in-uf').value
        },
        success: (res) => {
            alert(res);
        }
    });
    */
});

/*
const bntCreateUser = document.getElementById('btn-create-user');
bntCreateUser.addEventListener('click', () => {
    $.ajax({
        type : 'POST',
        url : '/users',
        contentType: 'application/json;charset=UTF-8',
        data : {
            "name": document.getElementById('in-name').value,
            "email": document.getElementById('in-email').value,
            "uf": document.getElementById('in-uf').value,
            "city": document.getElementById('city').value
        },
        success: (res) => {
            var listUsers =  document.getElementById("lista");
            listUsers.textContent = JSON.stringify(res, undefined, 2);  
            alert('id do usuario: ' + res);         
        }
    });
});
*/