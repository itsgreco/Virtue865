var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
	    chatplayer(player, "NEUTRAL", "Merry Christmas, Thormac!", function () {
		chatnpc(player, npc, "NEUTRAL", "Merry Christmas "+ api.getName(player)+"!", function () {	
		chatnpc(player, npc, "NEUTRAL", "You have not seen my pet scorpion around here, have<br> you?", function () {
	    chatplayer(player, "NEUTRAL", "No! Sorry, I've had enough of chasing animals for one day<br> thank you.", function () {
	    chatnpc(player, npc, "NEUTRAL", "Well, okay. Can you let me know if you find it, please?", function () {
	    chatplayer(player, "NEUTRAL", "Sure.", function () {
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
	scriptManager.registerListener(EventType.OPNPC1, 14747, listener);
};
