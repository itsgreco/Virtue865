var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "angry", "Bah! A great artist such as myself should not have to<br> suffer the HUMILIATION of spending time on these<br> dreadful worlds where non-members wander everywhere!", function () {	
	       });	
		     
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new Listener();
	scriptManager.registerListener(EventType.OPNPC1, 336, listener);
};
