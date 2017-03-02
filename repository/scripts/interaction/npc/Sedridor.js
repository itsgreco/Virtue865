var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			switch (npc.getID()) {
			case 14723:	
			chatnpc(player, npc, "NEUTRAL", "Oh my, another early attendee. I'm sorry, but the<br> banquet isn't quite ready yet. Could you wait in the library<br> with the guild wizards, please?", function () {
			chatplayer(player, "NEUTRAL", "Don't worry Sedridor, Sinterklaas let me through the<br> portal early to help.", function () {
			chatnpc(player, npc, "NEUTRAL", "Oh thank the elements! We may just get things done in<br> time with your help.", function () {
			chatplayer(player, "NEUTRAL", "Have the guild wizards not offered to help?", function () {
			chatnpc(player, npc, "NEUTRAL", "No, sadly I feel that they have come here early to<br> criticise. That is all they have done so far, anyway.", function () {
			chatplayer(player, "NEUTRAL", "Well that isn't very helpfull!", function () {
			chatnpc(player, npc, "NEUTRAL", "No it isn't they are used to being in control. This is<br> our first year hosting the banquet, it is usually hosted at<br> the guild.", function () {
			chatnpc(player, npc, "NEUTRAL", "I asked if the wizards of the tower could host it this year<br> for a change, and most of the wizards of Gielinor were<br> fine with it.", function () {
			chatnpc(player, npc, "NEUTRAL", "The guild wizards didn't like us stealing their limelight very<br> much and have been very sceptical ever since.", function () {
			chatnpc(player, npc, "NEUTRAL", "I'm sad to say that preparations have not been going well<br> so far, either. If we don't get everything just right we will<br> never hear the end of it!", function () {
            chatplayer(player, "NEUTRAL", "Sounds like you have got yourselves into a bit of a pickle<br> here. Well, I'm here to help, what do you need help with?", function () {
			chatnpc(player, npc, "NEUTRAL", "Well, in the basement Isidor and chefs Kris and Kringle<br> need some help.", function () {	
			chatnpc(player, npc, "NEUTRAL", "Isidor told me that he needs help making the basement<br> more festive with snow. He mentioned a new device of his<br> that explodes placing snow everywhere.", function () {	
			chatnpc(player, npc, "NEUTRAL", "He is far too busy making sure that all the wizards have<br> portals to get home quickly after they have had too many<br> Wizard Mind Bombs.", function () {	
			chatnpc(player, npc, "NEUTRAL", "We have hired some excellent chefs to cook the banquet.<br> They are not wizards, but they have a very good<br> reputation.", function () {		
			chatnpc(player, npc, "NEUTRAL", "I received word that they need a runner to get them<br> some special ingredients. Speak to the head chef Kringle<br> in the kitchen in the basement.", function () {		
			chatnpc(player, npc, "NEUTRAL", "On the top floor Wizard Whitezag and Wizard Sioncorn<br> need some help.", function () {	
			chatnpc(player, npc, "NEUTRAL", "I have been hearing some strange noises and commotion<br> on the top floor of the tower and past experiences tell me<br> that it is probably Wizard Whitezag. Could you check up on<br> him for me please?", function () {	
			chatnpc(player, npc, "NEUTRAL", "Wizard Sioncorn has told me that she is having some<br> trouble getting the decorations for the banquet. She<br> means well but she is rather accident prone so if you<br> could help her that would be very much appreciated.", function () {	
			});	
			});	
			});
			});
			});
			});
			});
			});
			});
			});
			});
			});
            });
			});	
			});	
			});	
			});	
			});	
			});	
		   return;
		   case 14744:	
		   chatplayer(player, "NEUTRAL", "Merry Christmas Sedridor!", function () {
		   chatnpc(player, npc, "NEUTRAL", "Merry Christmas "+ api.getName(player)+"!", function () {	
		   chatnpc(player, npc, "NEUTRAL", "Thank you for your help young adventurer. I think we<br> proved to the guild wizards that we are capable of macking<br> a rather good banquet!", function () {	
		   });	
		   });
		   });
		   return;
			}
		}	
		
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var npcs = [14723,14744];
	var listener = new Listener();
	for (var i in npcs) {
	scriptManager.registerListener(EventType.OPNPC1, npcs[i], listener);
	}
};
