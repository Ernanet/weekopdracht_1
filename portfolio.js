/*----------------------dropdown menu script-------------------------------*/
$(function() {
    $("#item").click(function() {
        $("#submenu").slideToggle(400);
    });
}); 

/*----------------------vergroot tekst + - verklein body tekst script-----------------------------*/
function verGroot() {
		document.getElementById("tekst").style.fontSize= "20px";
	}
	
	function verKlein() {
		document.getElementById("tekst").style.fontSize= "16px";
	}



/*----------------------contact formulier script-----------------------------*/

function showContact() {
    document.getElementById("contactMe").style.display= "block";
	
}

/*------------------------bericht verzonden boodschap script---------------------*/

function thankYou() {
    document.getElementById("submit").addEventListener("submit", thankYou);
	
}

function thankYou() {
    alert("Thanks for your message.\n I'll get back to you shortly!");
	return false
}