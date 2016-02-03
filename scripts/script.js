var set = [];



$(document).ready(function(){
	initSet();
	$('#generate-random').click(function(e){
		if ($(".show-holder").length === 0){
			$(".hide-holder")[0].className = "show-holder card-view";
			$(".show-card")[0].className = "hide-card card-view";
			$('#generate-random')[0].textContent = "Shuffle Cards";
			$('.show-go-to-card')[0].className = "col-lg-6 hide-go-to-card";
			setCardNumberLabel(-1);
			return;
		}
		$(".show-holder")[0].className = "hide-holder card-view";
		shuffle(set);
		var firstCard = "#card-" + set[0].toString();
		$(firstCard)[0].className = "show-card card-view";
		$('#generate-random')[0].textContent = "Reset";
		$('.hide-go-to-card')[0].className = "col-lg-6 show-go-to-card";
		setCardNumberLabel(0);
	});
	
	$("#left-button").click(function(e){
		var currCard = getCurrentCardNumber();
		if(currCard === 52) {
			return;
		}
		if(currCard>0){
			$(".show-card")[0].className = "hide-card card-view";
			var prevCardID = "#card-"+set[currCard-1].toString();
			$(prevCardID)[0].className = "show-card card-view";
			setCardNumberLabel(currCard-1);
		}
	});

	$("#right-button").click(function(e){
		var currCard = getCurrentCardNumber();
		if(currCard === 52) {
			return;
		}
		if(currCard<51){
			$(".show-card")[0].className = "hide-card card-view";
			var nextCardID = "#card-"+set[currCard+1].toString();
			$(nextCardID)[0].className = "show-card card-view";
			setCardNumberLabel(currCard+1);
		}
	});

	$("#go-to-card-button").click(function(e){
		var cardNum = Number.parseInt($("#go-to-card-number")[0].value);
		if (!Number.isNaN(cardNum) && cardNum >= 1 && cardNum <= 52){
			var currCard = getCurrentCardNumber();
			if(currCard === 52) {
				return;
			}
			if(currCard<51){
				$(".show-card")[0].className = "hide-card card-view";
			}
			var goToCardID = "#card-"+set[cardNum-1].toString();
			$(goToCardID)[0].className = "show-card card-view";
			setCardNumberLabel(cardNum-1);
		}
	});

});




var initSet = function(){
	for (var i=0; i<52; i++){
		set.push(i);
	}
};


function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function getCurrentCardNumber(){
	if ($(".show-card").length === 0){
		return 52;
	}
	var currCard = $(".show-card")[0];
	return set.indexOf(Number.parseInt(currCard.id.substring(5)));
}

//cardNum is 0 based
function setCardNumberLabel(cardNum){
	var displayNum = cardNum + 1;
	if(cardNum >=0 && cardNum <=51){
		$(".card-number")[0].textContent = "" + displayNum + "/52"
	}
	else{
		$(".card-number")[0].textContent = ""
	}
	
}


