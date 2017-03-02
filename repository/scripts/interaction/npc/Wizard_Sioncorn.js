var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
	    chatplayer(player, "NEUTRAL", "Merry Christmas Sioncorn!", function () {
		chatnpc(player, npc, "NEUTRAL", "Merry Christmas "+ api.getName(player)+"!", function () {	
	    chatnpc(player, npc, "NEUTRAL", "Thank you very much for your help with the decorations. I<br> could not have done it without you.", function () {
        });
	    });	
	    });	  
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new Listener();
	scriptManager.registerListener(EventType.OPNPC1, 14755, listener);
};
