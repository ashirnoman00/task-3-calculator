var perform = document.getElementById(`perform`)

function addCalculate(input) {
    perform.value += input
}

function clearr() {
    // var performs =document.getElementById(`perform`)
    perform.value = ""
}
function del() {
    var removing = document.getElementById(`perform`)
    removing.value = removing.value.slice(0, -1)
}

function calculate() {
    perform.value = eval(perform.value)
}