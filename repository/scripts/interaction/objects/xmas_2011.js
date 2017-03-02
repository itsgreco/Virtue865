var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		//// interface 1194 inside snow fight
		switch (locTypeId) {
		case 65907://Staircase
		chatplayer(player, "NEUTRAL", "I should speak to Sedridor to find out how i can help at<br> the banquet before I start exploring.", function () {
		});
        return true;
		case 65913://Ladder
		chatplayer(player, "NEUTRAL", "I should speak to Sedridor to find out how i can help at<br> the banquet before I start exploring.", function () {
		});
		return true;
		case 65938://Scoreboard
	    api.openCentralWidget(player, 290, false);
        return true;
		case 65939://oak tree
		api.sendMessage(player, "I didn't know that imps liked to climb trees!");
        return true;
		case 65943://Bookcase
		api.sendMessage(player, "Is that a book with a tail?");
        return true;
        case 65946://Fountain
		api.sendMessage(player, "I had better not touch that until I know what it is.");
        return true;
		case 65956://portal
		api.teleportEntity(player, 1378, 4374, 2);
		return true;
		case 65959://Exit portal
		api.teleportEntity(player, 3222, 3222, 0);
		return true;
        case 65976://tree
		api.sendMessage(player, "Why are you looking at a tree you should be helping Sedridor? stop slacking!");
        return true;
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [65907,65913,65938,65939,65943,65946,65956,65959,65976];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};