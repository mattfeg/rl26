function sorteio() {
    const numerosPalpite = [
        document.getElementById('numero1').value,
        document.getElementById('numero2').value,
        document.getElementById('numero3').value,
        document.getElementById('numero4').value,
        document.getElementById('numero5').value,
        document.getElementById('numero6').value
    ].map(Number).sort((a, b) => a - b)

    if (numerosPalpite.length !== 6 || new Set(numerosPalpite).size !== 6 || numerosPalpite.some(n => n < 1 || n > 60)) {
        alert('Por favor, insira seis números diferentes entre 1 e 60.')
        return
    }

    const numerosSorteados = gerarNumerosSorteados()
    const acertos = numerosPalpite.filter(numero => numerosSorteados.includes(numero)).length
    mostrarResultado(acertos, numerosPalpite, numerosSorteados)
}

function gerarNumerosSorteados() {
    // PARA NUMEROS RANDOM
    // let sorteados = []
    // while (sorteados.length < 6) {
    //     const num = Math.floor(Math.random() * 60) + 1
    //     if (!sorteados.includes(num)) {
    //         sorteados.push(num)
    //     }
    // }
    let sorteados = [1,2,3,4,5,6]
    return sorteados.sort((a, b) => a - b)
}

function mostrarResultado(acertos, numerosPalpite, numerosSorteados) {
    let mensagem
    switch (acertos) {
        case 6:
            mensagem = 'Parabéns, você ganhou a SENA!'
            break
        case 5:
            mensagem = 'Parabéns, você ganhou a QUINA!'
            break
        case 4:
            mensagem = 'Parabéns, você ganhou a QUADRA!'
            break
        default:
            mensagem = 'Você não ganhou. Tente novamente!'
    }
    alert(`${mensagem}\nSeus números: ${numerosPalpite.join(', ')}\nNúmeros sorteados: ${numerosSorteados.join(', ')}`)
}
