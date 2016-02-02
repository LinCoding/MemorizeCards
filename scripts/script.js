var set = [];



$(document).ready(function(){
	initSet();
	$('#generate-random').click(function(e){
		if ($(".show-holder").length === 0){
			$(".hide-holder")[0].className = "show-holder card-view";
			$(".show-card")[0].className = "hide-card card-view";
			$('#generate-random')[0].textContent = "Shuffle Cards";
			return;
		}
		$(".show-holder")[0].className = "hide-holder card-view";
		shuffle(set);
		var firstCard = "#card-" + set[0].toString();
		$(firstCard)[0].className = "show-card card-view";
		//$(firstCard)[0].textContent = set[0].toString();
		$('#generate-random')[0].textContent = "Reset";
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
			//$(prevCardID)[0].textContent = set[currCard-1].toString();
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
			//$(nextCardID)[0].textContent = set[currCard+1].toString();
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


