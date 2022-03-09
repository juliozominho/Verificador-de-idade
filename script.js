function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fnao = document.getElementById("txtano")
    var res = document.getElementById("res")
    var img = document.getElementById("imagem")
    if (fnao.value == 0 || fnao.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fnao.value
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.src = "img\\bebemasculino.jpg"
            } else if (idade < 25) {
                img.src = "img\\jovemmasculino.jpg"

            } else if (idade < 50) {
                img.src = "img\\homemadulto.jpg"
            } else {
                img.src = "img\\idosomasculino.jpg"
            }

        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.src = "img\\bebefeminino.jpg"

            } else if (idade < 25) {
                img.src = "img\\jovemfeminino.jpg"

            } else if (idade < 50) {
                img.src = "img\\mulheradulta.jpg"
            } else {
                img.src = "img\\idosafeminino.jpg"
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
}