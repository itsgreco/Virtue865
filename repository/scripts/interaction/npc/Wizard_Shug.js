var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
	    chatplayer(player, "NEUTRAL", "Merry Christmas Shug!", function () {
		chatnpc(player, npc, "NEUTRAL", "Zzzz....", function () {	
		chatnpc(player, npc, "NEUTRAL", "Urrgghhh...Watch out for that thingummywut Traiborn!!", function () {
        chatnpc(player, npc, "NEUTRAL", "Zzzz....", function () {	
        chatplayer(player, "NEUTRAL", "I had better not let Traiborn know about this. It won't do<br> him any good....", function () {		
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
	scriptManager.registerListener(EventType.OPNPC1, 14756, listener);
};
