var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
		case 25432:	//Stairs to Observatory underground
		api.teleportEntity(player, 2355, 9394, 0);
		return true;	
		case 25434:	//Stairs to Observatory underground
		api.teleportEntity(player, 2335, 9350, 0);
		return true;
        case 25431:	//Stairs to level 2 Observatory
		api.teleportEntity(player, 2442, 3159, 1);
		return true
		case 25437:	//Stairs to level 1 Observatory
		api.teleportEntity(player, 2444, 3162, 0);
		return true
		case 25578:
		case 25580:
		case 25582://Star charts
		case 25583:
		api.openCentralWidget(player, 104, false);	
		return true
		case 25526://Telescope
		api.sendMessage(player, "It seems the telescope is not operational at the moment.");
		return true
		case 25526:
		case 25527://Observatory locked door
	    mesbox(player,"The doors are locked. Thay probably used to lead to that destroyed bridge.");
		return true
		case 20749://Dead tree (shortcut)
		api.sendMessage(player, "You find nothing of interest at this time.");
		return true;	
		default:
		return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [20749,25432,25434,25431,25437,25526,25527,25578,25580,25582,25583];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};