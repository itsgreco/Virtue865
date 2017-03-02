var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		
		switch (locTypeId) {

		case 100873:
			chatobj(player, 36356, "Invention Discovery has not been added yet.", function () {	
				
	     	});
			return true;
		
		case 100850://Enter invention guild
			api.teleportEntity(player, 6169, 1039, 0);
			return true;
		case 100937://Exit invention guild
			api.teleportEntity(player, 2997, 3439, 0);
			return true;
	
	
	
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [100850, 100937, 100873];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};