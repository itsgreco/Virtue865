var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "NEUTRAL", "Welcome to the Wizards' Tower, adventurer.", function () {
			multi2(player, "CHOOSE AN OPTION", "What can i do here?", function () {		
			chatnpc(player, npc, "NEUTRAL", "It was wizards of the tower who discovered the Rune<br> Mysteries - the secret of creating runes out of rune<br> essence. Archmage Sedridor will teleport adventurers to<br> the essence mine. His office is on the second floor.", function () {
			chatnpc(player, npc, "NEUTRAL", "Recently a wizard called Finix descovered an alternative<br> runecrafting method. Speak to him on the roof if you're<br> interested.", function () {
			chatnpc(player, npc, "NEUTRAL", "If you'd like to practice combat magic, you might want to<br> attack the spellwisps outside the tower. I believe there's a<br> cluster of them to the west of here.", function () {
			});
			});
			});
			}, "I'm fine, thanks.", function () {	
	       });	
		   });	  
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new Listener();
	scriptManager.registerListener(EventType.OPNPC1, 16186, listener);
};
