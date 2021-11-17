// staring values

var page = 1;
var width = 0;

document.getElementById("progress").style.width = String(width)+"%";
document.getElementById("car__radio-1").checked = false;
document.getElementById("car__radio-2").checked = false;
document.getElementById("car__radio-3").checked = false;
document.getElementById("drop-nav").style.display = "none";
document.getElementById("bitrix_check").checked = false;

document.getElementById("page").innerHTML = page;

button_next.onclick = function() {
	if (page < 6 && check() === true) {
		button_next.classList.remove("none");
		button_submit.classList.add("none");
		page++;
		width += 16,666666;
		document.getElementById("page").innerHTML = page;
		pageDisplay(page);
		document.getElementById("progress").style.width = String(width)+"%";
	}
	else if (page >= 6 && check() === true) {
		page++;
		document.getElementById("page").innerHTML = page;
		pageDisplay(page);
		document.getElementById("progress").style.width = "100%";
		button_next.classList.add("none");
		button_submit.classList.remove("none");
	}
};

button_back.onclick = function() {
	if (page != 1 && check() === true) {
		button_next.classList.remove("none");
		button_submit.classList.add("none");
		page--;
		width -= 16,666666;
		document.getElementById("page").innerHTML = page;
		pageDisplay(page);
		document.getElementById("progress").style.width = String(width)+"%";
	};
};

function pageDisplay(x) {
	if (x === 1) {
		page_first.classList.remove("none");

		page_second.classList.add("none");
	}
	if (x === 2) {
		page_first.classList.add("none");
		page_third.classList.add("none");

		page_second.classList.remove("none")
	};
	if (x === 3) {
		page_second.classList.add("none");
		page_fourth.classList.add("none");

		page_third.classList.remove("none")
	};
	if (x === 4) {
		page_third.classList.add("none");
		page_fifth.classList.add("none");

		page_fourth.classList.remove("none")
	};
	if (x === 5) {
		page_fourth.classList.add("none");
		page_sixth.classList.add("none");

		page_fifth.classList.remove("none")
	};
	if (x === 6) {
		page_fifth.classList.add("none");
		page_seventh.classList.add("none");

		page_sixth.classList.remove("none")	
	};
	if (x === 7) {
		page_sixth.classList.add("none");

		page_seventh.classList.remove("none")
	};
};

// cars
document.getElementById("car_first").onclick = function(event) {
	car_first.classList.add("selected__active");
	document.getElementById("car__radio-1").checked = true;

	document.getElementById("car__radio-2").checked = false;
	document.getElementById("car__radio-3").checked = false;


	car_second.classList.remove("selected__active");
	car_third.classList.remove("selected__active");
};
document.getElementById("car_second").onclick = function(event) {
	car_second.classList.add("selected__active");
	document.getElementById("car__radio-2").checked = true;

	document.getElementById("car__radio-1").checked = false;
	document.getElementById("car__radio-3").checked = false;

	car_first.classList.remove("selected__active");
	car_third.classList.remove("selected__active");
};
document.getElementById("car_third").onclick = function(event) {
	car_third.classList.add("selected__active");
	document.getElementById("car__radio-3").checked = true;

	document.getElementById("car__radio-1").checked = false;
	document.getElementById("car__radio-2").checked = false;

	car_first.classList.remove("selected__active");
	car_second.classList.remove("selected__active");	
};

// shipp
document.getElementById("shipp_first").onclick = function(event) {
	shipp_first.classList.add("selected__active");
	document.getElementById("shipp__radio-1").checked = true;

	document.getElementById("shipp__radio-2").checked = false;
	document.getElementById("shipp__radio-3").checked = false;


	shipp_second.classList.remove("selected__active");
	shipp_third.classList.remove("selected__active");
};
document.getElementById("shipp_second").onclick = function(event) {
	shipp_second.classList.add("selected__active");
	document.getElementById("shipp__radio-2").checked = true;

	document.getElementById("shipp__radio-1").checked = false;
	document.getElementById("shipp__radio-3").checked = false;

	shipp_first.classList.remove("selected__active");
	shipp_third.classList.remove("selected__active");
};
document.getElementById("shipp_third").onclick = function(event) {
	shipp_third.classList.add("selected__active");
	document.getElementById("shipp__radio-3").checked = true;

	document.getElementById("shipp__radio-1").checked = false;
	document.getElementById("shipp__radio-2").checked = false;

	shipp_first.classList.remove("selected__active");
	shipp_second.classList.remove("selected__active");	
};


