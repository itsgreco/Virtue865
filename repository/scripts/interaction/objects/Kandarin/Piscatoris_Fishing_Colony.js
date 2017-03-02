var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {	
		case 14964://Barrel
		chatplayer(player, "NEUTRAL", "I think I should maby catch my own.", function () { //just need the right chat head
		    });	
	    return true;

        default:
		return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [14964];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};