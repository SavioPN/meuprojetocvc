let rlSync = require('readline-sync');
let nome= rlSync.question("qual o seu nome?\n")
console.log(`Olá ${nome}`)
let idade= rlSync.question("qual sua idade?\n")
console.log(`sua idade é: ${idade}`)