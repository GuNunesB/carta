/**
 * Sorteio de carta
 * @author Gustavo Nunes Bispo
 */

function sortear() {
    let nipes = ['♥', '♦', '♣', '♠']
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let faceSorteada = faces[Math.floor(Math.random() * 13)]

    let cor
    if (nipeSorteado === '♥' || nipeSorteado === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000000'
    }

    // canto superior esquerdo da carta
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>` // *Add um código HTML
    document.getElementById('supEsq').style.color = cor

    // centro da carta
    let cc = document.getElementById('centroCarta')
    if (faceSorteada === 'J') {
        cc.innerHTML = `<img src="./img/valete.png">`
    } else if (faceSorteada === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png">`
    } else if (faceSorteada === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`
    } else {
        cc.innerHTML = `<div>${nipeSorteado}</div>`
        document.getElementById('centroCarta').style.color = cor
    }

    // canto inferior direito da carta
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>` // *Add um código HTML
    document.getElementById('infDir').style.color = cor
}