function calcular() {
    let resul = document.querySelector('#res')
    const nome = document.querySelector('#nm')
    let nota1 = document.querySelector("#uni1")
    let nota2 = document.querySelector("#uni2")
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let r = n1+n2
    let nm = String(nome.value)
    
    if (r <= 10) {
        resul.innerHTML = `eita ${nm} vc perdeu`
        resul.style.color = 'red'
    }else if (r <= 14) {
        resul.innerHTML = `vc quase perdeu ${nm}. PARA RECUPERAÇAO!`
        resul.style.color = 'gray'
    }else if (r >= 16) {
        resul.innerHTML = `Parabens ${nm} vc passou direto!`
        resul.style.color = 'green'
    }
        
}