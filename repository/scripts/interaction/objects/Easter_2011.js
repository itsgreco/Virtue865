var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		
		switch (locTypeId) {
		case 57376://Easter portal
		api.teleportEntity(player, 1599, 4512, 0);
		return true;
        case 57379://Exit portal
		api.teleportEntity(player, 1599, 4512, 0);
		return true;
				
				
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [57376,57379];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};