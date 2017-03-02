var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
		case 25442://Goblin stove
		mesbox(player, "Just a plain stove. Nothing there..");
		return true;
		case 25429:	// Stairs
		if (api.getCoordX(args.location) == 2355 && api.getCoordY(args.location) == 9395) {
		api.teleportEntity(player, 2458, 3185, 0);
		} else if (api.getCoordX(args.location) == 2335 && api.getCoordY(args.location) == 9351) {
		api.teleportEntity(player, 2439, 3164, 0);	
		} 
		return true;		
		default:
		return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [25429,25442];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};