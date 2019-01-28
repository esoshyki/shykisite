$('document').ready(function(){
$('#login').click(function(){
if($('tr').is($('#create_login'))) {}
else {
$('<tr id="create_login"><td><input id="inputlogin" placeholder="login"></td></tr> style="margin: 2px"').insertAfter($('#regg'));
$('<td><input type="password" id="inputpassword" placeholder="password"></input></td>').appendTo($('#create_login'));
$('<td><button id="buttonlogin">OK</button></td>').appendTo($('#create_login'))
$('#buttonlogin').click(function() {
if ($('#inputlogin').val() && ($('#inputpassword').val()))
{
var currentuser = $('#inputlogin').text();
var password = $('#inputpassword').text();
    $.ajax({
    type: "GET",

    url: "/main/in",

    data: { "currentuser" : currentuser},

    dataType: "text",

    catch: false,

    success: function(data){
        alert(data)}
    })
}
else {
alert('Заполните все поля')}
})

}
})

})


