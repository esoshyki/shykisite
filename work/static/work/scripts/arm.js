$("document").ready(function() {
    $(".dropdown-item").click(
    function(){
    var arm = {}
    var diameter = $(this).text()
    arm['Ø6'] = "0.222"
    arm['Ø8'] = "0.395"
    arm['Ø10'] = "0.617"
    arm['Ø12'] = "0.888"
    arm['Ø14'] = "1.21"
    arm['Ø16'] = "1.58"
    arm['Ø18'] = "2.0"
    arm['Ø20'] = "2.47"
    arm['Ø22'] = "2.98"
    arm['Ø25'] = "3.85"
    arm['Ø28'] = "4.83"
    arm['Ø32'] = "6.31"
var weightofmeter = arm[diameter]
$("#weightofmeter").text(weightofmeter)
$("#diam").text(diameter)
})
})
