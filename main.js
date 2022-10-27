function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdNome = document.createElement("td");
    tdEmail = document.createElement("td")
    tdCargo = document.createElement("td")
    tdAction = document.createElement("td")
    tdBtn = document.createElement("img") 
    tdBtn.src = "https://w7.pngwing.com/pngs/380/139/png-transparent-x-red-mark-incorrect.png"
    tdBtn.classList.add("btn")
    tdBtn.onclick = () => {
        deleteItem(usuario.id);
        location.reload()
    }

    tdUdt = document.createElement("img")
    tdUdt.src = "https://toppng.com/uploads/preview/user-edit-icon-edit-icon-white-11553486095hpvoxaoebd.png"
    tdUdt.classList.add("btnUdt")
    tdUdt.onclick = () => {
        updateItem(usuario.id);
        location.reload()
    }
    inputNome = document.createElement("input")
    inputEmail = document.createElement("input")
    inputCargo = document.createElement("input")
    tdAction.appendChild(tdBtn)
    tdAction.appendChild(tdUdt)
    inputNome.id = "nome" + usuario.id
    tdNome.appendChild(inputNome)
    inputNome.value = usuario.name
    inputEmail.id = "email" + usuario.id
    tdEmail.appendChild(inputEmail)
    inputEmail.value = usuario.email
    inputCargo.id = "cargo" + usuario.id
    tdCargo.appendChild(inputCargo)
    inputCargo.value = usuario.cargo


    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdCargo);
    linha.appendChild(tdAction);
    
    return linha;
}

function main() {
    let data = fazGet("http://44.204.71.74/api/desafiados");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()