function valUf(uf) {
    var i = uf.search(/[A-Z][A-Z]/g);
    return !(i == -1 || uf.length != 2); 
}

function valNum(num) {
    return (num.search(/\d\d+/g) != -1);
}

function valDt(dt) {
    var i = dt.search(/\d\d\/\d\d\/\d\d\d\d/g);
    return !(i == -1 || dt.length != '10');
}

function valCpf(cpf) {
    var i = cpf.search(/\d\d\d\d\d\d\d\d\d\d\d/g);
    return !(i == -1 || cpf.length != 11);
}

function valEmail(email) {
    return (email.search(/.+@.+\../g) != -1);
}

function valCNPJ(cnpj) {
    var i = cnpj.search(/\d\d\d\d\d\d\d\d\d\d\d\d\d\d/g);
    return !(i == -1 || cnpj.length != 14);
}

function valPass(pass, pass2) {
    if (pass != pass2) {
        return 'Senhas nao combinam!';
    } else if (pass.length < 6) {
        return 'Senha deve conter ao menos 6 caracteres';
    } 
    var dig = (pass.match(/\d/g) || []).length;
    if (!dig) {
        return 'Senha deve conter ao menos um digito';
    } 
    var alpha = (pass.match(/[a-zA-Z]/g) || []).length;
    if (!alpha) {
        return 'Senha deve conter ao menos uma letra';
    } 
    return 'ok';
}

function valValue(x) {
    x = x.replace(',', '.');
    return (x.search(/\d+.\d\d/g) != -1);
}

function valCreateUser(name, dt, cpf, city, street, number, uf, 
email, pass, pass2) {
    if (name.length < 3) {
        return 'Nome inválido';
    } else if (!valDt(dt)) {
        return 'Data inválida';
    } else if (!valCpf(cpf)) {
        return 'CPF inválido';
    } else if (!valUf(uf)) {
        return 'UF inválida';
    } else if (city.length < 3) {
        return 'Cidade inválida';
    } else if (street.length < 3) {
        return 'Rua inválida';
    } else if (!valNum(number)) {
        return 'Numero inválido';
    } else if (!valEmail(email)) {
        return 'E-mail inválido';
    } 
    return valPass(pass, pass2);
}

function valCreateRest(name, dt, cnpj, city, street, number, uf, 
    email, pass, pass2) {
    if (name.length < 3) {
        return 'Nome inválido';
    } else if (!valDt(dt)) {
        return 'Data inválida';
    } else if (!valCNPJ(cnpj)) {
        return 'CNPJ inválido';
    } else if (!valUf(uf)) {
        return 'UF inválida';
    } else if (city.length < 3) {
        return 'Cidade inválida';
    } else if (street.length < 3) {
        return 'Rua inválida';
    } else if (!valNum(number)) {
        return 'Numero inválido';
    } else if (!valEmail(email)) {
        return 'E-mail inválido';
    } 
    return valPass(pass, pass2);
}

function valCreateMenu(name, desc, value, img) {
    if (name.length < 3) {
        return 'Nome inválido';
    } else if (desc.length < 3) {
        return 'Descricao inválida';
    } else if (!valValue(value)) {
        return 'Preço inválido - Formato deve ser: xxx.xx';
    } else if (img.length < 3) {
        return 'Imagem inválida';
    }
    return 'ok';
}

module.exports = {
    valCreateUser, valCreateRest, valCreateMenu
}