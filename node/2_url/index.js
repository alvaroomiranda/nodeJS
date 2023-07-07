const url = require('url')
var utf8 = require('utf8'); //permite o portugues
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira' //criando url
const parseUrl = new url.URL(address)

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get('produtos'))