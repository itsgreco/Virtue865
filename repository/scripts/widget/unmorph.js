var ButtonListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		var item = args.item;
		var slot = args.slot;
        switch(args.component) {
		case 3://Unmorph
       player.getModel().setRender(Render.PLAYER);
	   player.getModel().refresh();
	   api.runAnimation(player, 14884);
	   api.setVarc(player, 1727, 0);
	   api.closeOverlaySub(player, 1008, false);
		return;
		default:
			api.sendMessage(player, "Unhandled Unmorph button: interface="+args["interface"]+", comp="+args.component+", slot="+args.slot+", button="+args.button);
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	listener = new ButtonListener();	
	scriptManager.registerListener(EventType.IF_BUTTON, 375, listener);
};