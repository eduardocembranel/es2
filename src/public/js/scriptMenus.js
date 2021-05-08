const btnListMenus = document.getElementById('btn-listar-menus');

btnListMenus.addEventListener('click', () => {
    $.ajax({
        type : 'GET',
        url : '/menu',
        contentType: 'application/json;charset=UTF-8',
        data : {},
        success: (res) => {
            var listUsers =  document.getElementById("lista");
            listUsers.textContent = JSON.stringify(res, undefined, 2);           
        }
    });
});