var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		api.setVarp(player, 312, 75497472);
		
		
		api.sendMessage(player, "Craft modifier has been set to: 1");
		api.sendMessage(player, "You can now craft this item.");
		
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND, "invent", listener);
	scriptManager.registerListener(EventType.COMMAND, "invention", listener);
	scriptManager.registerListener(EventType.COMMAND, "xone", listener);
};