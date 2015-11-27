'use strict';

document.addEventListener('DOMContentLoaded', function(event) {
    
	document.getElementById("Score").style.visibility='hidden';
	document.getElementById("Time").style.visibility='hidden';
	document.getElementById("mytable").style.visibility='hidden';
	document.getElementById("Reset").style.visibility='hidden';
	document.getElementById('Start').addEventListener('click', function(event) {
		var findDifferent = new FindDifferent();
		
    	findDifferent.init();
    });
    
})