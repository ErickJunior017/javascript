//função que vai retornar se o numero é par ou impar
function parimp(n){
    if(n % 2 == 0){
        return 'Par'
    } else{
        return 'Impar'
    }
}
let res = parimp(10) //chamada
console.log(res) // vai escrever o resultado da function