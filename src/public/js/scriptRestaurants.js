const btnListRestaurants = document.getElementById('btn-listar-restaurantes');

btnListRestaurants.addEventListener('click', () => {
    $.ajax({
        type : 'GET',
        url : '/restaurant',
        contentType: 'application/json;charset=UTF-8',
        data : {},
        success: (res) => {
            var listUsers =  document.getElementById("lista");
            listUsers.textContent = JSON.stringify(res, undefined, 2);           
        }
    });
});