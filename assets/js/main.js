function vermelha(){ // That set  the red color in the traffic light and wait X seconds to call the next function.
    off();
    document.getElementById('vermelha').classList.add('vermelha');
    setTimeout(verde, 5000);
}

function amarela(){ // That set the yellow color in the traffic light and wait X seconds to call the next function.
    off();
    document.getElementById('amarela').classList.add('amarela');
    setTimeout(vermelha, 2500);
}

function verde(){ // That set the green color in the traffic light and wait X seconds to call the next function.
    off();
    document.getElementById('verde').classList.add('verde');
    setTimeout(amarela, 5000);
}

function off(){ //That clear all colors in the traffic light,
    document.getElementById('vermelha').classList.remove('vermelha');
    document.getElementById('amarela').classList.remove('amarela');
    document.getElementById('verde').classList.remove('verde');
}

function iniciar(){ // That initialize the traffic light.
    vermelha();
}