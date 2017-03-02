/**
 *  @author Greco
 */

var BernaldListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "NEUTRAL", "Do you know anything about grapevine diseases?", function () {
				Bernald.startTalk(player, npc);
	       });	  
		}
	}
});

var listen = function(scriptManager) {
	var listener = new BernaldListener();
	scriptManager.registerListener(EventType.OPNPC1, 2580, listener);
};

var Bernald = {

		startTalk : function (player, npc) {
			chatplayer(player, "No, I'm afraid I don't.", function () {	
				Bernald.BernaldOne(player, npc);
			}); 
		},
		
		BernaldOne : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Oh, that's a shame. I hope I find someone soon, otherwise I could loose all of this year's crop.", function () {	
			}); 
		}
		
		
}