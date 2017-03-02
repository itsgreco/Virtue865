var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
	    chatplayer(player, "NEUTRAL", "Merry Christmas Distentor!", function () {
		chatnpc(player, npc, "NEUTRAL", "Merry Christmas "+ api.getName(player)+"!", function () {	
		chatplayer(player, "NEUTRAL", "So, what do you think of the banquet?", function () {
	    chatnpc(player, npc, "NEUTRAL", "It's okay, the turkey isn't dancing to the table but the<br> snow imps are good waiters.", function () {
        chatplayer(player, "NEUTRAL", "Did you try any of the pudding?", function () {
	    chatnpc(player, npc, "NEUTRAL", "I did! I may not be a big pudding fan, but anything cooked<br> in a cannon has to be tried!", function () {
		chatplayer(player, "NEUTRAL", "You are braver then I am.", function () {
		});
	    });	
	    });	  
		});
	    });	
		});
	    });	
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new Listener();
	scriptManager.registerListener(EventType.OPNPC1, 14748, listener);
};
