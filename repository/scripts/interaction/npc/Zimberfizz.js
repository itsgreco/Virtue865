var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		chatnpc(player, npc, "NEUTRAL", "Merry Christmas "+ api.getName(player)+"!", function () {	
		chatplayer(player, "NEUTRAL", "Merry Christmas Zimberfizz! What are you doing here?", function () {
		chatnpc(player, npc, "NEUTRAL", "I's 'ere on bizniss!!", function () {	
        chatplayer(player, "NEUTRAL", "I'm not going to ask....", function () {
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
	scriptManager.registerListener(EventType.OPNPC1, 14754, listener);
};
