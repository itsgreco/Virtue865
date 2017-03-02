var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		
		api.setSpotAnim(player, 1, 6003);
		api.runAnimation(player, 27997);
		var total = Math.min(60, 1);
		CraftProcess.openInterface(player, 36365, 10740, total, 2);
		var remaining = total;
		api.addExperience(player, Stat.INVENTION, 420 * 20, true);//495
		remaining--;
		CraftProcess.setRemaining(player, remaining);
		CraftProcess.makeItem(player, 36389, 1);
		//Backpack.addHeld(player, 52, amount);
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "inventions", listener);
};