var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
		case 29049://Icicle
		return true;	
		case 29051://Switch
		return true;	
				//tele 2847 5770	
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [29049,29051];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};