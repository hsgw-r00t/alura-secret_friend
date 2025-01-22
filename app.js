// Caso realmente existe alguém da Alura ou da ONE vendo esse código, me chama pra batermos um papo legal: hsgw-r00t@proton.me     :)
// Caso contrário, terei minhas dúvidas :P

const friends_list = [];

function adicionarAmigo() {
    let inputFriend = document.getElementById('amigo');
    let friendName = inputFriend.value;

    let nameRegex = /^[a-zA-Z\u00C0-\u017F\s-]+$/;

    if (friendName.trim() !== '') {
        if (nameRegex.test(friendName)) {
            friends_list.push(friendName);
            updateFriendList();
            console.log('Amigo adicionado:', friendName);
            console.log('Lista atual:', friends_list);
            inputFriend.value = '';
        } else {
            alert('Por favor, insira um nome válido. Use apenas letras, espaços e hífens.');
        }
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

function updateFriendList() {
    let list = document.getElementById('listaAmigos');
    list.innerHTML = '';
    
    for(let friend of friends_list) {
        let li = document.createElement('li');
        li.textContent = friend;
        li.setAttribute('role', 'listitem');
        list.appendChild(li);
    }
}

function sortearAmigo() {
    if (friends_list.length === 0 ) {
        alert('A lista de amigos está vazia!');
        return;
    }
    else if (friends_list.length === 1) {
        alert('Você deveria fazer mais amigos :(')
        return;
    }

    let randomIndex = Math.floor(Math.random() * friends_list.length);
    let theChoosenOne = friends_list[randomIndex];
    let listResult = document.getElementById('resultado');
    listResult.innerHTML = '';
    
    let li = document.createElement('li');
    li.textContent = theChoosenOne;
    li.setAttribute('role', 'listitem');
    listResult.appendChild(li);
}