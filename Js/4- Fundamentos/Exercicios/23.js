function calcMedia(codigoAluno, nota1, nota2, nota3) {
    let media = 0

    if (nota1 > nota2 && nota1 > nota2) {
        nota1 *= 4
        nota2 *= 3
        nota3 *= 3
        media = (nota1 + nota2 + nota3) / 10
        console.log("==================")
        console.log(`Aluno: ${codigoAluno}`)
        console.log(`Nota 1: ${nota1 / 4}`)
        console.log(`Nota 2: ${nota2 / 3}`)
        console.log(`Nota 3: ${nota3 / 3}`)
        console.log(`Média: ${media}`)
    }
    else if (nota2 > nota1 && nota2 > nota3) {
        nota2 *= 4
        nota1 *= 3
        nota3 *= 3
        media = (nota1 + nota2 + nota3) / 10
        console.log("==================")
        console.log(`Aluno: ${codigoAluno}`)
        console.log(`Nota 1: ${nota1 / 3}`)
        console.log(`Nota 2: ${nota2 / 4}`)
        console.log(`Nota 3: ${nota3 / 3}`)
        console.log(`Média: ${media}`)
    }
    else if (nota3 > nota1 && nota3 > nota2) {
        nota3 *= 4
        nota1 *= 3
        nota2 *= 3
        media = (nota1 + nota2 + nota3) / 10
        console.log("==================")
        console.log(`Aluno: ${codigoAluno}`)
        console.log(`Nota 1: ${nota1 / 3}`)
        console.log(`Nota 2: ${nota2 / 3}`)
        console.log(`Nota 3: ${nota3 / 4}`)
        console.log(`Média: ${media}`)
    }
    else {
        nota1 *= 4
        nota2 *= 3
        nota3 *= 3
        media = (nota1 + nota2 + nota3) / 10
        console.log("==================")
        console.log(`Aluno: ${codigoAluno}`)
        console.log(`Nota 1: ${nota1 / 4}`)
        console.log(`Nota 2: ${nota2 / 3}`)
        console.log(`Nota 3: ${nota3 / 3}`)
        console.log(`Média: ${media}`)
    }
    if (media >= 5) {
        console.log("APROVADO!")
        console.log("===================")
    }
    else {
        console.log("REPROVADO!")
        console.log("===================")
    }
}

calcMedia("101", 6, 5, 5)
calcMedia("102", 5, 6, 4)
calcMedia("103", 4, 4, 5)
calcMedia("104", 5, 5, 5)