var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {	
        case 106002://Snowboard rack
		chatplayer(player, "NEUTRAL", "A new snowboard. Neat!", function () {
		api.setVarp(player, 6682, 1);
		api.addCarriedItem(player, 39316 ,1);
		mesbox(player, "You take this years snowboard from the snow.", function () {
	    });
		});
		return true;			
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [106002];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};