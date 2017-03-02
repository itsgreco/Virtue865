var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		api.openOverlaySub(player, 1017, 762, false);
		} else if (event == EventType.OPNPC3) {
        chatnpc(player, npc, "NEUTRAL", "Good day. How may I help you?", function () {	
		multi4(player, "WHAT WOULD YOU LIKE TO SAY?", "I'd like to access my bank account, please.", function () {
	    api.openOverlaySub(player, 1017, 762, false);
		}, "I'd like to check my PIN settings.", function () {
		api.openCentralWidget(player, 14, false);
		}, "I'd like to see my collection box.", function () {
		api.openCentralWidget(player, 109, false);
		}, "What is this place?", function () {
		chatnpc(player, npc, "NEUTRAL", "This is a branch of the Bank of RuneScape. We have<br> branches in many towns.", function () {		
		multi2(player, "WHAT WOULD YOU LIKE TO SAY?", "And what do you do?", function () {
		chatnpc(player, npc, "NEUTRAL", "We will look after your items and money for you. Leave<br> your valuables with us if you want to keep them safe.", function () {		
		});
		}, "Didn't you used to be called the Bank of Varrock?", function () {	
		chatnpc(player, npc, "NEUTRAL", "Yes we did, but people kept on coming into our branches<br> outside of Varrock and telling us that our signs were<br> wrong. They acted as if we didn't know what town we<br> were in or something.", function () {		
		});
		});	
		});
	    });	
		});	
		} else if (event == EventType.OPNPC4) {
		api.openCentralWidget(player, 109, false);	
		} else if (event == EventType.OPNPC5) {
		// open shop npc 958 Fadli
		}	
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var npcs = [494,496,553,958,2759,4456,4457,4458,4459,6200,14923,14924,14925,19086];
	var listener = new Listener();
	for (var i in npcs) {
	scriptManager.registerListener(EventType.OPNPC1, npcs[i], listener);
	scriptManager.registerListener(EventType.OPNPC3, npcs[i], listener);
	scriptManager.registerListener(EventType.OPNPC4, npcs[i], listener);
	scriptManager.registerListener(EventType.OPNPC5, npcs[i], listener);
	}
};