const choises = document.querySelectorAll('.choise');
const hands = {
    "stone": "./src/assets/stone.png",
    "paper": "./src/assets/paper.png",
    "sisor": "./src/assets/sisors.png"
}


choises.forEach(choise => {
    choise.addEventListener('click', play);
})

function play({ target }) {
    const result = document.querySelector('#result');
    const player = document.querySelector('#player');
    const playerImage = document.querySelector('#player img');
    const machineImage = document.querySelector('#machine img');

    const handList =Object.keys(hands)
    const playerChoise = target.id;
    const machineChoise = handList[randomInt(0, 2)]

    playerImage.src = hands[playerChoise];
    machineImage.src = hands[machineChoise];

    if (playerChoise === machineChoise) {
        result.innerHTML = "Empate";
    } else if (playerChoise == "stone" && machineChoise == "sisor") {
        result.innerHTML = "Ganhou";
    } else if (playerChoise == "stone" && machineChoise == "paper") {
        result.innerHTML = "Perdeu";
    } else if (playerChoise == "paper" && machineChoise == "sisor") {
        result.innerHTML = "Perdeu";
    } else if (playerChoise == "paper" && machineChoise == "stone") {
        result.innerHTML = "Ganhou";
    } else if (playerChoise == "sisor" && machineChoise == "stone") {
        result.innerHTML = "Perdeu";
    } else if (playerChoise == "sisor" && machineChoise == "paper") {
        result.innerHTML = "Ganhou";
    }
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}