var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		
		api.openCentralWidget(player, 1055, true);
		api.hideWidget(player, 1055, 0, false);
		api.hideWidget(player, 1055, 1, false);
		api.hideWidget(player, 1055, 2, false);
//		api.hideWidget(player, 1055, 3, false);
//		api.hideWidget(player, 1055, 4, false);
//		api.hideWidget(player, 1055, 5, false);
//		api.hideWidget(player, 1055, 6, false);
//		api.hideWidget(player, 1055, 7, false);
//		api.hideWidget(player, 1055, 8, false);
//		api.hideWidget(player, 1055, 9, false);
//		api.hideWidget(player, 1055, 10, false);
//		api.hideWidget(player, 1055, 11, false);
//		api.hideWidget(player, 1055, 12, false);
//		api.hideWidget(player, 1055, 13, false);
		api.hideWidget(player, 1055, 14, false);
		api.hideWidget(player, 1055, 15, false);
		api.setWidgetText(player, 1055, 14, "Challenge Complete!");//Challenge Complete! : Task Complete!
		api.setWidgetText(player, 1055, 15, "Bones");
		//api.setVarp(player, 3913, 134274428);
		//api.setVarp(player, 3914, 50348166);
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "challengetest", listener);
};