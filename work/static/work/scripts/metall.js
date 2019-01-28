$("document").ready(function() {
$('.dropdown-item').click(function(){
    var id = this.id
    if (id == '1'){
    $("#titleprofile").text("Теоретический вес уголка равнополочного (ГОСТ 8509-93) ")
    $('<div class="dropdown" id="ugolokrdrop"></div>').insertAfter('#rootdrop');
    $('#ugolokndrop, #shvellerdrop, #dvutavrdrop, #polosadrop').remove()
    if ($('button').is("#ugolokrButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="ugolokrButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Уголок равнополочный</button>').appendTo("#ugolokrdrop");
    $('<div class="dropdown-menu" aria-labelledby="ugolokrButton" id="dropugolokr"></div>').appendTo("#ugolokrdrop").css({"height" : "200px", "overflow-y" : "scroll"});
    $('<a class="dropdown-item" name = "0.89" id="20x20x3">20x20x3</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.15" id="20x20x4">20x20x4</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.12" id="25x25x3">25x25x3</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.46" id="25x25x4">25x25x4</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.27" id="28x28x3">28x28x3</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.36" id="30x30x3">30x30x3</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.78" id="30x30x4">30x30x4</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.46" id="32x32x3">32x32x3</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.91" id="32x32x4">32x32x4</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.6" id="35x35x3">35x35x3</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "2.1" id="35x35x4">35x35x4</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "2.58" id="35x35x5">35x35x5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "1.85" id="40x40x3">40x40x3</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "2.42" id="40x40x4">40x40x4</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "2.98" id="40x40x5">40x40x5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "2.32" id="50x50x3">50x50x3</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "3.05" id="50x50x4">50x50x4</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "3.77" id="50x50x5">50x50x5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "4.42" id="50x50x6">50x50x6</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "3.44" id="56x56x4">56x56x4</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "4.25" id="56x56x5">56x56x5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "3.9" id="63x63x4">63x63x4</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "4.81" id="63x63x5">63x63x5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "5.72" id="63x63x6">63x63x6</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "4.87" id="70x70x4.5">70x70x4.5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "5.38" id="70x70x5">70x70x5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "6.39" id="70x70x6">70x70x6</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "7.39" id="70x70x7">70x70x7</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "8.37" id="70x70x8">70x70x8</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "5.8" id="75x75x5">75x75x5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "6.89" id="75x75x6">75x75x6</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "7.96" id="75x75x7">75x75x7</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "9.02" id="75x75x8">75x75x8</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "10.07" id="75x75x9">75x75x9</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "6.78" id="80x80x5.5">80x80x5.5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "7.36" id="80x80x6">80x80x6</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "8.51" id="80x80x7">80x80x7</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "9.65" id="80x80x8">80x80x8</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "8.33" id="90x90x6">90x90x6</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "9.64" id="90x90x7">90x90x7</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "10.93" id="90x90x8">90x90x8</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "12.2" id="90x90x9">90x90x9</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "10.06" id="100x100x6.5">100x100x6.5</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "10.79" id="100x100x7">100x100x7</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "12.25" id="100x100x8">100x100x8</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "15.10" id="100x100x10">100x100x10</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "17.9" id="100x100x12">100x100x12</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "20.63" id="100x100x14">100x100x14</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "23.30" id="100x100x16">100x100x16</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "11.89" id="110x110x7">110x110x7</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "13.5" id="110x110x8">110x110x8</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "15.46" id="125x125x8">125x125x8</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "17.3" id="125x125x9">125x125x9</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "19.10" id="125x125x10">125x125x10</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "22.68" id="125x125x12">125x125x12</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "26.2" id="125x125x14">125x125x14</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "29.65" id="125x125x16">125x125x16</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "19.41" id="140x140x9">140x140x9</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "21.45" id="140x140x10">140x140x10</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "25.50" id="140x140x12">140x140x12</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "24.67" id="160x160x10">160x160x10</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "27.02" id="160x160x11">160x160x11</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "29.35" id="160x160x12">160x160x12</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "34.2" id="160x160x14">160x160x14</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "38.52" id="160x160x16">160x160x16</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "43.01" id="160x160x18">160x160x18</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "47.41" id="160x160x20">160x160x20</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "30.47" id="180x180x11">180x180x11</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "33.12" id="180x180x12">180x180x12</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "36.97" id="200x200x12">200x200x12</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "39.92" id="200x200x13">200x200x13</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "42.80" id="200x200x14">200x200x14</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "48.65" id="200x200x16">200x200x16</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "60.08" id="200x200x20">200x200x20</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "74.02" id="200x200x25">200x200x25</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "87.56" id="200x200x30">200x200x30</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "47.40" id="220x220x14">220x220x14</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "54.83" id="220x220x16">220x220x16</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "61.55" id="250x250x16">250x250x16</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "68.86" id="250x250x18">250x250x18</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "76.11" id="250x250x20">250x250x20</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "83.31" id="250x250x22">250x250x22</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "93.97" id="250x250x25">250x250x25</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "104.5" id="250x250x28">250x250x28</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "111.4" id="250x250x30">250x250x30</a>').appendTo('#dropugolokr');
    $('<a class="dropdown-item" name = "128.51" id="250x250x35">250x250x35</a>').appendTo('#dropugolokr'); }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#ugolokrButton").text(raz)}
    var weightofmeter = this.name
    $("#weightofmeter").text(weightofmeter)
    var lengthone = $('#length').val();
    var weight = $("#weightofmeter").text();
    if (lengthone) {
    var result = Math.round(lengthone * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    var myfunc = function(){
    var length = $(this).val()

    var weight = $("#weightofmeter").text()
    if (length) {
    var result = Math.round(length * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    else {
    $("#result").text('ответ')
    }
    };
    $("#length")
        .keyup(myfunc)
        .change(myfunc)
    })


}
if (id == "2") {
    $("#titleprofile").text("Теоретический вес уголка неравнополочного (ГОСТ 8510-86)")
$('<div class="dropdown" id="ugolokndrop"></div>').insertAfter('#rootdrop');
    $('#ugolokrdrop, #shvellerdrop, #dvutavrdrop, #polosadrop').remove()
    if ($('button').is("#ugoloknButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="ugoloknButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Уголок неравнополочный</button>').appendTo("#ugolokndrop");
    $('<div class="dropdown-menu" aria-labelledby="ugoloknButton" id="dropugolokn"></div>').appendTo("#ugolokndrop").css({"height" : "200px", "overflow-y" : "scroll"});
$('<a class="dropdown-item" name = "0.91" id="25x16x3">25x16x3</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "1.12" id="30x20x3">30x20x3</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "1.46" id="30x20x4">30x20x4</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "1.17" id="32x20x3">32x20x3</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "1.52" id="32x20x4">32x20x4</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "1.48" id="40x25x3">40x25x3</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "1.94" id="40x25x4">40x25x4</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "2.37" id="40x25x5">40x25x5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "2.26" id="40x30x4">40x30x4</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "2.46" id="40x30x5">40x30x5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "1.68" id="45x28x3">45x28x3</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "2.2" id="45x28x4">45x28x4</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "1.9" id="50x32x3">50x32x3</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "2.4" id="50x32x4">50x32x4</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "2.81" id="56x36x4">56x36x4</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "3.46" id="56x36x5">56x36x5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "3.17" id="63x40x4">63x40x4</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "3.91" id="63x40x5">63x40x5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "4.63" id="63x40x6">63x40x6</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "6.03" id="63x40x8">63x40x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "4.36" id="65x50x5">65x50x5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "5.18" id="65x50x6">65x50x6</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "5.98" id="65x50x7">65x50x7</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "6.77" id="65x50x8">65x50x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "4.39" id="70x45x5">70x45x5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "4.79" id="75x60x5">75x60x5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "5.69" id="75x60x6">75x60x6</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "6.57" id="75x60x7">75x60x7</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "7.43" id="75x60x8">75x60x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "4.49" id="80x50x5">80x50x5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "5.92" id="80x50x6">80x50x6</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "6.39" id="80x60x6">80x60x6</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "7.39" id="80x60x7">80x60x7</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "8.37" id="80x60x8">80x60x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "6.17" id="90x56x5.5">90x56x5.5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "6.7" id="90x56x6">90x56x6</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "8.77" id="90x56x8">90x56x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "12.14" id="100x63x10">100x63x10</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "7.53" id="100x63x6">100x63x6</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "8.7" id="100x63x7">100x63x7</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "9.87" id="100x63x8">100x63x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "12.3" id="100x65x10">100x65x10</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "8.81" id="100x65x7">100x65x7</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "9.99" id="100x65x8">100x65x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "8.98" id="110x70x6.5">110x70x6.5</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "10.93" id="110x70x8">110x70x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "15.47" id="125x80x10">125x80x10</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "18.34" id="125x80x12">125x80x12</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "11.04" id="125x80x7">125x80x7</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "12.53" id="125x80x8">125x80x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "17.46" id="140x90x10">140x90x10</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "14.13" id="140x90x8">140x90x8</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "19.85" id="160x100x10">160x100x10</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "23.58" id="160x100x12">160x100x12</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "27.26" id="160x100x14">160x100x14</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "17.96" id="160x100x9">160x100x9</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "22.2" id="180x110x10">180x110x10</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "26.4" id="180x110x12">180x110x12</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "27.37" id="200x125x11">200x125x11</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "29.74" id="200x125x12">200x125x12</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "34.43" id="200x125x14">200x125x14</a>').appendTo('#dropugolokn');
$('<a class="dropdown-item" name = "39.07" id="200x125x16">200x125x16</a>').appendTo('#dropugolokn');
 }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#ugoloknButton").text(raz) }
    var weightofmeter = this.name
    $("#weightofmeter").text(weightofmeter)
    var lengthone = $('#length').val();
    var weight = $("#weightofmeter").text();
    if (lengthone) {
    var result = Math.round(lengthone * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    var myfunc = function(){
    var length = $(this).val()

    var weight = $("#weightofmeter").text()
    if (length) {
    var result = Math.round(length * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    else {
    $("#result").text('ответ')
    }
    };
    $("#length")
        .keyup(myfunc)
        .change(myfunc)
    })


}
if (id == "3") {
$("#titleprofile").text("Таблица расчета веса стального швеллера")
$('<div class="dropdown" id="shvellerdrop"></div>').insertAfter('#rootdrop');
    $('#ugolokrdrop, #ugolokndrop, #dvutavrdrop, #polosadrop').remove()
    if ($('button').is("#shvellerButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="shvellerButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Швеллер</button>').appendTo("#shvellerdrop");
    $('<div class="dropdown-menu" aria-labelledby="shvellerButton" id="dropshveller"></div>').appendTo("#shvellerdrop").css({"height" : "200px", "overflow-y" : "scroll"});
$('<a class="dropdown-item" name = "4.842" id="5У">5У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "5.899" id="6.5У">6.5У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "7.049" id="8У">8У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "8.594" id="10У">10У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "10.43" id="12У">12У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "12.29" id="14У">14У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "14.23" id="16У">16У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "15.35" id="15аУ">15аУ</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "16.26" id="18У">18У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "17.45" id="18аУ">18аУ</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "18.37" id="20У">20У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "20.98" id="22У">22У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "24.06" id="24У">24У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "27.66" id="27У">27У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "31.78" id="30У">30У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "36.53" id="33У">33У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "41.91" id="36У">36У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "48.32" id="40У">40У</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "4.84" id="5П">5П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "5.897" id="6.5П">6.5П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "7.051" id="8П">8П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "8.595" id="10П">10П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "10.42" id="12П">12П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "12.29" id="14П">14П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "14.22" id="16П">16П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "15.34" id="16аП">16аП</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "16.26" id="18П">18П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "17.46" id="18аП">18аП</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "18.37" id="20П">20П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "20.97" id="22П">22П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "24.05" id="24П">24П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "27.65" id="27П">27П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "31.78" id="30П">30П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "34.87" id="33П">33П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "41.89" id="36П">36П</a>').appendTo('#dropshveller');
$('<a class="dropdown-item" name = "48.28" id="40П">40П</a>').appendTo('#dropshveller');

 }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#shvellerButton").text(raz) }
    var weightofmeter = this.name
    $("#weightofmeter").text(weightofmeter)
    var lengthone = $('#length').val();
    var weight = $("#weightofmeter").text();
    if (lengthone) {
    var result = Math.round(lengthone * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    var myfunc = function(){
    var length = $(this).val()

    var weight = $("#weightofmeter").text()
    if (length) {
    var result = Math.round(length * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    else {
    $("#result").text('ответ')
    }
    };
    $("#length")
        .keyup(myfunc)
        .change(myfunc)
    })


}
if (id == "4") {
$("#titleprofile").text("Теоретический вес балки по ГОСТ 8239-89")
$('<div class="dropdown" id="dvutavrdrop"></div>').insertAfter('#rootdrop');
   $('#ugolokrdrop, #ugolokndrop, #shvellerdrop, #polosadrop').remove()
    if ($('button').is("#dvutavrButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="dvutavrButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Двутавр</button>').appendTo("#dvutavrdrop");
    $('<div class="dropdown-menu" aria-labelledby="dvutavrButton" id="dropdvutavr"></div>').appendTo("#dvutavrdrop").css({"height" : "200px", "overflow-y" : "scroll"});
$('<a class="dropdown-item" name = "9.456" id="№10">№10</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "11.54" id="№12">№12</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "13.68" id="№14">№14</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "15.89" id="№16">№16</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "18.35" id="№18">№18</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "19.92" id="№18а">№18а</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "21.04" id="№20">№20</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "22.69" id="№20а*">№20а*</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "24.04" id="№22">№22</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "25.76" id="№22а*">№22а*</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "27.34" id="№24">№24</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "29.40" id="№24а*">№24а*</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "31.53" id="№27">№27</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "33.88" id="№27а*">№27а*</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "36.48" id="№30">№30</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "39.17" id="№30а*">№30а*</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "42.25" id="№33">№33</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "48.55" id="№36">№36</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "56.96" id="№40">№40</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "66.50" id="№45">№45</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "78.64" id="№50">№50</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "92.66" id="№55">№55</a>').appendTo('#dropdvutavr');
$('<a class="dropdown-item" name = "108.0" id="№60">№60</a>').appendTo('#dropdvutavr');
 }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#dvutavrButton").text(raz) }
    var weightofmeter = this.name
    $("#weightofmeter").text(weightofmeter)
    var lengthone = $('#length').val();
    var weight = $("#weightofmeter").text();
    if (lengthone) {
    var result = Math.round(lengthone * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    var myfunc = function(){
    var length = $(this).val()

    var weight = $("#weightofmeter").text()
    if (length) {
    var result = Math.round(length * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    else {
    $("#result").text('ответ')
    }
    };
    $("#length")
        .keyup(myfunc)
        .change(myfunc)
    })


}

if (id == "5") {
$('<div class="dropdown" id="polosadrop"></div>').insertAfter('#rootdrop');
    $("#titleprofile").text("Теоретическая масса 1 погонного метра полосы по ГОСТ 103-06")
       $('#ugolokrdrop, #ugolokndrop, #shvellerdrop, #dvutavrdrop').remove()
       $('#polosaButton').text('Полоса')
    if ($('button').is("#polosaButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="polosaButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Полоса</button>').appendTo("#polosadrop");
    $('<div class="dropdown-menu" aria-labelledby="polosaButton" id="droppolosa"></div>').appendTo("#polosadrop").css({"height" : "200px", "overflow-y" : "scroll"});
$('<a class="dropdown-item" name = "0.393" id="Полоса 10x5x5">Полоса 10x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.377" id="Полоса 12x4x4">Полоса 12x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.471" id="Полоса 12x5x5">Полоса 12x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.565" id="Полоса 12x6x6">Полоса 12x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.754" id="Полоса 12x8x8">Полоса 12x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.659" id="Полоса 14x6x6">Полоса 14x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.879" id="Полоса 14x8x8">Полоса 14x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.589" id="Полоса 15x5x5">Полоса 15x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.707" id="Полоса 15x6x6">Полоса 15x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.942" id="Полоса 15x8x8">Полоса 15x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.178" id="Полоса 15x10x10">Полоса 15x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.502" id="Полоса 16x4x4">Полоса 16x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.628" id="Полоса 16x5x5">Полоса 16x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.754" id="Полоса 16x6x6">Полоса 16x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.879" id="Полоса 16x7x7">Полоса 16x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.005" id="Полоса 16x8x8">Полоса 16x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.130" id="Полоса 16x9x9">Полоса 16x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.256" id="Полоса 16x10x10">Полоса 16x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.382" id="Полоса 16x11x11">Полоса 16x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.507" id="Полоса 16x12x12">Полоса 16x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.758" id="Полоса 16x14x14">Полоса 16x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.565" id="Полоса 18x4x4">Полоса 18x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.707" id="Полоса 18x5x5">Полоса 18x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.848" id="Полоса 18x6x6">Полоса 18x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.989" id="Полоса 18x7x7">Полоса 18x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.130" id="Полоса 18x8x8">Полоса 18x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.272" id="Полоса 18x9x9">Полоса 18x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.413" id="Полоса 18x10x10">Полоса 18x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.554" id="Полоса 18x11x11">Полоса 18x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.696" id="Полоса 18x12x12">Полоса 18x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.978" id="Полоса 18x14x14">Полоса 18x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.260" id="Полоса 18x16x16">Полоса 18x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.628" id="Полоса 20x4x4">Полоса 20x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.785" id="Полоса 20x5x5">Полоса 20x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.942" id="Полоса 20x6x6">Полоса 20x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.099" id="Полоса 20x7x7">Полоса 20x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.256" id="Полоса 20x8x8">Полоса 20x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.413" id="Полоса 20x9x9">Полоса 20x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.570" id="Полоса 20x10x10">Полоса 20x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.727" id="Полоса 20x11x11">Полоса 20x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.884" id="Полоса 20x12x12">Полоса 20x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.198" id="Полоса 20x14x14">Полоса 20x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.355" id="Полоса 20x15x15">Полоса 20x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.512" id="Полоса 20x16x16">Полоса 20x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.691" id="Полоса 22x4x4">Полоса 22x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.864" id="Полоса 22x5x5">Полоса 22x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.036" id="Полоса 22x6x6">Полоса 22x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.209" id="Полоса 22x7x7">Полоса 22x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.382" id="Полоса 22x8x8">Полоса 22x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.554" id="Полоса 22x9x9">Полоса 22x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.727" id="Полоса 22x10x10">Полоса 22x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.900" id="Полоса 22x11x11">Полоса 22x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.072" id="Полоса 22x12x12">Полоса 22x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.418" id="Полоса 22x14x14">Полоса 22x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.763" id="Полоса 22x16x16">Полоса 22x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.109" id="Полоса 22x18x18">Полоса 22x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.454" id="Полоса 22x20x20">Полоса 22x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.785" id="Полоса 25x4x4">Полоса 25x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.981" id="Полоса 25x5x5">Полоса 25x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.178" id="Полоса 25x6x6">Полоса 25x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.374" id="Полоса 25x7x7">Полоса 25x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.570" id="Полоса 25x8x8">Полоса 25x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.766" id="Полоса 25x9x9">Полоса 25x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.963" id="Полоса 25x10x10">Полоса 25x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.159" id="Полоса 25x11x11">Полоса 25x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.355" id="Полоса 25x12x12">Полоса 25x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.748" id="Полоса 25x14x14">Полоса 25x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.944" id="Полоса 25x15x15">Полоса 25x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.140" id="Полоса 25x16x16">Полоса 25x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.533" id="Полоса 25x18x18">Полоса 25x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.925" id="Полоса 25x20x20">Полоса 25x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.318" id="Полоса 25x22x22">Полоса 25x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.879" id="Полоса 28x4x4">Полоса 28x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.099" id="Полоса 28x5x5">Полоса 28x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.319" id="Полоса 28x6x6">Полоса 28x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.539" id="Полоса 28x7x7">Полоса 28x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.758" id="Полоса 28x8x8">Полоса 28x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.978" id="Полоса 28x9x9">Полоса 28x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.198" id="Полоса 28x10x10">Полоса 28x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.418" id="Полоса 28x11x11">Полоса 28x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.638" id="Полоса 28x12x12">Полоса 28x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.077" id="Полоса 28x14x14">Полоса 28x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.517" id="Полоса 28x16x16">Полоса 28x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.956" id="Полоса 28x18x18">Полоса 28x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.396" id="Полоса 28x20x20">Полоса 28x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.836" id="Полоса 28x22x22">Полоса 28x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.495" id="Полоса 28x25x25">Полоса 28x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "0.942" id="Полоса 30x4x4">Полоса 30x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.178" id="Полоса 30x5x5">Полоса 30x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.413" id="Полоса 30x6x6">Полоса 30x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.649" id="Полоса 30x7x7">Полоса 30x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.884" id="Полоса 30x8x8">Полоса 30x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.120" id="Полоса 30x9x9">Полоса 30x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.355" id="Полоса 30x10x10">Полоса 30x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.591" id="Полоса 30x11x11">Полоса 30x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.826" id="Полоса 30x12x12">Полоса 30x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.297" id="Полоса 30x14x14">Полоса 30x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.533" id="Полоса 30x15x15">Полоса 30x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.768" id="Полоса 30x16x16">Полоса 30x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.239" id="Полоса 30x18x18">Полоса 30x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.710" id="Полоса 30x20x20">Полоса 30x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.181" id="Полоса 30x22x22">Полоса 30x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.005" id="Полоса 32x4x4">Полоса 32x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.256" id="Полоса 32x5x5">Полоса 32x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.507" id="Полоса 32x6x6">Полоса 32x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.758" id="Полоса 32x7x7">Полоса 32x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.010" id="Полоса 32x8x8">Полоса 32x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.261" id="Полоса 32x9x9">Полоса 32x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.512" id="Полоса 32x10x10">Полоса 32x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.763" id="Полоса 32x11x11">Полоса 32x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.014" id="Полоса 32x12x12">Полоса 32x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.517" id="Полоса 32x14x14">Полоса 32x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.019" id="Полоса 32x16x16">Полоса 32x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.522" id="Полоса 32x18x18">Полоса 32x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.024" id="Полоса 32x20x20">Полоса 32x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.526" id="Полоса 32x22x22">Полоса 32x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.280" id="Полоса 32x25x25">Полоса 32x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.034" id="Полоса 32x28x28">Полоса 32x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.536" id="Полоса 32x30x30">Полоса 32x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.100" id="Полоса 35x4x4">Полоса 35x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.374" id="Полоса 35x5x5">Полоса 35x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.649" id="Полоса 35x6x6">Полоса 35x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.198" id="Полоса 35x8x8">Полоса 35x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.748" id="Полоса 35x10x10">Полоса 35x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.297" id="Полоса 35x12x12">Полоса 35x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.121" id="Полоса 35x15x15">Полоса 35x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.495" id="Полоса 35x20x20">Полоса 35x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.869" id="Полоса 35x25x25">Полоса 35x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.243" id="Полоса 35x30x30">Полоса 35x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.130" id="Полоса 36x4x4">Полоса 36x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.413" id="Полоса 36x5x5">Полоса 36x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.696" id="Полоса 36x6x6">Полоса 36x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.978" id="Полоса 36x7x7">Полоса 36x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.261" id="Полоса 36x8x8">Полоса 36x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.543" id="Полоса 36x9x9">Полоса 36x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.826" id="Полоса 36x10x10">Полоса 36x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.109" id="Полоса 36x11x11">Полоса 36x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.391" id="Полоса 36x12x12">Полоса 36x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.956" id="Полоса 36x14x14">Полоса 36x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.522" id="Полоса 36x16x16">Полоса 36x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.087" id="Полоса 36x18x18">Полоса 36x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.652" id="Полоса 36x20x20">Полоса 36x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.217" id="Полоса 36x22x22">Полоса 36x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.065" id="Полоса 36x25x25">Полоса 36x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.913" id="Полоса 36x28x28">Полоса 36x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.478" id="Полоса 36x30x30">Полоса 36x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.256" id="Полоса 40x4x4">Полоса 40x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.570" id="Полоса 40x5x5">Полоса 40x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.884" id="Полоса 40x6x6">Полоса 40x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.198" id="Полоса 40x7x7">Полоса 40x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.512" id="Полоса 40x8x8">Полоса 40x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.826" id="Полоса 40x9x9">Полоса 40x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.140" id="Полоса 40x10x10">Полоса 40x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.454" id="Полоса 40x11x11">Полоса 40x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.768" id="Полоса 40x12x12">Полоса 40x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.396" id="Полоса 40x14x14">Полоса 40x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.710" id="Полоса 40x15x15">Полоса 40x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.024" id="Полоса 40x16x16">Полоса 40x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.652" id="Полоса 40x18x18">Полоса 40x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.280" id="Полоса 40x20x20">Полоса 40x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.908" id="Полоса 40x22x22">Полоса 40x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.850" id="Полоса 40x25x25">Полоса 40x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.792" id="Полоса 40x28x28">Полоса 40x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.420" id="Полоса 40x30x30">Полоса 40x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.048" id="Полоса 40x32x32">Полоса 40x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.413" id="Полоса 45x4x4">Полоса 45x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.766" id="Полоса 45x5x5">Полоса 45x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.120" id="Полоса 45x6x6">Полоса 45x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.473" id="Полоса 45x7x7">Полоса 45x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.826" id="Полоса 45x8x8">Полоса 45x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.179" id="Полоса 45x9x9">Полоса 45x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.533" id="Полоса 45x10x10">Полоса 45x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.886" id="Полоса 45x11x11">Полоса 45x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.239" id="Полоса 45x12x12">Полоса 45x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.946" id="Полоса 45x14x14">Полоса 45x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.299" id="Полоса 45x15x15">Полоса 45x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.652" id="Полоса 45x16x16">Полоса 45x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.359" id="Полоса 45x18x18">Полоса 45x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.065" id="Полоса 45x20x20">Полоса 45x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.772" id="Полоса 45x22x22">Полоса 45x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.831" id="Полоса 45x25x25">Полоса 45x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.891" id="Полоса 45x28x28">Полоса 45x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.598" id="Полоса 45x30x30">Полоса 45x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.304" id="Полоса 45x32x32">Полоса 45x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.717" id="Полоса 45x36x36">Полоса 45x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.570" id="Полоса 50x4x4">Полоса 50x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "1.963" id="Полоса 50x5x5">Полоса 50x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.355" id="Полоса 50x6x6">Полоса 50x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.748" id="Полоса 50x7x7">Полоса 50x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.140" id="Полоса 50x8x8">Полоса 50x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.533" id="Полоса 50x9x9">Полоса 50x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.925" id="Полоса 50x10x10">Полоса 50x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.318" id="Полоса 50x11x11">Полоса 50x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.710" id="Полоса 50x12x12">Полоса 50x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.495" id="Полоса 50x14x14">Полоса 50x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.888" id="Полоса 50x15x15">Полоса 50x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.280" id="Полоса 50x16x16">Полоса 50x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.065" id="Полоса 50x18x18">Полоса 50x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.850" id="Полоса 50x20x20">Полоса 50x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.635" id="Полоса 50x22x22">Полоса 50x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.813" id="Полоса 50x25x25">Полоса 50x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.990" id="Полоса 50x28x28">Полоса 50x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.775" id="Полоса 50x30x30">Полоса 50x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.560" id="Полоса 50x32x32">Полоса 50x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.130" id="Полоса 50x36x36">Полоса 50x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.159" id="Полоса 55x5x5">Полоса 55x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.591" id="Полоса 55x6x6">Полоса 55x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.022" id="Полоса 55x7x7">Полоса 55x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.454" id="Полоса 55x8x8">Полоса 55x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.886" id="Полоса 55x9x9">Полоса 55x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.318" id="Полоса 55x10x10">Полоса 55x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.749" id="Полоса 55x11x11">Полоса 55x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.181" id="Полоса 55x12x12">Полоса 55x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.045" id="Полоса 55x14x14">Полоса 55x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.908" id="Полоса 55x16x16">Полоса 55x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.772" id="Полоса 55x18x18">Полоса 55x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.635" id="Полоса 55x20x20">Полоса 55x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.499" id="Полоса 55x22x22">Полоса 55x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.794" id="Полоса 55x25x25">Полоса 55x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.089" id="Полоса 55x28x28">Полоса 55x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.953" id="Полоса 55x30x30">Полоса 55x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "13.816" id="Полоса 55x32x32">Полоса 55x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.543" id="Полоса 55x36x36">Полоса 55x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.355" id="Полоса 60x5x5">Полоса 60x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.826" id="Полоса 60x6x6">Полоса 60x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.297" id="Полоса 60x7x7">Полоса 60x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.768" id="Полоса 60x8x8">Полоса 60x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.239" id="Полоса 60x9x9">Полоса 60x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.710" id="Полоса 60x10x10">Полоса 60x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.181" id="Полоса 60x11x11">Полоса 60x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.652" id="Полоса 60x12x12">Полоса 60x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.594" id="Полоса 60x14x14">Полоса 60x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.065" id="Полоса 60x15x15">Полоса 60x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.536" id="Полоса 60x16x16">Полоса 60x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.478" id="Полоса 60x18x18">Полоса 60x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.420" id="Полоса 60x20x20">Полоса 60x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.362" id="Полоса 60x22x22">Полоса 60x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.775" id="Полоса 60x25x25">Полоса 60x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "13.188" id="Полоса 60x28x28">Полоса 60x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.130" id="Полоса 60x30x30">Полоса 60x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.072" id="Полоса 60x32x32">Полоса 60x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.485" id="Полоса 60x35x35">Полоса 60x35x35</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.956" id="Полоса 60x36x36">Полоса 60x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.840" id="Полоса 60x40x40">Полоса 60x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.195" id="Полоса 60x45x45">Полоса 60x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "23.550" id="Полоса 60x50x50">Полоса 60x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "26.376" id="Полоса 60x56x56">Полоса 60x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.967" id="Полоса 63x6x6">Полоса 63x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.551" id="Полоса 65x5x5">Полоса 65x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.062" id="Полоса 65x6x6">Полоса 65x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.572" id="Полоса 65x7x7">Полоса 65x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.082" id="Полоса 65x8x8">Полоса 65x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.592" id="Полоса 65x9x9">Полоса 65x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.103" id="Полоса 65x10x10">Полоса 65x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.613" id="Полоса 65x11x11">Полоса 65x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.123" id="Полоса 65x12x12">Полоса 65x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.144" id="Полоса 65x14x14">Полоса 65x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.654" id="Полоса 65x15x15">Полоса 65x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.164" id="Полоса 65x16x16">Полоса 65x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.185" id="Полоса 65x18x18">Полоса 65x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.205" id="Полоса 65x20x20">Полоса 65x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.226" id="Полоса 65x22x22">Полоса 65x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.756" id="Полоса 65x25x25">Полоса 65x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.287" id="Полоса 65x28x28">Полоса 65x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.308" id="Полоса 65x30x30">Полоса 65x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.328" id="Полоса 65x32x32">Полоса 65x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.369" id="Полоса 65x36x36">Полоса 65x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "20.410" id="Полоса 65x40x40">Полоса 65x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "22.961" id="Полоса 65x45x45">Полоса 65x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "25.513" id="Полоса 65x50x50">Полоса 65x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "28.574" id="Полоса 65x56x56">Полоса 65x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "30.615" id="Полоса 65x60x60">Полоса 65x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.748" id="Полоса 70x5x5">Полоса 70x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.297" id="Полоса 70x6x6">Полоса 70x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.847" id="Полоса 70x7x7">Полоса 70x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.396" id="Полоса 70x8x8">Полоса 70x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.946" id="Полоса 70x9x9">Полоса 70x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.495" id="Полоса 70x10x10">Полоса 70x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.045" id="Полоса 70x11x11">Полоса 70x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.594" id="Полоса 70x12x12">Полоса 70x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.693" id="Полоса 70x14x14">Полоса 70x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.243" id="Полоса 70x15x15">Полоса 70x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.792" id="Полоса 70x16x16">Полоса 70x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.891" id="Полоса 70x18x18">Полоса 70x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.990" id="Полоса 70x20x20">Полоса 70x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.089" id="Полоса 70x22x22">Полоса 70x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "13.738" id="Полоса 70x25x25">Полоса 70x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.386" id="Полоса 70x28x28">Полоса 70x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.485" id="Полоса 70x30x30">Полоса 70x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.584" id="Полоса 70x32x32">Полоса 70x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "19.233" id="Полоса 70x35x35">Полоса 70x35x35</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "19.782" id="Полоса 70x36x36">Полоса 70x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.980" id="Полоса 70x40x40">Полоса 70x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "24.728" id="Полоса 70x45x45">Полоса 70x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "27.475" id="Полоса 70x50x50">Полоса 70x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "30.772" id="Полоса 70x56x56">Полоса 70x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "32.970" id="Полоса 70x60x60">Полоса 70x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.360" id="Полоса 75x4x4">Полоса 75x4x4</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "2.944" id="Полоса 75x5x5">Полоса 75x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.533" id="Полоса 75x6x6">Полоса 75x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.121" id="Полоса 75x7x7">Полоса 75x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.710" id="Полоса 75x8x8">Полоса 75x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.299" id="Полоса 75x9x9">Полоса 75x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.888" id="Полоса 75x10x10">Полоса 75x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.476" id="Полоса 75x11x11">Полоса 75x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.065" id="Полоса 75x12x12">Полоса 75x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.243" id="Полоса 75x14x14">Полоса 75x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.831" id="Полоса 75x15x15">Полоса 75x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.420" id="Полоса 75x16x16">Полоса 75x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.598" id="Полоса 75x18x18">Полоса 75x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.775" id="Полоса 75x20x20">Полоса 75x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.953" id="Полоса 75x22x22">Полоса 75x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.719" id="Полоса 75x25x25">Полоса 75x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.485" id="Полоса 75x28x28">Полоса 75x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.663" id="Полоса 75x30x30">Полоса 75x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.840" id="Полоса 75x32x32">Полоса 75x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.195" id="Полоса 75x36x36">Полоса 75x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "23.550" id="Полоса 75x40x40">Полоса 75x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "26.494" id="Полоса 75x45x45">Полоса 75x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "29.438" id="Полоса 75x50x50">Полоса 75x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "32.970" id="Полоса 75x56x56">Полоса 75x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "35.325" id="Полоса 75x60x60">Полоса 75x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.140" id="Полоса 80x5x5">Полоса 80x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.768" id="Полоса 80x6x6">Полоса 80x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.396" id="Полоса 80x7x7">Полоса 80x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.024" id="Полоса 80x8x8">Полоса 80x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.652" id="Полоса 80x9x9">Полоса 80x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.280" id="Полоса 80x10x10">Полоса 80x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.908" id="Полоса 80x11x11">Полоса 80x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.536" id="Полоса 80x12x12">Полоса 80x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.792" id="Полоса 80x14x14">Полоса 80x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.420" id="Полоса 80x15x15">Полоса 80x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.048" id="Полоса 80x16x16">Полоса 80x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.304" id="Полоса 80x18x18">Полоса 80x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.560" id="Полоса 80x20x20">Полоса 80x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "13.816" id="Полоса 80x22x22">Полоса 80x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.700" id="Полоса 80x25x25">Полоса 80x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.584" id="Полоса 80x28x28">Полоса 80x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.840" id="Полоса 80x30x30">Полоса 80x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "20.096" id="Полоса 80x32x32">Полоса 80x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.980" id="Полоса 80x35x35">Полоса 80x35x35</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "22.608" id="Полоса 80x36x36">Полоса 80x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "25.120" id="Полоса 80x40x40">Полоса 80x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "28.260" id="Полоса 80x45x45">Полоса 80x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "31.400" id="Полоса 80x50x50">Полоса 80x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "35.168" id="Полоса 80x56x56">Полоса 80x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "37.680" id="Полоса 80x60x60">Полоса 80x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.004" id="Полоса 85x6x6">Полоса 85x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.671" id="Полоса 85x7x7">Полоса 85x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.338" id="Полоса 85x8x8">Полоса 85x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.005" id="Полоса 85x9x9">Полоса 85x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.673" id="Полоса 85x10x10">Полоса 85x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.340" id="Полоса 85x11x11">Полоса 85x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.007" id="Полоса 85x12x12">Полоса 85x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.342" id="Полоса 85x14x14">Полоса 85x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.676" id="Полоса 85x16x16">Полоса 85x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.011" id="Полоса 85x18x18">Полоса 85x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "13.345" id="Полоса 85x20x20">Полоса 85x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.680" id="Полоса 85x22x22">Полоса 85x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.681" id="Полоса 85x25x25">Полоса 85x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.683" id="Полоса 85x28x28">Полоса 85x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "20.018" id="Полоса 85x30x30">Полоса 85x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.352" id="Полоса 85x32x32">Полоса 85x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "24.021" id="Полоса 85x36x36">Полоса 85x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "26.690" id="Полоса 85x40x40">Полоса 85x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "30.026" id="Полоса 85x45x45">Полоса 85x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "33.363" id="Полоса 85x50x50">Полоса 85x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "37.366" id="Полоса 85x56x56">Полоса 85x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "40.035" id="Полоса 85x60x60">Полоса 85x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.533" id="Полоса 90x5x5">Полоса 90x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.239" id="Полоса 90x6x6">Полоса 90x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.946" id="Полоса 90x7x7">Полоса 90x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.652" id="Полоса 90x8x8">Полоса 90x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.359" id="Полоса 90x9x9">Полоса 90x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.065" id="Полоса 90x10x10">Полоса 90x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.772" id="Полоса 90x11x11">Полоса 90x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.478" id="Полоса 90x12x12">Полоса 90x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.891" id="Полоса 90x14x14">Полоса 90x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.598" id="Полоса 90x15x15">Полоса 90x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.304" id="Полоса 90x16x16">Полоса 90x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.717" id="Полоса 90x18x18">Полоса 90x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.130" id="Полоса 90x20x20">Полоса 90x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.543" id="Полоса 90x22x22">Полоса 90x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.663" id="Полоса 90x25x25">Полоса 90x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "19.782" id="Полоса 90x28x28">Полоса 90x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.195" id="Полоса 90x30x30">Полоса 90x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "22.608" id="Полоса 90x32x32">Полоса 90x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "24.728" id="Полоса 90x35x35">Полоса 90x35x35</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "25.434" id="Полоса 90x36x36">Полоса 90x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "28.260" id="Полоса 90x40x40">Полоса 90x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "31.793" id="Полоса 90x45x45">Полоса 90x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "35.325" id="Полоса 90x50x50">Полоса 90x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "39.564" id="Полоса 90x56x56">Полоса 90x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "42.390" id="Полоса 90x60x60">Полоса 90x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.475" id="Полоса 95x6x6">Полоса 95x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.220" id="Полоса 95x7x7">Полоса 95x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.966" id="Полоса 95x8x8">Полоса 95x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.712" id="Полоса 95x9x9">Полоса 95x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.458" id="Полоса 95x10x10">Полоса 95x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.203" id="Полоса 95x11x11">Полоса 95x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.949" id="Полоса 95x12x12">Полоса 95x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.440" id="Полоса 95x14x14">Полоса 95x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.932" id="Полоса 95x16x16">Полоса 95x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "13.424" id="Полоса 95x18x18">Полоса 95x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.915" id="Полоса 95x20x20">Полоса 95x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.407" id="Полоса 95x22x22">Полоса 95x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.644" id="Полоса 95x25x25">Полоса 95x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "3.925" id="Полоса 100x5x5">Полоса 100x5x5</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.710" id="Полоса 100x6x6">Полоса 100x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.495" id="Полоса 100x7x7">Полоса 100x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.280" id="Полоса 100x8x8">Полоса 100x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.065" id="Полоса 100x9x9">Полоса 100x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.850" id="Полоса 100x10x10">Полоса 100x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.635" id="Полоса 100x11x11">Полоса 100x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.420" id="Полоса 100x12x12">Полоса 100x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.990" id="Полоса 100x14x14">Полоса 100x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.775" id="Полоса 100x15x15">Полоса 100x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.560" id="Полоса 100x16x16">Полоса 100x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.130" id="Полоса 100x18x18">Полоса 100x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.700" id="Полоса 100x20x20">Полоса 100x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.270" id="Полоса 100x22x22">Полоса 100x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "19.625" id="Полоса 100x25x25">Полоса 100x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "23.550" id="Полоса 100x30x30">Полоса 100x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "27.475" id="Полоса 100x35x35">Полоса 100x35x35</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "31.400" id="Полоса 100x40x40">Полоса 100x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "39.250" id="Полоса 100x50x50">Полоса 100x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "47.100" id="Полоса 100x60x60">Полоса 100x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "4.946" id="Полоса 105x6x6">Полоса 105x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.770" id="Полоса 105x7x7">Полоса 105x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.594" id="Полоса 105x8x8">Полоса 105x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.418" id="Полоса 105x9x9">Полоса 105x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.134" id="Полоса 105x22x22">Полоса 105x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "20.606" id="Полоса 105x25x25">Полоса 105x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.181" id="Полоса 110x6x6">Полоса 110x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.045" id="Полоса 110x7x7">Полоса 110x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.908" id="Полоса 110x8x8">Полоса 110x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.772" id="Полоса 110x9x9">Полоса 110x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.360" id="Полоса 110x12x12">Полоса 110x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.090" id="Полоса 110x14x14">Полоса 110x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.997" id="Полоса 110x22x22">Полоса 110x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.588" id="Полоса 110x25x25">Полоса 110x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.652" id="Полоса 120x6x6">Полоса 120x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.594" id="Полоса 120x7x7">Полоса 120x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.536" id="Полоса 120x8x8">Полоса 120x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.420" id="Полоса 120x10x10">Полоса 120x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.304" id="Полоса 120x12x12">Полоса 120x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "13.190" id="Полоса 120x14x14">Полоса 120x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.130" id="Полоса 120x15x15">Полоса 120x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.840" id="Полоса 120x20x20">Полоса 120x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "20.724" id="Полоса 120x22x22">Полоса 120x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "23.550" id="Полоса 120x25x25">Полоса 120x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "28.260" id="Полоса 120x30x30">Полоса 120x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "33.000" id="Полоса 120x35x35">Полоса 120x35x35</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "37.680" id="Полоса 120x40x40">Полоса 120x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "47.100" id="Полоса 120x50x50">Полоса 120x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "5.888" id="Полоса 125x6x6">Полоса 125x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.869" id="Полоса 125x7x7">Полоса 125x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.850" id="Полоса 125x8x8">Полоса 125x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.588" id="Полоса 125x22x22">Полоса 125x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "24.531" id="Полоса 125x25x25">Полоса 125x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.123" id="Полоса 130x6x6">Полоса 130x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.144" id="Полоса 130x7x7">Полоса 130x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.164" id="Полоса 130x8x8">Полоса 130x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.185" id="Полоса 130x9x9">Полоса 130x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.205" id="Полоса 130x10x10">Полоса 130x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.246" id="Полоса 130x12x12">Полоса 130x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.287" id="Полоса 130x14x14">Полоса 130x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.308" id="Полоса 130x15x15">Полоса 130x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "20.410" id="Полоса 130x20x20">Полоса 130x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "22.451" id="Полоса 130x22x22">Полоса 130x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "25.513" id="Полоса 130x25x25">Полоса 130x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "30.615" id="Полоса 130x30x30">Полоса 130x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "40.820" id="Полоса 130x40x40">Полоса 130x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "51.025" id="Полоса 130x50x50">Полоса 130x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "6.594" id="Полоса 140x6x6">Полоса 140x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.693" id="Полоса 140x7x7">Полоса 140x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.792" id="Полоса 140x8x8">Полоса 140x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.990" id="Полоса 140x10x10">Полоса 140x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "13.188" id="Полоса 140x12x12">Полоса 140x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.386" id="Полоса 140x14x14">Полоса 140x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.485" id="Полоса 140x15x15">Полоса 140x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.584" id="Полоса 140x16x16">Полоса 140x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "19.782" id="Полоса 140x18x18">Полоса 140x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.980" id="Полоса 140x20x20">Полоса 140x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "24.178" id="Полоса 140x22x22">Полоса 140x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "27.475" id="Полоса 140x25x25">Полоса 140x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "32.970" id="Полоса 140x30x30">Полоса 140x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "43.960" id="Полоса 140x40x40">Полоса 140x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "54.950" id="Полоса 140x50x50">Полоса 140x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.065" id="Полоса 150x6x6">Полоса 150x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.243" id="Полоса 150x7x7">Полоса 150x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "9.420" id="Полоса 150x8x8">Полоса 150x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.598" id="Полоса 150x9x9">Полоса 150x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.775" id="Полоса 150x10x10">Полоса 150x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.953" id="Полоса 150x11x11">Полоса 150x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.130" id="Полоса 150x12x12">Полоса 150x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.485" id="Полоса 150x14x14">Полоса 150x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.663" id="Полоса 150x15x15">Полоса 150x15x15</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.840" id="Полоса 150x16x16">Полоса 150x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.195" id="Полоса 150x18x18">Полоса 150x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "23.550" id="Полоса 150x20x20">Полоса 150x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "25.905" id="Полоса 150x22x22">Полоса 150x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "29.438" id="Полоса 150x25x25">Полоса 150x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "32.970" id="Полоса 150x28x28">Полоса 150x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "35.325" id="Полоса 150x30x30">Полоса 150x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "37.680" id="Полоса 150x32x32">Полоса 150x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "41.213" id="Полоса 150x35x35">Полоса 150x35x35</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "42.390" id="Полоса 150x36x36">Полоса 150x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "47.100" id="Полоса 150x40x40">Полоса 150x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "52.988" id="Полоса 150x45x45">Полоса 150x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "58.875" id="Полоса 150x50x50">Полоса 150x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "65.940" id="Полоса 150x56x56">Полоса 150x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "70.650" id="Полоса 150x60x60">Полоса 150x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "94.200" id="Полоса 150x80x80">Полоса 150x80x80</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "7.536" id="Полоса 160x6x6">Полоса 160x6x6</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "8.792" id="Полоса 160x7x7">Полоса 160x7x7</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "10.048" id="Полоса 160x8x8">Полоса 160x8x8</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "11.304" id="Полоса 160x9x9">Полоса 160x9x9</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "12.560" id="Полоса 160x10x10">Полоса 160x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "13.816" id="Полоса 160x11x11">Полоса 160x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.072" id="Полоса 160x12x12">Полоса 160x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.584" id="Полоса 160x14x14">Полоса 160x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "20.096" id="Полоса 160x16x16">Полоса 160x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "22.608" id="Полоса 160x18x18">Полоса 160x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "25.120" id="Полоса 160x20x20">Полоса 160x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "27.632" id="Полоса 160x22x22">Полоса 160x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "31.400" id="Полоса 160x25x25">Полоса 160x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "35.168" id="Полоса 160x28x28">Полоса 160x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "37.680" id="Полоса 160x30x30">Полоса 160x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "40.192" id="Полоса 160x32x32">Полоса 160x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "45.216" id="Полоса 160x36x36">Полоса 160x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "50.240" id="Полоса 160x40x40">Полоса 160x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "56.520" id="Полоса 160x45x45">Полоса 160x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "62.800" id="Полоса 160x50x50">Полоса 160x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "70.336" id="Полоса 160x56x56">Полоса 160x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "75.360" id="Полоса 160x60x60">Полоса 160x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "14.680" id="Полоса 170x11x11">Полоса 170x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.014" id="Полоса 170x12x12">Полоса 170x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.683" id="Полоса 170x14x14">Полоса 170x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.352" id="Полоса 170x16x16">Полоса 170x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "24.021" id="Полоса 170x18x18">Полоса 170x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "26.690" id="Полоса 170x20x20">Полоса 170x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "29.359" id="Полоса 170x22x22">Полоса 170x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "33.363" id="Полоса 170x25x25">Полоса 170x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "37.366" id="Полоса 170x28x28">Полоса 170x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "40.035" id="Полоса 170x30x30">Полоса 170x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "42.704" id="Полоса 170x32x32">Полоса 170x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "48.042" id="Полоса 170x36x36">Полоса 170x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "53.380" id="Полоса 170x40x40">Полоса 170x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "60.053" id="Полоса 170x45x45">Полоса 170x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "66.725" id="Полоса 170x50x50">Полоса 170x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "74.732" id="Полоса 170x56x56">Полоса 170x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "80.070" id="Полоса 170x60x60">Полоса 170x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.543" id="Полоса 180x11x11">Полоса 180x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.956" id="Полоса 180x12x12">Полоса 180x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "19.782" id="Полоса 180x14x14">Полоса 180x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "22.608" id="Полоса 180x16x16">Полоса 180x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "25.434" id="Полоса 180x18x18">Полоса 180x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "28.260" id="Полоса 180x20x20">Полоса 180x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "31.086" id="Полоса 180x22x22">Полоса 180x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "35.325" id="Полоса 180x25x25">Полоса 180x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "39.564" id="Полоса 180x28x28">Полоса 180x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "42.390" id="Полоса 180x30x30">Полоса 180x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "45.216" id="Полоса 180x32x32">Полоса 180x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "50.868" id="Полоса 180x36x36">Полоса 180x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "56.520" id="Полоса 180x40x40">Полоса 180x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "63.585" id="Полоса 180x45x45">Полоса 180x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "70.650" id="Полоса 180x50x50">Полоса 180x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "79.128" id="Полоса 180x56x56">Полоса 180x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "84.780" id="Полоса 180x60x60">Полоса 180x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "16.407" id="Полоса 190x11x11">Полоса 190x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.898" id="Полоса 190x12x12">Полоса 190x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "20.881" id="Полоса 190x14x14">Полоса 190x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "23.864" id="Полоса 190x16x16">Полоса 190x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "26.847" id="Полоса 190x18x18">Полоса 190x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "29.830" id="Полоса 190x20x20">Полоса 190x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "32.813" id="Полоса 190x22x22">Полоса 190x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "37.288" id="Полоса 190x25x25">Полоса 190x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "41.762" id="Полоса 190x28x28">Полоса 190x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "44.745" id="Полоса 190x30x30">Полоса 190x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "47.728" id="Полоса 190x32x32">Полоса 190x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "53.694" id="Полоса 190x36x36">Полоса 190x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "59.660" id="Полоса 190x40x40">Полоса 190x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "67.118" id="Полоса 190x45x45">Полоса 190x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "74.575" id="Полоса 190x50x50">Полоса 190x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "83.524" id="Полоса 190x56x56">Полоса 190x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "89.490" id="Полоса 190x60x60">Полоса 190x60x60</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "15.700" id="Полоса 200x10x10">Полоса 200x10x10</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "17.270" id="Полоса 200x11x11">Полоса 200x11x11</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "18.840" id="Полоса 200x12x12">Полоса 200x12x12</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "21.980" id="Полоса 200x14x14">Полоса 200x14x14</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "25.120" id="Полоса 200x16x16">Полоса 200x16x16</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "28.260" id="Полоса 200x18x18">Полоса 200x18x18</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "31.400" id="Полоса 200x20x20">Полоса 200x20x20</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "34.540" id="Полоса 200x22x22">Полоса 200x22x22</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "39.250" id="Полоса 200x25x25">Полоса 200x25x25</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "43.960" id="Полоса 200x28x28">Полоса 200x28x28</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "47.100" id="Полоса 200x30x30">Полоса 200x30x30</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "50.240" id="Полоса 200x32x32">Полоса 200x32x32</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "56.520" id="Полоса 200x36x36">Полоса 200x36x36</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "62.800" id="Полоса 200x40x40">Полоса 200x40x40</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "70.650" id="Полоса 200x45x45">Полоса 200x45x45</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "78.500" id="Полоса 200x50x50">Полоса 200x50x50</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "87.920" id="Полоса 200x56x56">Полоса 200x56x56</a>').appendTo('#droppolosa');
$('<a class="dropdown-item" name = "94.200" id="Полоса 200x60x60">Полоса 200x60x60</a>').appendTo('#droppolosa');


 }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#polosaButton").text(raz)}
    var weightofmeter = this.name
    $("#weightofmeter").text(weightofmeter)
    var lengthone = $('#length').val();
    var weight = $("#weightofmeter").text();
    if (lengthone) {
    var result = Math.round(lengthone * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    var myfunc = function(){
    var length = $(this).val()

    var weight = $("#weightofmeter").text()
    if (length) {
    var result = Math.round(length * weight).toFixed(3) / 1000 + "  тонн"
    $("#result").text(result)
    }
    else {
    $("#result").text('ответ')
    }
    };
    $("#length")
        .keyup(myfunc)
        .change(myfunc)
    })


}




       })})