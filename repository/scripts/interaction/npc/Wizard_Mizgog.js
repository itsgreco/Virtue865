var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
	    chatplayer(player, "NEUTRAL", "Merry Christmas Mizgog!", function () {
		chatnpc(player, npc, "NEUTRAL", "Merry Christmas "+ api.getName(player)+"! Have you seen what<br> Wizard Grayzag is up to now? He has picked a fight with<br> Frumscone - They are fighting it out behind that screen<br> there...", function () {	
		chatplayer(player, "NEUTRAL", "What happened?", function () {
		chatnpc(player, npc, "NEUTRAL", "I'm not sure, I didn't see. I have no doubt that it will be a<br> childish reason, though...", function () {	
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
	scriptManager.registerListener(EventType.OPNPC1, 14759, listener);
};
