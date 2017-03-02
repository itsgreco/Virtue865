var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
         chatnpc(player, 16873, "NEUTRAL", "You'll do, "+ api.getName(player) +"!", function () {	  
		 chatplayer(player, "NEUTRAL", "Me? I didn't do anything... Erm, I mean, I'll do for what?", function () {	
		 chatnpc(player, 16873, "NEUTRAL", "Don't worry! I'm not going to abduct you or<br> anything...honest!", function () {	
		 chatnpc(player, 16873, "NEUTRAL", "Nor will any of my other random friends!", function () {	
	     multi5(player, "WHAT WOULD YOU LIKE TO ASK THE MYSTERIOUS OLD MAN?", "Tell me about yourself.", function () {
		 }, "Ask about his 'random' friends.", function () {
		 }, "What's in the trapdoor?", function () {
		 }, "Why mention abductions?", function () {
		 chatnpc(player, 16873, "NEUTRAL", "Oh, sorry - you may not know that about me. It's<br> something I used to do in my old job - there were a few of<br> us.", function () {	
		 chatplayer(player, "NEUTRAL", "You abducted people?", function () {	
		 chatnpc(player, 16873, "NEUTRAL", "You don't have to say it like that! It wasn't sinister; we<br> provided a valuable service!", function () {
		 chatnpc(player, 16873, "NEUTRAL", "We'd give people a little break from whatever it is they<br> were doing, and keep them attentive and active.", function () {
		 chatnpc(player, 16873, "NEUTRAL", "Plus, we'd hand out prizes for those who completed our<br> games.", function () {
         chatnpc(player, 16873, "NEUTRAL", "Well, there was one of us who was a bit sinister. He was<br> evil and lazy, and would toy with his victims like a cat with<br> a ball of wool.", function () {
		 chatnpc(player, 16873, "NEUTRAL", "I hear you can still summon him, if you say three letters<be> in a sequence.", function () {
		 chatplayer(player, "NEUTRAL", "Sounds like an urban myth to me. What letters?", function () {		
         chatnpc(player, 16873, "NEUTRAL", "C...", function () {
         chatnpc(player, 16873, "NEUTRAL", "I...", function () {
         chatnpc(player, 16873, "NEUTRAL", "...", function () {
         chatplayer(player, "NEUTRAL", "And? What's the last letter?", function () {
		 chatnpc(player, 16873, "NEUTRAL", "...", function () {   
		 chatplayer(player, "NEUTRAL", "Say it!", function () {   
		 chatnpc(player, 16873, "NEUTRAL", "S!", function () {    
	     // api.setVarp(player, 3524, 65540);//show cat
		 //api.setSpotAnim(16849, 1, 74);for cat
		 // runAnimation(npc, 8939);
		 // api.setVarp(player, 3524, 32772); //hide  
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
		 }, "I really must be going.", function () {
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
	var listener = new Listener();
	scriptManager.registerListener(EventType.OPNPC1, 16872, listener);
};
