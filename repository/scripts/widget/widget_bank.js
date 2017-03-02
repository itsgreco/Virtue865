

var BankCloseListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		switch (args["interface"]) {
		case 762:
			switch (args.component) {
			case 331://Close Button
//				if (!bankonit) {
//					api.openCentralWidget(player, 1055, true);
//					api.hideWidget(player, 1055, 0, false);
//					api.hideWidget(player, 1055, 1, false);
//					api.hideWidget(player, 1055, 2, false);
//					api.hideWidget(player, 1055, 3, false);
//					api.hideWidget(player, 1055, 4, false);
//					api.hideWidget(player, 1055, 5, false);
//					api.hideWidget(player, 1055, 6, false);
//					api.hideWidget(player, 1055, 7, false);
//					api.hideWidget(player, 1055, 8, false);
//					api.hideWidget(player, 1055, 9, false);
//					api.hideWidget(player, 1055, 10, false);
//					api.hideWidget(player, 1055, 11, false);
//					api.hideWidget(player, 1055, 12, false);
//					api.hideWidget(player, 1055, 13, false);
//					api.hideWidget(player, 1055, 14, false);
//					api.hideWidget(player, 1055, 15, false);
//					api.setWidgetText(player, 1055, 14, "Task Complete!");
//					api.setWidgetText(player, 1055, 15, "Bank on It");
//					
//					api.sendMessage(player, "You have completed the Task 'Bank on It'!");
//					
//					bankonit = true;
//					
//					//api.closeCentralWidgets(player);
//				} else {
//					
//				}
				return true;
			
			}
			
			return true;

		default:
			api.sendMessage(player, "Unhandled bank button: interface="+args["interface"]+", comp="+args.component+", slot="+args.slot+", button="+args.button);
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
listener = new BankCloseListener();	
scriptManager.registerListener(EventType.IF_BUTTON, 762, listener);
}