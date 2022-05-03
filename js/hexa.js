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
    if (ultnum2 == 0 || ultnum2 == 1 || ultnum2 == 2 || ultnum2 == 3 || ultnum2 == 4 || ultnum2 == 5 || ultnum2 == 6 || ultnum2 == 7 || ultnum2 == 8 || ultnum2 == 9 || ultnum2 == "A" || ultnum2 == "B" || ultnum2 == "C" || ultnum2 == "D" || ultnum2 == "E" || ultnum2 == "F" || ultnum2 == "a" || ultnum2 == "b" || ultnum2 == "c" || ultnum2 == "d" || ultnum2 == "e" || ultnum2 == "f") {
        decimal3.innerHTML = "Here is your decimal!"
        decimal4.innerHTML = ""
    } else {
        resultado2.innerHTML = "&#129335 Waiting for a valid binary number..."
        decimal4.innerHTML = "You entered a non-hexadecimal digit (please enter only 0 to 9 and A to F)"
        decimal3.innerHTML = " "
    }
    if (ultnum2 == "") {
        decimal3 = ""
        decimal4 = ""
    }
}