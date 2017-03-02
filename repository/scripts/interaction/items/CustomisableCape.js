var CompCapeListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		var player = args.player;
		if (event == EventType.OPWORN1) {//Kandarin Monastery
			api.teleportEntity(player, 3086, 3502, 0);
		} else if (event == EventType.OPWORN2) {//Ardougne farm
			api.teleportEntity(player, 2663, 3374, 0);
		} else if (event == EventType.OPWORN3) {//Max Guild
			api.teleportEntity(player, 2276, 3314, 1);
		} else if (event == EventType.OPWORN4) {//Summoning restore
			api.sendMessage(player, "<col=ff0000>will be added soon. bugged atm.");
		}
		
		/*switch (option) {
		case 26://Customise
			api.openCentralWidget(player, 20, false);
			return true;
		default:
			api.sendMessage(player, "Unhandled cape option: item="+item.getID()+", option="+option);
		}*/
	}
});

var MaxCapeListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		var player = args.player;
		if (event == EventType.OPWORN1) {//Customise
			api.openCentralWidget(player, 20, false);
		} else if (event == EventType.OPWORN2) {//Max Guild
			api.teleportEntity(player, 2276, 3314, 1);
		}
	}
});

/* Listen to the item ids specified */
var listen = function(scriptManager) {
	var ids = [ 20767, 20769, 20771, 32151, 32152, 32153 ];
	var compCapeListener = new CompCapeListener();
	for (var i in ids) {
		scriptManager.registerListener(EventType.OPWORN1, ids[i], compCapeListener);
		scriptManager.registerListener(EventType.OPWORN2, ids[i], compCapeListener);
		scriptManager.registerListener(EventType.OPWORN3, ids[i], compCapeListener);
		scriptManager.registerListener(EventType.OPWORN4, ids[i], compCapeListener);
	}
	
	ids = [ 20767, 20769, 20771, 32151, 32152, 32153 ];
	var maxCapeListener = new MaxCapeListener();
	for (var i in ids) {
		scriptManager.registerListener(EventType.OPWORN1, ids[i], maxCapeListener);
		scriptManager.registerListener(EventType.OPWORN2, ids[i], maxCapeListener);
	}
}