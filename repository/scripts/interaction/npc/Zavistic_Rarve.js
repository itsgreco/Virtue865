var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		chatplayer(player, "NEUTRAL", "Merry Christmas Zavistic!", function () {
		chatnpc(player, npc, "NEUTRAL", "Merry Christmas "+ api.getName(player)+"!", function () {
        chatplayer(player, "NEUTRAL", "This is a great banquet!", function () {
		chatnpc(player, npc, "NEUTRAL", "Yes, this is the first thing I have seen tower wizards do<br> correctly... They must have had some help.", function () {
        chatplayer(player, "NEUTRAL", "Maby, yes - They do have good friends.", function () {
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
	scriptManager.registerListener(EventType.OPNPC1, 14745, listener);
};
