function calcular() {
    var decimal1 = document.getElementById('decimal1')
    var decimal2 = document.getElementById('decimal2')
    var num = document.getElementById('num').value
    var resultado = document.getElementById('resultado')
    var ultnum = num.charAt(num.length - 1)
    resultado.innerHTML = parseInt(num, 2)
    if (num == "") {
        resultado.innerHTML = ""
    }
    if (ultnum == 0 || ultnum == 1) {
        decimal1.innerHTML = "Here is your decimal!"
        decimal2.innerHTML = ""
    }
    if (ultnum >> 1 || ultnum >> 999999) {
        decimal1.innerHTML = ""
        decimal2.innerHTML = "You entered a non-binary digit (please enter only 0 or 1)."
    } else {
        resultado.innerHTML = "&#129335 Waiting for a valid binary number..."
    }
    if (ultnum == "") {
        decimal1 = ""
        decimal2 = ""
    }
}