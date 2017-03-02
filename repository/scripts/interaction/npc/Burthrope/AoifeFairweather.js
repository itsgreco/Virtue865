//Npc id - 18203

var AoifeFairweatherListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "NEUTRAL", "Hi there! Are you interested in helping with a new discovery?", function () {
			chatplayer(player, "NEUTRAL", "What is it?", function () {
			chatnpc(player, npc, "NEUTRAL", "Since the beginning of the Sixth Age, a strange energy has been appearing throughout Gielinor", function () {
			chatnpc(player, npc, "NEUTRAL", "My sister, Orla, has set up a camp beside the Lumbridge crater as a base for research!", function () {
				chatnpc(player, npc, "NEUTRAL", "They're always looking for volunteers to help. If you're interested, you should definitely pay her a visit.", function () {
					chatplayer(player, "NEUTRAL", "Thanks, I'll check it out.", function () {
						
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
	var listener = new AoifeFairweatherListener();
	scriptManager.registerListener(EventType.OPNPC1, 18203, listener);
};
