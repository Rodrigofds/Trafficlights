function vermelha(){
    off();
    document.getElementById('vermelha').classList.add('vermelha');
    setTimeout(verde, 5000);
}

function amarela(){
    off();
    document.getElementById('amarela').classList.add('amarela');
    setTimeout(vermelha, 2500);
}

function verde(){
    off();
    document.getElementById('verde').classList.add('verde');
    setTimeout(amarela, 5000);
}

function off(){
    document.getElementById('vermelha').classList.remove('vermelha');
    document.getElementById('amarela').classList.remove('amarela');
    document.getElementById('verde').classList.remove('verde');
}

function iniciar(){
    vermelha();
}