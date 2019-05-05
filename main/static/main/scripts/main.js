$('document').ready(function(){
$('#entertosite').click(function() {
("<div>{% include 'login.html' %}</div>").appendTo('#loginhtml')
})
});

$(document).ready(function() {
    var scrollTop = $(window).scrollTop();
   $('.resume-section').click( function(e) {
       console.log(scrollTop)
   })
})