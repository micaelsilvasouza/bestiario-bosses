//requerir o arquivo json do servidor
function carregarConteudo(sigla) {
    let xhttp = new XMLHttpRequest()
    let json = "nada alem de um minuto"
    xhttp.onload = ()=>{
        mostrarConteudo(JSON.parse(xhttp.responseText), sigla)
    }

    xhttp.open("GET", "bestiario.json")
    xhttp.send()
    return json
}

function mostrarConteudo(json, sigla) {
    let boss = json[sigla]
    document.getElementById("titulo").innerHTML = boss[0]
    document.getElementById("descricao").innerHTML = boss[1]
    document.getElementById("imgBoss").src = boss[2]
}   