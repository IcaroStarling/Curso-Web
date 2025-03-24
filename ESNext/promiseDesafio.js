const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

lerConteudo = (caminho) => {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, data) => {
            resolve(data.toString())
        })
    })
}

lerConteudo(caminho)
    .then(console.log)