var usingRing;
var ItemListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		var player = args.player;
		var item = args.item;
		var slot = args.slot;
		if(event == EventType.OPHELD1) {
		switch (objTypeId) {
		case 36093://Large dungeoneering token box
		api.sendMessage(player, "<col=00ff00>You gain 3,970 dungeoneering tokens. You now have "+ api.getVarp(player, 1097) +" tokens.");
		//todo add tokens
		return;	
		case 19832://Bone brooch
		api.setSpotAnim(player, 1, 2838);
		api.runAnimation(player, 14870, function () {
		player.getModel().setRender(Render.NPC);
		player.getModel().setNPCId(12373);
		player.getModel().refresh();
		api.setRenderAnim(player, 520);// looks like it works
		});
		api.setVarc(player, 1727, 1);
		api.openOverlaySub(player, 1008, 375, false);
		return;		
		case 11950://Snow globe
		api.openCentralWidget(player, 659, false);
		return;	
		case 22325://Dance floor manual (haloween 2011)
		api.openCentralWidget(player, Dance_Floor_Pattern_Sequencing_Interface, false);
		return;	
		case 20078://Heimland games souvenir
	//	api.runAnimation(player, 12913);
		//api.runAnimation(player, 15105);
		return;	
		case 28134://sparkler
		api.runAnimation(player, 20139);
		api.setSpotAnim(player, 1, 3953);
		api.delCarriedItem(player, objTypeId, 1);
		return;			
	    case 6865://marionette blue jump
		api.runAnimation(player, 3003);
		api.setSpotAnim(player, 1, 511);
		return;	
		case 6866://marionette green jump
		api.runAnimation(player, 3003);
		api.setSpotAnim(player, 1, 515);
		return;
		case 6867://marionette red jump
		api.runAnimation(player, 3003);
		api.setSpotAnim(player, 1, 507);
		return;
		case 4079://Yo-yo play
		api.runAnimation(player, 1457);
		return;	
		case 6722://Zombie head talk at
		api.playerForceSay(player, "Alas!", false);
		api.runAnimation(player, 2840);
		return;	
		}
		} else if (event == EventType.OPHELD2) {
		switch (objTypeId) {
	//	case 4565:
	//		api.setRenderAnim(player, 594);
	//	return;	
		case 6865://marionette blue walk
		api.runAnimation(player, 3004);
		api.setSpotAnim(player, 1, 512);
		return;	
		case 6866://marionette green walk
		api.runAnimation(player, 3004);
		api.setSpotAnim(player, 1, 516);
		return;
		case 6867://marionette red walk
		api.runAnimation(player, 3004);
		api.setSpotAnim(player, 1, 508);
		return;	
		case 4079://Yo-yo loop
		api.runAnimation(player, 1458);
		return;	
        case 7927://EasterRing
		renderEasterRing(player);
		return;
		case 6722://Zombie head Display
		api.playerForceSay(player, "Mwuhahahaha!", false);
		api.runAnimation(player, 2844);
		return;	
		}
		} else if (event == EventType.OPHELD3) {
		switch (objTypeId) {
		case 14742://Lily of the valley
		api.runAnimation(player, 11622);
		return;
		case 6865://marionette blue bow
		api.runAnimation(player, 3005);
		api.setSpotAnim(player, 1, 513);
		return;	
		case 6866://marionette green bow
		api.runAnimation(player, 3005);
		api.setSpotAnim(player, 1, 517);
		return;
		case 6867://marionette red bow
		api.runAnimation(player, 3005);
		api.setSpotAnim(player, 1, 509);
		return;		
		case 4079://Yo-yo loop
		api.runAnimation(player, 1459);
		return;	
        case 15353://eek play with
		api.runAnimation(player, 12490);
        api.setSpotAnim(player, 1, 2178);
		return;	
		}
		} else if (event == EventType.OPHELD4) {
        switch (objTypeId) {
		case 6865://marionette blue dance
		api.runAnimation(player, 3006);
		api.setSpotAnim(player, 1, 514);
		return;	
		case 6866://marionette green dance
		api.runAnimation(player, 3006);
		api.setSpotAnim(player, 1, 518);
		return;
		case 6867://marionette red dance
		api.runAnimation(player, 3006);
		api.setSpotAnim(player, 1, 510);
		return;	
		case 4079://Yo-yo crazy
		api.runAnimation(player, 1460);
		return;	
		case 4566://Rubber chicken dance
		api.runAnimation(player, 1835);
		return;
	    }
		} else if (event == EventType.OPWORN1) {
		switch (objTypeId) {
		case 20084://Golden hammer
		api.runAnimation(player, 15150);
		return;	
		case 20077://Salty claws hat
		api.runAnimation(player, 329);
		return;	
		case 15426://Candy cane
		api.runAnimation(player, 12664);
		return;	
		case 14742://Lily of the valley
		api.runAnimation(player, 11622);
		return;
		case 12645://Chocatrice cape
		api.runAnimation(player, 8903);
        api.setSpotAnim(player, 1, 1566);
		return;	
        case 15673://Squirrel Ears Summon Minion	
		return;	
		case 10507:// Reindeer hat prance   
		api.runAnimation(player, 5059);
       // api.setSpotAnim(player, 1, 263);
		return;
		}
		} else if (event == EventType.OPWORN2) {
		switch (objTypeId) {
		case 20084://Golden hammer
		api.runAnimation(player, 15149);
		 api.setSpotAnim(player, 1, 2953);
		return;	
        case 15673://Squirrel Ears juggle
		api.runAnimation(player, 12265);
        api.setSpotAnim(player, 1, 2145);
		return;	
		}

	  }
	}
});





/* Listen to the item ids specified */
var listen = function(scriptManager) {
	var ids = [ 7927,6722,4566,15353,4079,6865,6866,6867,14742,22325,11950,19832,28134,36093];
	var itemListener = new ItemListener();
	for (var i in ids) {
		scriptManager.registerListener(EventType.OPHELD1, ids[i], itemListener);
		scriptManager.registerListener(EventType.OPHELD2, ids[i], itemListener);
		scriptManager.registerListener(EventType.OPHELD3, ids[i], itemListener);
		scriptManager.registerListener(EventType.OPHELD4, ids[i], itemListener);
	}
	var wornids = [ 15673,10507,12645,14742,20084,20077,15426 ];
	for (var i in wornids) {
		scriptManager.registerListener(EventType.OPWORN1, wornids[i], itemListener);
		scriptManager.registerListener(EventType.OPWORN2, wornids[i], itemListener);
	}	
	
}

function renderEasterRing(player) {
	var eggType = [3689, 3690, 3691, 3692, 3693, 3694];
	var idx = Math.floor(Math.random()*eggType.length);
	var eggPick = eggType[idx];
	if(usingRing) {
		usingRing = false;
	//	player.unlock();
		player.getModel().setRender(Render.PLAYER);
		player.getModel().refresh();
		//api.sendMessage(player, "Not using");
	} else {
		usingRing = true;
		//player.lock();
		player.getModel().setRender(Render.NPC);
		player.getModel().setNPCId(eggPick);
		player.getModel().refresh();
		api.sendMessage(player, "You morphed into an magical egg! Re-click the ring to morph back.");
	}
}
