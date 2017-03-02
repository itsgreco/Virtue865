var LumbridgeGuardsmanListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "NEUTRAL", "Greetings, adventurer. Duke Horacio has recently<br> provided us guards with advanced training, as well as<br> much improved swords! I feel much more confident in our<br> ability to defend Lumbridge now that we actuall have", function () {
			chatnpc(player, npc, "NEUTRAL", "proper equipment and traning!", function () {	
	       });	
		   });	  
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new LumbridgeGuardsmanListener();
	scriptManager.registerListener(EventType.OPNPC1, 14936, listener);
};
