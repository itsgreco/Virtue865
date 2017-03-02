var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
	    chatplayer(player, "NEUTRAL", "Merry Christmas Traiborn!", function () {
		chatnpc(player, npc, "NEUTRAL", "Merry Christmas young thingummywut. Somebody has<br> stolen the eyes from the dragon bust in my room. Would<br> you know about that?", function () {	
	    chatplayer(player, "NEUTRAL", "No...no idea. It must have been a thingummywut.", function () {
		chatnpc(player, npc, "NEUTRAL", "Interesting theory "+ api.getName(player)+".....I shall have to<br> investigate more; those blasted thingummywuts cause me<br> so much trouble!", function () {
		chatplayer(player, "NEUTRAL", "Yeah... Tell me about it.....", function () {
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
	scriptManager.registerListener(EventType.OPNPC1, 14743, listener);
};
