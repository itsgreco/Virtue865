var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		
		hasArcaneFishing = true;
		arcaneFishing = true;
		api.sendMessage(player, "You have unlocked - Arcane fishing.");
		
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "arcanefish", listener);
};