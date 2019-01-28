$(document).ready(function(){
    $("#length").keyup(function(){
    var length = $(this).val()

    var weight = $("#weightofmeter").text()
    if (length) {
    var result = Math.round(length * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    else {
    $("#result").text('ответ')
    }
    })
})