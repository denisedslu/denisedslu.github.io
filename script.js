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




//////////////// BEGIN NBN CREWNECK GALLERY //////////////




/////////////***JAVASCRIPT VARIABLES***///////////
var NBNfull = document.getElementById("NBNfull");
var NBNthumb1 = document.getElementById("NBNthumb1");
var NBNthumb2 = document.getElementById("NBNthumb2");

//////////***LISTENERS***/////////////

NBNthumb1.addEventListener("click",showNBNPhoto1);
NBNthumb2.addEventListener("click",showNBNPhoto2);

//////////***HANDLERS AND FUNCTIONS***///////// 
function showNBNPhoto1(){
	NBNfull.setAttribute("src","images/NBNcrewneck_1.png");
	}
	
function showNBNPhoto2(){
	NBNfull.setAttribute("src","images/NBNcrewneck_2.jpg");
	}




//////////////// BEGIN WNUR HOODIE GALLERY //////////////




/////////////***JAVASCRIPT VARIABLES***///////////
var WNURfull = document.getElementById("WNURfull");
var WNURthumb1 = document.getElementById("WNURthumb1");
var WNURthumb2 = document.getElementById("WNURthumb2");
var WNURthumb3 = document.getElementById("WNURthumb3");
var WNURthumb4 = document.getElementById("WNURthumb4");
var WNURthumb5 = document.getElementById("WNURthumb5");

//////////***LISTENERS***/////////////

WNURthumb1.addEventListener("click",showWNURPhoto1);
WNURthumb2.addEventListener("click",showWNURPhoto2);
WNURthumb3.addEventListener("click",showWNURPhoto3);
WNURthumb4.addEventListener("click",showWNURPhoto4);
WNURthumb5.addEventListener("click",showWNURPhoto5);

//////////***HANDLERS AND FUNCTIONS***///////// 
function showWNURPhoto1(){
	WNURfull.setAttribute("src","images/WNURHoodie_1.jpg");
	}
	
function showWNURPhoto2(){
	WNURfull.setAttribute("src","images/WNURHoodie_2.png");
	}

function showWNURPhoto3(){
	WNURfull.setAttribute("src","images/WNURHoodie_3.png");
	}
	
function showWNURPhoto4(){
WNURfull.setAttribute("src","images/WNURHoodie_4.jpg");
	}

function showWNURPhoto5(){
WNURfull.setAttribute("src","images/WNURHoodie_5.jpg");
	}