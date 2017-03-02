var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		chatplayer(player, "NEUTRAL", "Where did you get that lens?", function () {	
		chatnpc(player, npc, "NEUTRAL", "From that strange metal thing up on the hill.", function () {
		chatplayer(player, "NEUTRAL", "You should give that back!", function () {	
		chatnpc(player, npc, "NEUTRAL", "Even if it's cracked?", function () {
		chatplayer(player, "NEUTRAL", "Ah, well, I suppose it's of no use. But, still.", function () {
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
	scriptManager.registerListener(EventType.OPNPC1, 6129, listener);
};
