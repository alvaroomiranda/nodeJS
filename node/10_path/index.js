const path = require('path')

// const custumPath = '/relatorios/bruno/relariosemanal.pdf'
// console.log(path.dirname(custumPath))
// console.log(path.basename(custumPath))
// console.log(path.extname(custumPath))

console.log(path.resolve('text.txt'))


//formatar caminho
const midFolder = 'relatorios'
const fileName = 'arquiv.txt'

const finalPath = path.join('/', 'arquivo.txt', midFolder, fileName)

console.log(finalPath)