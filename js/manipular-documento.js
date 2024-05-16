//requerir o arquivo json do servidor
function carregarConteudo(sigla, elemento) {
    let buttons = document.querySelectorAll("button")
    let imgs = document.querySelectorAll("img")

    buttons.forEach((a)=>{a.setAttribute("class", "")})
    imgs.forEach((a)=>{a.setAttribute("class", "")})

    elemento.setAttribute("class", "selecionado")
    let xhttp = new XMLHttpRequest()
    
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