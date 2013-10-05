$(function () {
	
$(".slide ul").cycle({
	fx: 'fade', 
	prev: '#seta_ant',
	next: '#seta_prox', 
	speed: 1000,
    //pager: '#pager',
})
$('.slide ul').cycle('pause'); 

})

  $(function() {
    $( "#abas" ).tabs();
  });

$(document).ready(function(){
           $("#piloto")
            .click(function(){
                $("#apresentacao").toggle();
            });
})