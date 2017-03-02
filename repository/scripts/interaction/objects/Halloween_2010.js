var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
        case 46935://Dark portal
		api.teleportEntity(player, 3012, 3270, 0);
		return true;
		case 31845://Dark portal
		api.teleportEntity(player, 4319, 5454, 0);
		return true;		
				
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [46935,31845];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};