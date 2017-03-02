var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		
		//api.openCentralWidget(player, 1048, false);
		//api.setWidgetText(player, 1048, 30, "Disassemble");
		//api.setWidgetText(player, 1048, 10, "Are you sure you want to disassemble your levellable item?<br><br>It is currently level <cof=ffffff>5</col>.<br><br><img=7>You will gain an extra <col=ffffff>91,800</col> Invention XP.<br><img=7>You will recieve <col=ffffff>2x</col> materials.<br><img=7>You will not recieve any junk material.<br><img=7>You have a <col=ffffff>50%</col> chance to recover installed gizmos.<br><br>You can level this item further for more benefits when disassembled.<br><br><col=ff0000>If you disassemble this, it will be completely destroyed.</col>");
		api.openCentralWidget(player, 1166, false);
		api.setWidgetText(player, 1166, 23, "Disassemble");
		api.setWidgetText(player, 1166, 1, "Are you sure you want to disassemble your levellable item?<br><br>It is currently level <cof=ffffff>5</col>.<br><br><img=7>You will gain an extra <col=ffffff>91,800</col> Invention XP.<br><img=7>You will recieve <col=ffffff>2x</col> materials.<br><img=7>You will not recieve any junk material.<br><img=7>You have a <col=ffffff>50%</col> chance to recover installed gizmos.<br><br>You can level this item further for more benefits when disassembled.<br><br><col=ff0000>If you disassemble this, it will be completely destroyed.</col>");
		api.setWidgetText(player, 1166, 2, "Disassemble Item");
		
		//api.addExperience(player, Stat.INVENTION, 420 * 20, true);//495
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "disassembletest", listener);
};