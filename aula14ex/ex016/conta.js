function contar() {
    let iinicio = document.getElementById('txtinicio')
    let ifim    = document.getElementById('txtfim')
    let ipasso  = document.getElementById('txtpasso')
    let res     = document.getElementById('res')

    if (iinicio.value.length == 0 || ifim.value.length == 0 || ipasso.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(iinicio.value)
        let f = Number(ifim.value)
        let p = Number(ipasso.value)
        if ( p <= 0){
            alert('Passo invalido (Somente numeros naturais maior que 0). Considerando passo = 1')
            p = 1
        }
        if ( i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `\u{1F449} ${c}`
            }
            
        } else {
            for(c = i; c >= f; c -= p){
                res.innerHTML += `\u{1F449} ${c}`
            }
        }
        res.innerHTML += `\u{1f3c1}`    
        
    }
} 