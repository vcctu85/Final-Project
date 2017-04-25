$(document).ready(function(){
	
	// Question 4
	// IMPLEMENT "SHOW MODAL" WHEN "CLICK ON LOGIN BUTTON FROM MAIN PAGE" HERE
	$('#foo').on('show', function() {
      document.getElementById("modal-header").addEventListener("click", displayDate);
	});
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE
	$('#foo').on('hide', function() {
      document.getElementById("button-1").addEventListener("click", displayDate);
	});
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
	$('#foo').on('hide', function() {
      document.getElementById("button-2").addEventListener("click", displayDate);
	});
	
	// Question 5
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$('#foo').on('hide', function() {
      document.getElementById("modal-overlay").addEventListener("click", displayDate);
	});
});