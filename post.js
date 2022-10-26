const uri = 'http://44.204.71.74/api/desafiados'

function fazGet() {
    fetch(uri)
      .then(response => response.json())
      .then(data => _displayItems(data))
      .catch(error => console.error('Unable to get items.', error));
  }

function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastraUsuario() {
    event.preventDefault()
    let url = "http://44.204.71.74/api/desafiados"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let cargo = document.getElementById("cargo").value
    console.log(nome)
    console.log(email)
    console.log(cargo)

    body = {
        "name": nome,
        "email": email,
        "cargo": cargo
    }

    fazPost(url, body)
    
}

function deleteItem(id) {
    fetch(`${uri}/${id}`, {
      method: 'DELETE'
    })
    .then(() => fazGet())
    .catch(error => console.error('Unable to delete item.', error));
  }
  
  function displayEditForm(id) {
    const item = todos.find(item => item.id === id);
    
    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-email').value = item.email;
    document.getElementById('edit-cargo').value = item.cargo;
    
  }

  function updateItem(id) {
    const itemId = id
    const item = {
      id: parseInt(itemId, 10),
      //isComplete: document.getElementById('edit-isComplete').checked,
      name: document.getElementById("nome" + id).value.trim(),
      email:  document.getElementById("email" + id).value,
      cargo:  document.getElementById("cargo" + id).value 
    };
  
    fetch(`${uri}/${itemId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(() => getItems())
    .catch(error => console.error('Unable to update item.', error));
  
    closeInput();
  
    return false;
  }
