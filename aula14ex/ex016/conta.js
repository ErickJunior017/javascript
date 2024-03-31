


function contar() {
    var tinicio = document.getElementById('txtnumIn')
var tfim = document.getElementById('txtnumFim')
var tpasso = document.getElementById('txtpasso')
var inicio = Number(tinicio.value)
var fim = Number(tfim.value)
var passo = Number(tpasso.value)
    while(inicio <= fim){
        document.write('passo')
        inicio = inicio + passo
    }

}