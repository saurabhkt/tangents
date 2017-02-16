$(document).ready(function(){
	console.log("T A N G E N S T I C L E S");

	$('#enterSite').show();
	$('#mainSite').hide();
	
	// $('#enterSite').hide();
	// $('#mainSite').show();

	$('#enterSiteBtn').on('click', function() {
		$('#enterSite').hide();
		$('#mainSite').show();
	});

});