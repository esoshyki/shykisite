$('document').ready(function(){
$('#entertosite').click(function() {
("<div>{% include 'login.html' %}</div>").appendTo('#loginhtml')
})
})