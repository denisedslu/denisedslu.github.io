/* this is a JavaScript doc */


/////////***BEGIN DPS GALLERY DISPLAY****////////

/////////////***JAVASCRIPT VARIABLES***///////////
var full = document.getElementById("full");
var thumb1 = document.getElementById("thumb1");
var thumb2 = document.getElementById("thumb2");
var thumb3 = document.getElementById("thumb3");
var thumb4 = document.getElementById("thumb4");
var thumb5 = document.getElementById("thumb5");
var thumb6 = document.getElementById("thumb6");

////////***VARIABLES CONTAINING JQUERY OBJECTS***/////

var $thumbs = $(".thumb");

//////////***LISTENERS***/////////////

thumb1.addEventListener("click",showPhoto1);
thumb2.addEventListener("click",showPhoto2);
thumb3.addEventListener("click",showPhoto3);
thumb4.addEventListener("click",showPhoto4);
thumb5.addEventListener("click",showPhoto5);
thumb6.addEventListener("click",showPhoto6);

$thumbs.hover(fadeOut,fadeIn);

//////////***HANDLERS AND FUNCTIONS***///////// 

function fadeOut(){
	$(this).fadeTo("fast",0.5);
}

function fadeIn(){
	$(this).fadeTo("fast",1);

}

function showPhoto1(){
	full.setAttribute("src","images/dps1.png");
	}
	
function showPhoto2(){
	full.setAttribute("src","images/dps2.png");
	}

function showPhoto3(){
	full.setAttribute("src","images/dps3.png");
	}
	
function showPhoto4(){
	full.setAttribute("src","images/dps4.png");
	}

function showPhoto5(){
	full.setAttribute("src","images/dps5.png");
	}

function showPhoto6(){
	full.setAttribute("src","images/dps6.png");
	}
