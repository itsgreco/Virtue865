var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {	
		case 31459://Customs Sergeant
		chatnpc(player, 7830, "NEUTRAL", "Zzzzzzzzzzzzzzzzzzz.", function () { //just need the right chat head
		    });	
	    return true;
		case 71969://locker
		chatnpc(player, 7831, "NEUTRAL", "Hey! Nobody stores anything in there unless thay are<br> under arrest.", function () { //just need the right chat head
		    });	
	    return true;
		case 71970://notices outside Customs Sergeant
		mesbox(player,"There are no new notices here.", function () {
		    });	
	    return true;
		case 72434://Sleeping man
		chatnpc(player, 15476, "NEUTRAL", "...ears to pour their course...", function () { //just need the right chat head
		    });	
	    return true;
		case 72442://Waylan
		chatnpc(player, 15471, "NEUTRAL", "...wending through the willows...", function () { //just need the right chat head
		    });	
	    return true;
        default:
		return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [31459,71970,71969,72434,72442];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};