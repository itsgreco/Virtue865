var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
		case 2646:
		case 67263:
		case 67264://flax
		case 67265:
		runAnimation(player, 827, function () {
        api.addCarriedItem(player, 1779, 1);
		api.transformLoc(location, -1, 60);
		});
        return true;
		case 15506:
		case 15507://wheat
		case 15508:
		runAnimation(player, 827, function () {
		api.transformLoc(location, -1, 60);
        api.addCarriedItem(player, 1947, 1);
		});
		return true;
		case 1161://cabbage
		runAnimation(player, 827, function () {
		api.transformLoc(location, -1, 60);
        api.addCarriedItem(player, 1965, 1);
		});
		return true;
		
		case 312://Potato
		runAnimation(player, 827, function () {
		api.transformLoc(location, -1, 60);
        api.addCarriedItem(player, 1942, 1);
		});
		return true;
		
		
			default:
			return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [312,2646,67263,67264,67265,15506,15507,15508,1161];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC2, locs[i], listener);
	}
};