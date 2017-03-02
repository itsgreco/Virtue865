/**
 *  @author Greco
 */

var PompousMerchantListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "angry", "Step aside, you low-born oaf!", function () {
				PompousMerchant.startTalk(player, npc);
	       });	  
		}
	}
});

var listen = function(scriptManager) {
	var listener = new PompousMerchantListener();
	scriptManager.registerListener(EventType.OPNPC1, 14911, listener);
};

var PompousMerchant = {

		startTalk : function (player, npc) {
			chatplayer(player, "Hey! Who are you calling names?", function () {	
				PompousMerchant.PompousOne(player, npc);
			}); 
		},
		
		PompousOne : function (player, npc) {
			chatnpc(player, npc, "angry", "I have no idea. Some 'hero' I would guess.", function () {	
				PompousMerchant.PlayerOne(player, npc);
			}); 
		},
		
		PlayerOne : function (player, npc) {
			chatplayer(player, "Look you..", function () {	
				PompousMerchant.PompousTwo(player, npc);
			}); 
		},
		
		PompousTwo : function (player, npc) {
			chatnpc(player, npc, "angry", "Hush. I have far too much money to listen to the idle prattle of menials.<br> Begone!", function () {	
			}); 
		}
		
		
}