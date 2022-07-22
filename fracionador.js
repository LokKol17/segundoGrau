function fracionar(a, b) {
    let valorA = a
    let valorB = b
    for(let i = 2; i < (a+b); i++) {

        if(valorA % i == 0 && valorB % i == 0) {
            valorA = valorA / i
            valorB = valorB / i
        }

    }
    console.log(`${valorA} / ${valorB}`)
    let final = `${valorA} / ${valorB}`
    return final
}

function geratriz(DP) {
    let x = DP
    let x10 = (x * 10)
    let x9 = x10 - x

    console.log(x)
    console.log(x10.toFixed(1))
    console.log(x9.toFixed(1))

    console.log(`O resultado é ${x9.toFixed(0)}/9`)
}
  geratriz(1.4444)