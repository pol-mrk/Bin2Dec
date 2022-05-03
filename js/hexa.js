function calcular() {
    var decimal3 = document.getElementById('decimal3')
    var decimal4 = document.getElementById('decimal4')
    var num2 = document.getElementById('num2').value
    var resultado2 = document.getElementById('resultado2')
    resultado2.innerHTML = parseInt(num2, 16)
    var ultnum2 = num2.charAt(num2.length - 1)
    if (num2 == "") {
        resultado2.innerHTML = ""
    }
    if (ultnum2 == 0 || ultnum2 == 1) {
        decimal3.innerHTML = "Here is your decimal!"
        decimal4.innerHTML = ""
    } else {
        resultado2.innerHTML = "&#129335 Waiting for a valid binary number..."
    }
    if (ultnum2 >> 1 || ultnum2 >> 999999) {
        decimal3.innerHTML = ""
        decimal4.innerHTML = "You entered a non-hexadecimal digit (please enter a value between 0 to F)."
    }
    if (ultnum2 == "") {
        decimal3 = ""
        decimal4 = ""
    }
}