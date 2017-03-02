var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		//if (Math.random() <= 0.6) {
		//api.entitySay(npc, "Zzzzz...");
		//} else {
		//api.entitySay(npc, "Huh, what? where?"); 
		//}
		if (event == EventType.OPNPC1) {
		mesbox(player, "The little goblin appears to be fast asleep, and yet still fishing...", function () {		
		chatplayer(player, "NEUTRAL", "I think I'd rather not wake him.", function () {	
		});	  
		});
		}
	}
});



/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	
	var listener = new Listener();
	scriptManager.registerListener(EventType.OPNPC1, 6130, listener);
};
