/**
 *  @author Greco
 */

var JackOvalListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "NEUTRAL", "You'd be suprised how much the people of Burthorpe rely on crafting goods. Want to give it a try?", function () {
				JackOval.maintalk(player, npc);
	       });	  
		} else if (event == EventType.OPNPC3) {
			JackOval.jackovalthree(player, npc);
		} else if (event == EventType.OPNPC5) {
			JackOval.jackovalone(player, npc);
		}
	}
});

var listen = function(scriptManager) {
	var listener = new JackOvalListener();
	scriptManager.registerListener(EventType.OPNPC1, 14877, listener);
	scriptManager.registerListener(EventType.OPNPC3, 14877, listener);
	scriptManager.registerListener(EventType.OPNPC5, 14877, listener);
};

var JackOval = {
		
		maintalk : function (player, npc) {
			multi3(player, "CHOOSE AN OPTION", "I need Crafting supplies.", function () {
				JackOval.jackovalone(player, npc);
				//JackOval.openshop(player);
			}, "I need you to tan some leather for me.", function () {
				HideTanning.handleTanning(player, npc);
			}, "What crafting recommendations do you have for me?", function () {
				JackOval.jackovaltwo(player, npc);
			});
			return;
		},
		
		openshop : function (player) {
			api.setVarp(player, 304, Inv.DOMMIKS_CRAFTING_STORE_P2P);
			api.setVarc(player, 2360, "Jack Oval's Crafting Shop");
			api.openCentralWidget(player, 1265, false);
		},

		jackovalone : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "My Crafting supplies shop will be available soon.", function () {	
			}); 
		},
		
		jackovaltwo : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "You'd be suprised how much the people of Burthorpe rely on crafting goods.<br> Want to give it a try?", function () {	
				JackOval.maintalk(player, npc);
			}); 
		},
		
		jackovalthree : function (player, npc) {
			chatnpc(player, npc, "Challenges are not available at this time.", function () {	
			}); 
		},
		
		
}