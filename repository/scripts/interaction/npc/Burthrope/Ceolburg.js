//Npc id - 1089
//Dialogue npc - Good day!; Lovely day, isn't it?

var CeolburgListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "NEUTRAL", "Lovely day, isn't it?", function () {
			chatplayer(player, "NEUTRAL", "Yes indeed!", function () {	
	       });	
		   });	  
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new CeolburgListener();
	scriptManager.registerListener(EventType.OPNPC1, 1089, listener);
};
