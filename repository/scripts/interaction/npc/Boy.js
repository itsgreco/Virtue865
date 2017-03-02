var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		   if (map_members == false){
		   chatplayer(player, "NEUTRAL", "Hello young man.", function () {
		   chatnpc(player, npc, "NEUTRAL", "Leave me alone...", function () {	
	       });	
		   });
		   } else if (api.getVarp(player, 2276) == 1 || api.getVarp(player, 2276) == 2 || api.getVarp(player, 2276) == 3) {
		   chatnpc(player, npc, "NEUTRAL", "Have you got my ball back yet?", function () {
           chatplayer(player, "NEUTRAL", "Not yet.", function () {	
           chatnpc(player, npc, "NEUTRAL", "Well, it's in the shed in that garden.", function () {		   
	       });
		   });
		   }); 
		   } else {
		   chatplayer(player, "NEUTRAL", "Hello young man.", function () {
		   mesbox(player, "The boy sobs.", function () {  
		   multi2(player, "SELECT AN OPTION", "What's the matter?", function () {	
           chatplayer(player, "NEUTRAL", "What's the matter?", function () {
           chatnpc(player, npc, "NEUTRAL", "I've kicked my ball over that hedge, into that garden! The<br> old lady who lives there is scary... She's locked the ball in<br> her wooden shed! Can you get my ball back for me please?", function () {			   
           multi2(player, "SELECT AN OPTION", "Ok, I'll see what i can do.", function () {	
		   chatplayer(player, "NEUTRAL", "Ok, I'll see what i can do.", function () {
		   chatnpc(player, npc, "NEUTRAL", "Thanks mister!", function () {
		   api.setVarp(player, 2276, 1);
		   });
		   });
           }, "Get it back yourself.", function () {
		   chatplayer(player, "NEUTRAL", "Get it back yourself.", function () {
		   chatnpc(player, npc, "NEUTRAL", "You're a meany!", function () {   
		   mesbox(player, "The boy starts crying again.", function () {  
		   });
		   });
		   });
		   });
		   });
           });	   
	       }, "Well if you're not going to answer. I'll go.", function () {
		   chatplayer(player, "NEUTRAL", "Well if you're not going to answer. I'll go.", function () {
		   mesbox(player, "The boy sniffs slightly.", function () { 	   
	       });
		   });
		   });	   
		   });
		   });	 
		  }            
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new Listener();
	scriptManager.registerListener(EventType.OPNPC1, 895, listener);
};
