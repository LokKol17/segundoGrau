//import { fracionar } from 'fracionador.js'

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

            // console.log((2 * a), (-(b)))
            // let final = fracionar((2 * a), (-(b)))

            let todoPos = (-(b) + raiz) / (2 * a)
            console.log("X! = " + todoPos)
            let fraPos = geratriz(todoPos)
            console.log(fraPos)
            

            let todoNeg = (-(b) - raiz) / (2 * a)
            console.log("X!! = " + todoNeg)
            let fraNeg = geratriz(todoNeg)
            console.log(fraNeg)

            if (Number.isInteger(todoPos) && Number.isInteger(todoNeg)) {
                res.innerHTML = 
                `x<sup>|</sup> = ${todoPos}<br>
                 x<sup>||</sup> = ${todoNeg}`
            } else {
                res.innerHTML = 
                `x<sup>|</sup> = ${todoPos} ou ${fraPos}<br>
                 x<sup>||</sup> = ${todoNeg} ou ${fraNeg}`
            }


        }
}
//executaEquacao()
function fracionar(a, b) {
    let valorA = a
    let valorB = b
    for(let i = 2; i < (a+b); i++) {

        if(valorA % i == 0 && valorB % i == 0) {
            valorA = valorA / i
            valorB = valorB / i
        }

    }
    //console.log(`${valorA} / ${valorB}`)
    let final = `${valorA} / ${valorB}`
    return final
  }

  function geratriz(DP) {
    let x = DP
    let x10 = (x * 10)
    let x9 = x10 - x
    let res = fracionar(x9.toFixed(0), 9)//`${x9.toFixed(0)}/9`
    return res
}