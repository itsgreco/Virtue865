/**
 *  @author Greco
 */

var JatixListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "NEUTRAL", "Hello, how can I help you?", function () {
				Jatix.maintalk(player, npc);
	       });	  
		} else if (event == EventType.OPNPC3) {
			Jatix.openshop(player);
		}
	}
});

var listen = function(scriptManager) {
	var listener = new JatixListener();
	scriptManager.registerListener(EventType.OPNPC1, 587, listener);
	scriptManager.registerListener(EventType.OPNPC3, 587, listener);
};

var Jatix = {
		
		maintalk : function (player, npc) {
			multi3(player, "CHOOSE AN OPTION", "What are you selling?", function () {		
				Jatix.openshop(player);
			}, "You can't;I'm beyond help.", function () {
				Jatix.jatixone(player, npc);
			}, "I'm okay, thank you.", function () {
				Jatix.jatixtwo(player, npc);
			});
			return;
		},
		
		openshop : function (player) {
			api.setVarp(player, 304, Inv.JATIXS_HERBLORE_SHOP);
			api.setVarc(player, 2360, "Jatix's Herblore Shop");
			api.openCentralWidget(player, 1265, false);
		},

		jatixone : function (player, npc) {
			chatplayer(player, "You can't;I'm beyond help.", function () {	
			}); 
		},
		
		jatixtwo : function (player, npc) {
			chatplayer(player, "I'm okay, thank you.", function () {	
			}); 
		}
		
		
}