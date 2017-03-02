var ItemListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		var player = args.player;
		var item = args.item;
		var slot = args.slot;
		switch (objTypeId) {
		case 18645:
        chatplayer(player, "NEUTRAL", "Hmm... 'Darren Lightfinger, Chancellor of the Lumbride<br> Guild of Thieves, requests you presence at the First<br> Annual Selection of Appointees.'", function () {
	    chatplayer(player, "NEUTRAL", "'If you have ever dreamed of making a name for yourself,<br> and macking your fortune at the same time, now is the<br> best opportunity you will ever have!'", function () {
		chatplayer(player, "NEUTRAL", "'The world-renowned Lumbride Guild of Thieves is<br> recruiting new members to be shown a new world of profit<br> and derring-do.'", function () {
		chatplayer(player, "NEUTRAL", "'Commissions, fame and the adulation of your peers and<br> of the opposite sex will be your fate as a Successful<br> applicant,'", function () {
		chatplayer(player, "NEUTRAL", "'and your life will never again be the same!'", function () {
		chatplayer(player, "NEUTRAL", "It says to apply at the Lumbride Guildhouse. Wonder<br> where that is...", function () {
		});		
		}); 
		}); 
		});
		});
		}); 
		return;
		default:
		api.sendMessage(player, "Unhandled item: "+item);
		return;
		}
	}
});


/* Listen to the item ids specified */
var listen = function(scriptManager) {
	var ids = [18645];
	var itemListener = new ItemListener();
	for (var i in ids) {
		scriptManager.registerListener(EventType.OPHELD1, ids[i], itemListener);
	}
}
