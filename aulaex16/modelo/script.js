let num = document.querySelector( 'input#textnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n,l){// -1 indica que o valor nao foi encontrado a lista
    if(l.indexOf(Number(n)) != -1){

    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        
    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}