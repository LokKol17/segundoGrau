let submit = window.document.querySelector('#submit')
submit.addEventListener('click', executaEquacao)

let res = document.querySelector('#res')
    
    function executaEquacao () {
    let inputBruto = document.querySelector('#brutus').value
    //inputBruto = 'x2 - 6x + 8 = 0'
    inputBruto = String(inputBruto)

    //something like: ([-+]?\d*?[xX]2)\s?([-+]\s?\d*?[xX])\s?([-+]\s?\d*)\s?=\s?(\d*)    /^(\d*?)[xX]2([-+]\d*?)[xX]?([-+]\d*?)?=(\d*)$/
    let inputReplace = inputBruto.replace(/\s?(\d*?[xX]2)\s?([-+])?\s?(\d*?[xX])?\s?([-+])?\s?(\d*)?\s?=\s?(\d*)/, '$1$2$3$4$5=$6')
    console.log(inputReplace)


    let a = inputReplace.replace(/^(\d*?)[xX]2.+/, '$1')
    let b = inputReplace.replace(/.+([-+]\d*?)[xX].+/, '$1')
    let c = inputReplace.replace(/.+([-+]\d*?)=.+/, '$1')
    let segundoMembro = inputReplace.replace(/.+=(\d*)$/, '$1')


    a = Number(a)
    b = Number(b)
    c = Number(c)
    segundoMembro = Number(segundoMembro)

    if (a == 0) {
        console.log("Convertendo para 1...")
        a = 1
    } 
    if (isNaN(b)) {
        b = 0
    } 
    if (isNaN(c)) {
        c = 0
    }
    if (segundoMembro != 0) {
    c = c + ((segundoMembro * -segundoMembro) / segundoMembro)
    }

    let triangulin = (b * b) - (4 * a * c)
        console.log("Delta: " + triangulin)

        if (triangulin < 0) {
            console.log("Sem raiz no conjunto dos numeros reais")
            res.innerHTML = `Sem raiz no conjunto dos numeros reais`
        } else {
            let raiz = Math.sqrt(triangulin)
            console.log("A raiz de " + triangulin + " eh " + raiz)

            let todoPos = (-(b) + raiz) / (2 * a)
            console.log("X! = " + todoPos)

            let todoNeg = (-(b) - raiz) / (2 * a)
            console.log("X!! = " + todoNeg)

           res.innerHTML = `x<sup>|</sup> = ${todoPos} <br> x<sup>||</sup> = ${todoNeg}`
        }
}
//executaEquacao()