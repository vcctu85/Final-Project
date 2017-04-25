$(document).ready(function(){
	
	
	$('#here1').on('show', function() {
      document.getElementById("#here1").addEventListener("click", displayDate);
	});
	
	$('#here2').on('hide', function() {
      document.getElementById("#here2").addEventListener("click", displayDate);
	});
	
	$("#here3").click(function(){
    	$( "#here3" ).slideUp( "slow", function() {
    // Animation complete.
  		});
	});
	
	$("#here4").click(function(){
    	$( "#here4" ).slideUp( "slow", function() {
    // Animation complete.
  		});
	});

	$("#here5").click(function(){
    	$("#here5").fadeOut();
	});

	$("#here6").click(function(){
  	$("#here6").fadeOut();
	});
});