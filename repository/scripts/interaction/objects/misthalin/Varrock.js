var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}	
		switch (locTypeId) {
			case 69649://///////////sign posts
			api.sendMessage(player, "North to the Lumber Yard and the Jolly Boar Inn.");
	        return true;
			case 69650:
			api.sendMessage(player, "East to Paterdomus and Morytania.");
	        return true;
			case 69651:
			api.sendMessage(player, "South-west to Varrock.");
	        return true;
			case 69673:
			api.sendMessage(player, "East to the Exam Centre and Digsite.");
	        return true;
			case 69674:
			api.sendMessage(player, "South to Al Kharid and the Duel Arena.");
	        return true;
			case 69675:
			api.sendMessage(player, "West to Lumbridge and Varrock.");
	        return true;
			case 69709:
			api.sendMessage(player, "North to the Grand Exchange.");
	        return true;
			case 69710:
			api.sendMessage(player, "East to Varrock.");
	        return true;
			case 69711:
			api.sendMessage(player, "West to Barbarian Village.");
	        return true;
			case 69714:
			api.sendMessage(player, "North-east to Varrock.");
			return true;
			case 69715:
			api.sendMessage(player, "South-west to Lumbridge and Draynor.");
			return true;
			case 69716:
			api.sendMessage(player, "South to Lumbridge and Al Kharid.");
			return true;
			case 69717:
			api.sendMessage(player, "West to the Champions' Guild.");
			return true;
			case 69718:
			api.sendMessage(player, "East to the Exam Centre and Digsite.");
			return true;
			case 69719:
			api.sendMessage(player, "South to Lumbridge and Al Kharid.");
	        return true;
			case 69720:
			api.sendMessage(player, "West to Varrock.");
	        return true;
			case 69721:
			api.sendMessage(player, "North to the Lumber Yard.");
	        return true;
			case 69722:
			api.sendMessage(player, "South to Al Kharid and Lumbridge.");
	        return true;
			case 69723:
			api.sendMessage(player, "West to Varrock.");
	        return true;
			case 69822:
			api.sendMessage(player, "North to the Cook's Guild and on to the Grand Exchange.");
	        return true;
			case 69823:
			api.sendMessage(player, "East into Varrock.");
	        return true;
			case 69824:
			api.sendMessage(player, "West to Barbarian Village and Falador.");
	        return true;/////////////////////end of sign posts
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [69649,69650,69651,69673,69674,69675,69714,69715,69716,69717,69718,69719,69720,69721,69722,69723,69822,69823,69824,69709,69710,69711];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};