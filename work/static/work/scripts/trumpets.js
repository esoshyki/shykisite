$("document").ready(function() {
$('.dropdown-item').click(function(){
    var id = this.id

    if (id == '1'){
    $("#titleprofile").text("ВГП труба")
    $('<div class="dropdown" id="vgpdrop"></div>').insertAfter('#rootdrop');
    $('#ocinkdrop, #svarndrop, #bezshovdrop, #kvadratdrop').remove()
    if ($('button').is("#vgpButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="vgpButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ВГП труба</button>').appendTo("#vgpdrop");
    $('<div class="dropdown-menu" aria-labelledby="vgpButton" id="dropvgp"></div>').appendTo("#vgpdrop").css({"height" : "200px", "overflow-y" : "scroll"});
$('<a class="dropdown-item" name = "0.37" id="Ду6x1.8">Ду6x1.8</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "0.40" id="Ду6x2.0">Ду6x2.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "0.47" id="Ду6x2.5">Ду6x2.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "0.57" id="Ду8x2.0">Ду8x2.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "0.61" id="Ду8x2.2">Ду8x2.2</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "0.74" id="Ду8x2.8">Ду8x2.8</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "0.74" id="Ду10x2.0">Ду10x2.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "0.80" id="Ду10x2.2">Ду10x2.2</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "0.98" id="Ду10x2.8">Ду10x2.8</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "1.10" id="Ду15x2.35">Ду15x2.35</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "1.16" id="Ду15x2.5">Ду15x2.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "1.28" id="Ду15x2.8">Ду15x2.8</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "1.43" id="Ду15x3.2">Ду15x3.2</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "1.42" id="Ду20x2.35">Ду20x2.35</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "1.50" id="Ду20x2.5">Ду20x2.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "1.66" id="Ду20x2.8">Ду20x2.8</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "1.86" id="Ду20x3.2">Ду20x3.2</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "2.12" id="Ду25x2.8">Ду25x2.8</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "2.39" id="Ду25x3.2">Ду25x3.2</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "2.91" id="Ду25x4.0">Ду25x4.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "2.73" id="Ду32x2.8">Ду32x2.8</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "3.09" id="Ду32x3.2">Ду32x3.2</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "3.78" id="Ду32x4.0">Ду32x4.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "3.33" id="Ду40x3.0">Ду40x3.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "3.84" id="Ду40x3.5">Ду40x3.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "4.34" id="Ду40x4.0">Ду40x4.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "4.22" id="Ду50x3.0">Ду50x3.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "4.88" id="Ду50x3.5">Ду50x3.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "6.16" id="Ду50x4.5">Ду50x4.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "5.71" id="Ду65x3.2">Ду65x3.2</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "7.05" id="Ду65x4.0">Ду65x4.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "7.88" id="Ду65x4.5">Ду65x4.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "7.34" id="Ду80x3.5">Ду80x3.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "8.34" id="Ду80x4.0">Ду80x4.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "9.32" id="Ду80x4.5">Ду80x4.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "8.44" id="Ду90x3.5">Ду90x3.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "9.60" id="Ду90x4.0">Ду90x4.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "10.74" id="Ду90x4.5">Ду90x4.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "10.85" id="Ду100x4.0">Ду100x4.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "12.15" id="Ду100x4.5">Ду100x4.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "13.44" id="Ду100x5.0">Ду100x5.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "13.42" id="Ду125x4.0">Ду125x4.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "15.04" id="Ду125x4.5">Ду125x4.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "18.24" id="Ду125x5.5">Ду125x5.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "15.88" id="Ду150x4.0">Ду150x4.0</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "17.81" id="Ду150x4.5">Ду150x4.5</a>').appendTo('#dropvgp');
$('<a class="dropdown-item" name = "21.63" id="Ду150x5.5">Ду150x5.5</a>').appendTo('#dropvgp'); }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#vgpButton").text(raz)}
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
    if (id == '2'){
    $("#titleprofile").text("Электросварная труба")
    $('<div class="dropdown" id="svarndrop"></div>').insertAfter('#rootdrop');
    $('#vgpdrop, #ocinkdrop, #bezshovdrop, #kvadratdrop').remove()
    if ($('button').is("#svarnButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="svarnButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Э/сварная труба</button>').appendTo("#svarndrop");
    $('<div class="dropdown-menu" aria-labelledby="svarnButton" id="dropsvarn"></div>').appendTo("#svarndrop").css({"height" : "200px", "overflow-y" : "scroll"});
$('<a class="dropdown-item" name = "0.222" id="10х1">10х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.26" id="10х1.2">10х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.271" id="12х1">12х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.32" id="12х1.2">12х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.366" id="12х1.4">12х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.499" id="12х1.5">12х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.41" id="12х1.6">12х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.321" id="14х1">14х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.379" id="14х1.2">14х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.435" id="14х1.4">14х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.573" id="14х1.5">14х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.489" id="14х1.6">14х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.37" id="16х1">16х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.438" id="16х1.2">16х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.504" id="16х1.4">16х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.647" id="16х1.5">16х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.568" id="16х1.6">16х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.419" id="18х1">18х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.497" id="18х1.2">18х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.573" id="18х1.4">18х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.721" id="18х1.5">18х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.647" id="18х1.6">18х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.719" id="18х1.8">18х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.469" id="20х1">20х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.556" id="20х1.2">20х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.642" id="20х1.4">20х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.795" id="20х1.5">20х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.726" id="20х1.6">20х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.808" id="20х1.8">20х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.888" id="20х2">20х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.518" id="22х1">22х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.616" id="22х1.2">22х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.711" id="22х1.4">22х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.869" id="22х1.5">22х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.805" id="22х1.6">22х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.897" id="22х1.8">22х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.986" id="22х2">22х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.592" id="25х1">25х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.704" id="25х1.2">25х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.815" id="25х1.4">25х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.98" id="25х1.5">25х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.923" id="25х1.6">25х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.03" id="25х1.8">25х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.134" id="25х2">25х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.237" id="25х2.2">25х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.387" id="25х2.5">25х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.666" id="28х1">28х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.793" id="28х1.2">28х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.918" id="28х1.4">28х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.091" id="28х1.5">28х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.042" id="28х1.6">28х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.163" id="28х1.8">28х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.282" id="28х2">28х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.4" id="28х2.2">28х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.572" id="28х2.5">28х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.715" id="30х1">30х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.852" id="30х1.2">30х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.987" id="30х1.4">30х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.165" id="30х1.5">30х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.121" id="30х1.6">30х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.252" id="30х1.8">30х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.381" id="30х2">30х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.508" id="30х2.2">30х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.695" id="30х2.5">30х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.765" id="32х1">32х1</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "0.911" id="32х1.2">32х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.056" id="32х1.4">32х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.239" id="32х1.5">32х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.2" id="32х1.6">32х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.341" id="32х1.8">32х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.48" id="32х2">32х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.617" id="32х2.2">32х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.819" id="32х2.5">32х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.016" id="32х2.8">32х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.146" id="32х3">32х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1" id="35х1.2">35х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.16" id="35х1.4">35х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.35" id="35х1.5">35х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.318" id="35х1.6">35х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.474" id="35х1.8">35х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.628" id="35х2">35х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.78" id="35х2.2">35х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.004" id="35х2.5">35х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.223" id="35х2.8">35х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.368" id="35х3">35х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.03" id="36х1.2">36х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.195" id="36х1.4">36х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.387" id="36х1.5">36х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.357" id="36х1.6">36х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.518" id="36х1.8">36х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.677" id="36х2">36х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.834" id="36х2.2">36х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.065" id="36х2.5">36х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.293" id="36х2.8">36х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.441" id="36х3">36х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.089" id="38х1.2">38х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.264" id="38х1.4">38х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.461" id="38х1.5">38х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.436" id="38х1.6">38х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.607" id="38х1.8">38х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.776" id="38х2">38х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.942" id="38х2.2">38х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.189" id="38х2.5">38х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.431" id="38х2.8">38х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.589" id="38х3">38х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.148" id="40х1.2">40х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.333" id="40х1.4">40х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.535" id="40х1.5">40х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.515" id="40х1.6">40х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.696" id="40х1.8">40х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.874" id="40х2">40х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.051" id="40х2.2">40х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.312" id="40х2.5">40х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.569" id="40х2.8">40х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.737" id="40х3">40х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.207" id="42х1.2">42х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.402" id="42х1.4">42х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.609" id="42х1.5">42х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.594" id="42х1.6">42х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.785" id="42х1.8">42х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.973" id="42х2">42х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.159" id="42х2.2">42х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.435" id="42х2.5">42х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.707" id="42х2.8">42х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.885" id="42х3">42х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.296" id="45х1.2">45х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.505" id="45х1.4">45х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.72" id="45х1.5">45х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.712" id="45х1.6">45х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.918" id="45х1.8">45х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.121" id="45х2">45х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.322" id="45х2.2">45х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.62" id="45х2.5">45х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.914" id="45х2.8">45х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.107" id="45х3">45х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.385" id="48х1.2">48х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.609" id="48х1.4">48х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.831" id="48х1.5">48х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.831" id="48х1.6">48х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.051" id="48х1.8">48х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.269" id="48х2">48х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.485" id="48х2.2">48х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.805" id="48х2.5">48х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.121" id="48х2.8">48х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.329" id="48х3">48х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.712" id="51х1.4">51х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.942" id="51х1.5">51х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.949" id="51х1.6">51х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.184" id="51х1.8">51х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.417" id="51х2">51х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.648" id="51х2.2">51х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.99" id="51х2.5">51х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.328" id="51х2.8">51х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.551" id="51х3">51х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.772" id="51х3.2">51х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.1" id="51х3.5">51х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "1.92" id="57х1.4">57х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.164" id="57х1.5">57х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.186" id="57х1.6">57х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.45" id="57х1.8">57х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.713" id="57х2">57х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.973" id="57х2.2">57х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.36" id="57х2.5">57х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.743" id="57х2.8">57х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.995" id="57х3">57х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.246" id="57х3.2">57х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.618" id="57х3.5">57х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.023" id="60х1.4">60х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.275" id="60х1.5">60х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.304" id="60х1.6">60х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.584" id="60х1.8">60х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.861" id="60х2">60х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.136" id="60х2.2">60х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.545" id="60х2.5">60х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.95" id="60х2.8">60х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.217" id="60х3">60х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.482" id="60х3.2">60х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.877" id="60х3.5">60х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.267" id="60х3.8">60х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.036" id="70х1.2">70х1.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.368" id="70х1.4">70х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.645" id="70х1.5">70х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.699" id="70х1.6">70х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.027" id="70х1.8">70х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.354" id="70х2">70х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.679" id="70х2.2">70х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.162" id="70х2.5">70х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.64" id="70х2.8">70х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.957" id="70х3">70х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.272" id="70х3.2">70х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.74" id="70х3.5">70х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.204" id="70х3.8">70х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.511" id="70х4">70х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.472" id="73х1.4">73х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.756" id="73х1.5">73х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.817" id="73х1.6">73х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.161" id="73х1.8">73х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.502" id="73х2">73х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.841" id="73х2.2">73х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.347" id="73х2.5">73х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.847" id="73х2.8">73х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.179" id="73х3">73х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.508" id="73х3.2">73х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.999" id="73х3.5">73х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.485" id="73х3.8">73х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.807" id="73х4">73х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.576" id="76х1.4">76х1.4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.867" id="76х1.5">76х1.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "2.936" id="76х1.6">76х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.294" id="76х1.8">76х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.65" id="76х2">76х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.004" id="76х2.2">76х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.532" id="76х2.5">76х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.055" id="76х2.8">76х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.401" id="76х3">76х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.745" id="76х3.2">76х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.258" id="76х3.5">76х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.766" id="76х3.8">76х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.103" id="76х4">76х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.935" id="76х4.5">76х4.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.755" id="76х5">76х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.562" id="76х5.5">76х5.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.919" id="83х3">83х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.298" id="83х3.2">83х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.862" id="83х3.5">83х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.422" id="83х3.8">83х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.793" id="83х4">83х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.712" id="83х4.5">83х4.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.618" id="83х5">83х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.512" id="83х5.5">83х5.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.449" id="89х1.6">89х1.6</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "3.871" id="89х1.8">89х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.291" id="89х2">89х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.709" id="89х2.2">89х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.333" id="89х2.5">89х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.952" id="89х2.8">89х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.363" id="89х3">89х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.771" id="89х3.2">89х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.38" id="89х3.5">89х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.984" id="89х3.8">89х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.385" id="89х4">89х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.378" id="89х4.5">89х4.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.358" id="89х5">89х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "11.326" id="89х5.5">89х5.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.587" id="95х2">95х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.703" id="95х2.5">95х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.245" id="95х3.2">95х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "11.098" id="95х5">95х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.448" id="102х1.8">102х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.932" id="102х2">102х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.415" id="102х2.2">102х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.135" id="102х2.5">102х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.85" id="102х2.8">102х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.324" id="102х3">102х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.797" id="102х3.2">102х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.502" id="102х3.5">102х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.203" id="102х3.8">102х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.667" id="102х4">102х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.82" id="102х4.5">102х4.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "11.961" id="102х5">102х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "13.089" id="102х5.5">102х5.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.714" id="108х1.8">108х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.228" id="108х2">108х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.504" id="108х2.5">108х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.264" id="108х2.8">108х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.768" id="108х3">108х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.27" id="108х3.2">108х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.02" id="108х3.5">108х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.765" id="108х3.8">108х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.259" id="108х4">108х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "11.486" id="108х4.5">108х4.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "12.701" id="108х5">108х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "13.903" id="108х5.5">108х5.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "4.981" id="114х1.8">114х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.524" id="114х2">114х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.066" id="114х2.2">114х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.874" id="114х2.5">114х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.679" id="114х2.8">114х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.212" id="114х3">114х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.744" id="114х3.2">114х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.538" id="114х3.5">114х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.327" id="114х3.8">114х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.851" id="114х4">114х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "12.152" id="114х4.5">114х4.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "13.441" id="114х5">114х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "14.717" id="114х5.5">114х5.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.558" id="127х1.8">127х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.165" id="127х2">127х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.771" id="127х2.2">127х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.676" id="127х2.5">127х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.576" id="127х2.8">127х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.174" id="127х3">127х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.77" id="127х3.2">127х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.66" id="127х3.5">127х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "11.546" id="127х3.8">127х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "12.133" id="127х4">127х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "13.595" id="127х4.5">127х4.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "15.044" id="127х5">127х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "16.48" id="127х5.5">127х5.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "5.824" id="133х1.8">133х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.461" id="133х2">133х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.097" id="133х2.2">133х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.046" id="133х2.5">133х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.991" id="133х2.8">133х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.618" id="133х3">133х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.243" id="133х3.2">133х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "11.178" id="133х3.5">133х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "12.108" id="133х3.8">133х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "12.725" id="133х4">133х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "14.261" id="133х4.5">133х4.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "15.783" id="133х5">133х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "17.294" id="133х5.5">133х5.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.135" id="140х1.8">140х1.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "6.807" id="140х2">140х2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "7.476" id="140х2.2">140х2.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "8.477" id="140х2.5">140х2.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "9.474" id="140х2.8">140х2.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.136" id="140х3">140х3</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "10.796" id="140х3.2">140х3.2</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "11.782" id="140х3.5">140х3.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "12.764" id="140х3.8">140х3.8</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "13.416" id="140х4">140х4</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "15.037" id="140х4.5">140х4.5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "16.647" id="140х5">140х5</a>').appendTo('#dropsvarn');
$('<a class="dropdown-item" name = "18.243" id="140х5.5">140х5.5</a>').appendTo('#dropsvarn'); }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#svarnButton").text(raz)}
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
    if (id == '3'){
    $("#titleprofile").text("Оцинкованная труба")
    $('<div class="dropdown" id="ocinkdrop"></div>').insertAfter('#rootdrop');
    $('#vgpdrop, #svarndrop, #bezshovdrop, #kvadratdrop').remove()
    if ($('button').is("#ocinkButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="ocinkButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Оцинкованная труба</button>').appendTo("#ocinkdrop");
    $('<div class="dropdown-menu" aria-labelledby="ocinkButton" id="dropocink"></div>').appendTo("#ocinkdrop").css({"height" : "200px", "overflow-y" : "scroll"});
$('<a class="dropdown-item" name = "0.37" id="6x1.8">6x1.8</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "0.4" id="6x2">6x2</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "0.47" id="6x2.5">6x2.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "0.57" id="8x2">8x2</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "0.61" id="8x2.2">8x2.2</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "0.74" id="8x2.8">8x2.8</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "0.74" id="10x2">10x2</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "0.98" id="10x2.8">10x2.8</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "0.98" id="10x2.8">10x2.8</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "1.16" id="15x2.5">15x2.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "1.28" id="15x2.8">15x2.8</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "1.43" id="15x3.2">15x3.2</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "1.5" id="20x2.5">20x2.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "1.66" id="20x2.8">20x2.8</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "1.86" id="20x3.2">20x3.2</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "2.12" id="25x2.8">25x2.8</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "2.39" id="25x3.2">25x3.2</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "2.91" id="25x4">25x4</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "2.73" id="32x2.8">32x2.8</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "3.09" id="32x3.2">32x3.2</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "3.78" id="32x4">32x4</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "3.33" id="40x3">40x3</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "3.84" id="40x3.5">40x3.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "4.34" id="40x4">40x4</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "4.22" id="50x3">50x3</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "4.88" id="50x3.5">50x3.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "6.16" id="50x4.5">50x4.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "5.71" id="65x3.2">65x3.2</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "7.05" id="65x4">65x4</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "7.88" id="65x4.5">65x4.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "7.34" id="80x3.5">80x3.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "8.34" id="80x4">80x4</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "9.32" id="80x4.5">80x4.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "8.44" id="90x3.5">90x3.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "9.6" id="90x4">90x4</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "10.74" id="90x4.5">90x4.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "10.85" id="100x4">100x4</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "12.15" id="100x4.5">100x4.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "13.44" id="100x5">100x5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "13.42" id="125x4">125x4</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "15.04" id="125x4.5">125x4.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "18.24" id="125x5.5">125x5.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "15.88" id="150x4">150x4</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "17.81" id="150x4.5">150x4.5</a>').appendTo('#dropocink');
$('<a class="dropdown-item" name = "21.63" id="150x5.5">150x5.5</a>').appendTo('#dropocink'); }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#ocinkButton").text(raz)}
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
    if (id == '4'){
    $("#titleprofile").text("Бесшовная труба")
    $('<div class="dropdown" id="bezshovdrop"></div>').insertAfter('#rootdrop');
    $('#vgpdrop, #svarndrop, #ocinkdrop, #kvadratdrop').remove()
    if ($('button').is("#bezshovButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="bezshovButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Бесшовная труба</button>').appendTo("#bezshovdrop");
    $('<div class="dropdown-menu" aria-labelledby="bezshovButton" id="dropbezshov"></div>').appendTo("#bezshovdrop").css({"height" : "200px", "overflow-y" : "scroll"});
$('<a class="dropdown-item" name = "0.222" id="10х1">10х1</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.314" id="10х1.5">10х1.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.395" id="10х2">10х2</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.271" id="12х1">12х1</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.388" id="12х1.5">12х1.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.493" id="12х2">12х2</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.666" id="12х3">12х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.462" id="14х1.5">14х1.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.592" id="14х2">14х2</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.814" id="14х3">14х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.536" id="16х1.5">16х1.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.691" id="16х2">16х2</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.962" id="16х3">16х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.184" id="16х4">16х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.789" id="18х2">18х2</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.11" id="18х3">18х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.381" id="18х4">18х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.469" id="20х1">20х1</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.684" id="20х1.5">20х1.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.888" id="20х2">20х2</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.258" id="20х3">20х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.578" id="20х4">20х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.85" id="20х5">20х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.758" id="22х1.5">22х1.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "0.986" id="22х2">22х2</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.406" id="22х3">22х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.776" id="22х4">22х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.096" id="22х5">22х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.134" id="25х2">25х2</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.628" id="25х3">25х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.072" id="25х4">25х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.466" id="25х5">25х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.282" id="28х2">28х2</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "1.85" id="28х3">28х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.368" id="28х4">28х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.836" id="28х5">28х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.565" id="30х4">30х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "3.083" id="30х5">30х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "3.551" id="30х6">30х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.146" id="32х3">32х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.762" id="32х4">32х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "3.847" id="32х6">32х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.294" id="34х3">34х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "3.576" id="34х5">34х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "4.143" id="34х6">34х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.589" id="38х3">38х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.98" id="38х3.5">38х3.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "3.35" id="38х4">38х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "3.551" id="40х4">40х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.885" id="42х3">42х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "4.562" id="42х5">42х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "5.327" id="42х6">42х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "6.708" id="42х8">42х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "3.107" id="45х3">45х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "3.58" id="45х3.5">45х3.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "4.04" id="45х4">45х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "4.93" id="45х5">45х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "5.771" id="45х6">45х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "3.841" id="48х3.5">48х3.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "5.302" id="48х5">48х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "6.215" id="48х6">48х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "2.990" id="51х2.5">51х2.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "4.1" id="51х3.5">51х3.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "4.636" id="51х4">51х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "4.62" id="57х3.5">57х3.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "5.23" id="57х4">57х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "6.41" id="57х5">57х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "7.55" id="57х6">57х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "4.217" id="60х3">60х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "5.524" id="60х4">60х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "6.51" id="70х4">70х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "8.02" id="70х5">70х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "9.47" id="70х6">70х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "6.81" id="73х4">73х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "8.39" id="73х5">73х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "5.401" id="76х3">76х3</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "6.26" id="76х3.5">76х3.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "7.1" id="76х4">76х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "8.76" id="76х5">76х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "10.36" id="76х6">76х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "13.42" id="76х8">76х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "7.793" id="83х4">83х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "11.394" id="83х6">83х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "7.38" id="89х3.5">89х3.5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "8.39" id="89х4">89х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "10.36" id="89х5">89х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "12.28" id="89х6">89х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "15.98" id="89х8">89х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "9.67" id="102х4">102х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "11.96" id="102х5">102х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "14.21" id="102х6">102х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "18.55" id="102х8">102х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "10.26" id="108х4">108х4</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "12.7" id="108х5">108х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "15.09" id="108х6">108х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "19.73" id="108х8">108х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "24.17" id="108х10">108х10</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "13.44" id="114х5">114х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "15.98" id="114х6">114х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "20.91" id="114х8">114х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "15.04" id="127х5">127х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "17.9" id="127х6">127х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "23.48" id="127х8">127х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "15.78" id="133х5">133х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "18.79" id="133х6">133х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "24.66" id="133х8">133х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "30.33" id="133х10">133х10</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "18.99" id="159х5">159х5</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "22.64" id="159х6">159х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "29.79" id="159х8">159х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "36.75" id="159х10">159х10</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "23.97" id="168х6">168х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "27.79" id="168х7">168х7</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "31.57" id="168х8">168х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "31.52" id="219х6">219х6</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "36.6" id="219х7">219х7</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "41.63" id="219х8">219х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "51.54" id="219х10">219х10</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "45.92" id="273х7">273х7</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "52.28" id="273х8">273х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "64.86" id="273х10">273х10</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "62.54" id="325х8">325х8</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "77.68" id="325х10">325х10</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "81.68" id="377х9">377х9</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "92.56" id="426х9">426х9</a>').appendTo('#dropbezshov');
$('<a class="dropdown-item" name = "102.59" id="426х10">426х10</a>').appendTo('#dropbezshov'); }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#bezshovButton").text(raz)}
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
    if (id == '5'){
    $("#titleprofile").text("Квадратная труба")
    $('<div class="dropdown" id="kvadratdrop"></div>').insertAfter('#rootdrop');
    $('#vgpdrop, #svarndrop, #ocinkdrop, #bezshovdrop').remove()
    if ($('button').is("#kvadratButton")){}else {
    $('<button class="btn btn-secondary dropdown-toggle" type="button" id="kvadratButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Квадратная труба</button>').appendTo("#kvadratdrop");
    $('<div class="dropdown-menu" aria-labelledby="kvadratButton" id="dropkvadrat"></div>').appendTo("#kvadratdrop").css({"height" : "200px", "overflow-y" : "scroll"});
$('<a class="dropdown-item" name = "0.22" id="10х10х0.7">10х10х0.7</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.24" id="10х10х0.8">10х10х0.8</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.29" id="10х10х1">10х10х1</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.34" id="10х10х1.2">10х10х1.2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.39" id="10х10х1.5">10х10х1.5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.34" id="15х15х0.7">15х15х0.7</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.38" id="15х15х0.8">15х15х0.8</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.47" id="15х15х1">15х15х1</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.55" id="15х15х1.2">15х15х1.2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.67" id="15х15х1.5">15х15х1.5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.46" id="20х20х0.7">20х20х0.7</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.51" id="20х20х0.8">20х20х0.8</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.63" id="20х20х1">20х20х1</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.73" id="20х20х1.2">20х20х1.2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.91" id="20х20х1.5">20х20х1.5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "1.13" id="20х20х2">20х20х2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.81" id="25х25х1">25х25х1</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.93" id="25х25х1.2">25х25х1.2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "1.15" id="25х25х1.5">25х25х1.5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "1.52" id="25х25х2">25х25х2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "0.98" id="30х30х1">30х30х1</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "1.12" id="30х30х1.2">30х30х1.2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "1.39" id="30х30х1.5">30х30х1.5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "1.84" id="30х30х2">30х30х2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "1.87" id="40х40х1.5">40х40х1.5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "2.48" id="40х40х2">40х40х2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "3.09" id="50х50х2">50х50х2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "4.53" id="50х50х3">50х50х3</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "3.71" id="60х60х2">60х60х2</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "5.25" id="60х60х3">60х60х3</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "6.82" id="60х60х4">60х60х4</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "7.2" id="80х80х3">80х80х3</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "9.6" id="80х80х4">80х80х4</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "11.8" id="80х80х5">80х80х5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "12" id="100х100х4">100х100х4</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "14.8" id="100х100х5">100х100х5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "17.7" id="100х100х6">100х100х6</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "14.5" id="120х120х4">120х120х4</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "18" id="120х120х5">120х120х5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "21.5" id="120х120х6">120х120х6</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "21.1" id="140х140х5">140х140х5</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "25.2" id="140х140х6">140х140х6</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "29.2" id="140х140х7">140х140х7</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "30.77" id="150х150х7">150х150х7</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "34.81" id="150х150х8">150х150х8</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "28.9" id="160х160х6">160х160х6</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "33.6" id="160х160х7">160х160х7</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "38.2" id="160х160х8">160х160х8</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "32.5" id="180х180х6">180х180х6</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "43" id="180х180х8">180х180х8</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "35.8" id="200х200х6">200х200х6</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "46.9" id="200х200х8">200х200х8</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "57.6" id="200х200х10">200х200х10</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "67" id="200х200х12">200х200х12</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "73.3" id="250х250х10">250х250х10</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "86.8" id="250х250х12">250х250х12</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "89" id="300х300х10">300х300х10</a>').appendTo('#dropkvadrat');
$('<a class="dropdown-item" name = "106" id="300х300х12">300х300х12</a>').appendTo('#dropkvadrat');  }
    $('a, .dropdown-item').click(function(){
    var raz = this.id
    if (raz != id) {
    $("#kvadratButton").text(raz)}
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