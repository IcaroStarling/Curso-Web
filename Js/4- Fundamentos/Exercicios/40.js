function qualificaNotas(notas) {
    for (let i of notas) {
        if(i >= 0.0 && i < 5) {
            console.log(`Nota: ${i} (D)`)
        }
        else if(i >= 5.0 && i < 7.0) {
            console.log(`Nota: ${i} (C)`)
        }
        else if(i >= 7 && i < 9) {
            console.log(`Nota: ${i} (B)`)
        }
        else if(i >= 9) {
            console.log(`Nota: ${i} (A)`)
        }
        
    }
}

qualificaNotas([10, 8, 6, 4, 2, 0])