var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		chatplayer(player, "NEUTRAL", "Hi there.", function () {	
		chatnpc(player, npc, "NEUTRAL", "Hey, ids me matesh!", function () {
		chatplayer(player, "NEUTRAL", "Sorry, have we met?", function () {	
		chatnpc(player, npc, "NEUTRAL", "Yeah! you wazsh wiv me in dat pub overy by hill!", function () {
		chatplayer(player, "NEUTRAL", "I have no idea what you're going on about.", function () {	
		chatnpc(player, npc, "NEUTRAL", "Glad yeeash remembers.", function () {
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
	scriptManager.registerListener(EventType.OPNPC1, 6128, listener);
};
