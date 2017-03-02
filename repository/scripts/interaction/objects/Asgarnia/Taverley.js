var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {	
		case 66991://Traverley dungeon
		if (map_members == false){
		mesbox(player, "You need to be on a member's world to use this feature.", function () {	
		});
		} else {
		api.teleportEntity(player, 2885, 9796, 0);
		}
	    return true;
		case 96784://Shortcut to Traverley dungeon
		if (api.getStatLevel(player, Stat.AGILITY) < 52) {
		api.sendMessage(player, "You need an agility level of 52 to cross these stones.");
		return;
		}
		if (api.getCoordX(location) == 2883 && api.getCoordY(location) == 3410) {
		api.moveTo(player, 2883, 3410);
		api.faceCoords(player, api.getCoords(2883,3410,0));
		runAnimation(player, 26404, function () {
		api.teleportEntity(player, 2883, 3402, 0);
		});
		} else if (api.getCoordX(location) == 2883 && api.getCoordY(location) == 3402) {
		api.moveTo(player, 2883, 3402);	
        api.faceCoords(player, api.getCoords(2883, 3410,0));
		runAnimation(player, 26404, function () {
		api.teleportEntity(player, 2883, 3410, 0);
		});	
		}
	    return true;
        default:
		return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [66991,96784];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};