function check()
{
	var inp = document.getElementsByName('car');
	for (var i = 0; i < inp.length; i++) {
		if (inp[i].type == "radio" && inp[i].checked) {
			return true;
		};
	};
	msg_error.classList.remove("none");	
	return false;
}

$(function(){
	$(".phone").mask("+7 (999) 999-9999");
});



document.forms.contact.onsubmit = function() {
	var phone = this.phone.value;
	var name = this.name.value;

	if (phone.length < 17) {
		contact__msg.classList.remove("none");	
	}
	else if (name.length < 2) {
		contact__msg.classList.remove("none");	
	}
	else { 
		contact__msg.classList.add("none");
	}	
};

window.addEventListener('scroll', function() {
	const screenWidth = window.screen.width;
	if (pageYOffset < 110) document.getElementById("drop-nav").style.display = "none"
		else if (screenWidth <= 980 && pageYOffset > 110) document.getElementById("drop-nav").style.display = "none";
	else if (pageYOffset > 110) document.getElementById("drop-nav").style.display = "inline";
});

document.forms.calc_pr.onsubmit = function() {
	var name = this.name.value;
	var phone = this.phone.value;
	var from = this.from.value;
	var to = this.to.value;

	if (phone.length < 17) calc_pr__error.classList.remove("none")
		else if (name.length < 2)	calc_pr__error.classList.remove("none")
			else if (from.length < 2) calc_pr__error.classList.remove("none")
				else if (to.length < 2) calc_pr__error.classList.remove("none")
					else calc_pr__error.classList.add("none");	
			};

document.forms.top_top__form.onsubmit = function() {
	var name = this.name.value;
	var phone = this.phone.value;
	var from = this.from.value;
	var to = this.to.value;
	var alert = document.getElementById("main_error_alert");

	function fade() {
		alert.classList.remove("__fade");
	}

	if (phone.length < 17) {
		alert.classList.add("__fade");
		setTimeout(fade, 11000);
	}
	else if (name.length < 2)	{
		alert.classList.add("__fade");
		setTimeout(fade, 11000);
	}
	else if (from.length < 2) {
		alert.classList.add("__fade");
		setTimeout(fade, 11000);
	}
	else if (to.length < 2) {
		alert.classList.add("__fade");
		setTimeout(fade, 11000);
	}
	else { 
		alert.classList.remove("__fade");
	}	
};

var alert_close = document.getElementById("main_error__close")

alert_close.onclick = function() {
	var alert = document.getElementById("main_error_alert");
	alert.classList.remove("__fade");
}

// back-to-top button
function backToTop() {
	let button = $('.scroll-to-top');

	$(window).on('scroll', () => {
		if($(this).scrollTop() >= 50) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 1000);
	})
}
backToTop() 

// slick-sliders
$('.reviews__slick').slick({
	dots: true,
	infinity: true
});

// modal - bitrix form
const screenh = window.screen.height;
var call = document.getElementById("call_back");
var bmodal = document.getElementById("bitrix_form");
var span = document.getElementsByClassName("close")[0];

call.onclick = function() {
	bmodal.style.display = "inline";
	document.getElementById("call_border").style.animation = "0";
};

span.onclick = function() {
	bmodal.style.display = "none";
	document.getElementById("call_border").style.animation = "call-pulse ease infinite 1.5s";
};

window.onclick = function(event) {
	if (event.target == bmodal) {
		bmodal.style.display = "none";
	}
};

// modal - bitrix terms
var modal = document.getElementById("modal");
var btn = document.getElementById("btn");
var btn_ok = document.getElementById("bitrix_ok");
var btn_no = document.getElementById("bitrix_no");
var btn_check = document.getElementById("bitrix_check");

btn.onclick = btn_check.onclick = function() {
	document.getElementById("bitrix_check").checked = false;

	var span = document.getElementsByClassName("close")[1];
	modal.style.display = "flex";
	document.body.style = "overflow: hidden;";

	btn_ok.onclick = function() {
		modal.style.display = "none";
		document.body.style = "none";
		document.getElementById("bitrix_check").checked = true;
	};

	btn_no.onclick = span.onclick = function() {
		modal.style.display = "none";
		document.body.style = "none";
		document.getElementById("bitrix_check").checked = false;
	};

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			document.body.style = "none";
			document.getElementById("bitrix_check").checked = false;
		}
	};
};