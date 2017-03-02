
var Spots = {
		NORMAL : {
	        level : 1,
	        xp : 25,
	        catches : [317],
	        catchLevels : [1],
	        baseTime : 20,
	        randomTime : 10,
	        spotID : 1341,
	        respawnDelay : 8,
	        randomLife : 0
	    },
	    RIVER_LURE : {
	    	level : 20,
	        xp : 50,
	        catches : [335, 331],
	        catchLevels : [20, 30],//TODO: Fix levels and times
	        baseTime : 20,
	        randomTime : 15,
	        spotID : 329,
	        respawnDelay : 8,
	        randomLife : 0
	    },
	    RIVER_BAIT : {
	    	level : 25,
	        xp : 60,
	        catches : [349],
	        catchLevels : [25],
	        baseTime : 20,
	        randomTime : 20,
	        spotID : 329,
	        respawnDelay : 8,
	        randomLife : 0
	    }
};

var Tool = {
	SMALL_FISHING_NET : {
		level : 1,
		time : 5,
		anim : 24930,
		itemID : 303
	},
	FISHING_ROD : {
		level : 1,
		time : 5,
		anim : 24934,
		itemID : 307
	}
};

var NpcListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		startFish(args.player, args.npc);
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new NpcListener();
	
	scriptManager.registerListener(EventType.OPNPC1, 233, listener);//Bait
	

	scriptManager.registerListener(EventType.OPNPC1, 329, listener);//Lure
	scriptManager.registerListener(EventType.OPNPC3, 329, listener);//Bait
};

function startFish (player, npc, option) {
	var spots = forSpots(npc.getID(), option);
	var tool = forTool(player);
	if (api.isPaused(player)) {
		return false;
	}
	if (tool == null) {
		api.sendMessage(player, "You need a fishing item to fish here.");
		return;
	}
	if (api.getStatLevel(player, Stat.FISHING) < spots.level) {
		api.sendMessage(player, "You require a fishing level of "+spots.level+"  to fish here.");
		return;
	}
	if (api.freeSpaceTotal(player, Inv.BACKPACK) < 1) {
		api.sendMessage(player, "Not enough space in your inventory.");
		return;
	}
	if (hasDeepFishing && deepFishing) {
		api.runAnimation(player, 17084);
	} else if (hasArcaneFishing && arcaneFishing) {
		api.runAnimation(player, 20298);
		api.setSpotAnim(player, 1, 4007);
	} else {
		api.runAnimation(player, tool.anim);
	}
	//api.runAnimation(player, tool.anim);
	api.sendFilterMessage(player, "You cast out your " + api.getItemName(tool.itemID) +"...");
	api.freezeEntity(player, delay+10);
	var delay = getDelay(player, spots, tool);//Calculates the time taken to catch a fish
	var Action = Java.extend(Java.type('org.virtue.game.entity.player.event.PlayerActionHandler'), {	
			process : function (player) {
			if(delay <= 0) {
				fishingSuccess(player, spots, npc);
				return true;
			}
			delay--;
			return false;
		},
		stop : function (player) {
			api.stopAnimation(player);
		}
		
	});
	player.setAction(new Action());
}

function fishingSuccess (player, spots, npc) {
	api.addExperience(player, Stat.FISHING, spots.xp, true);
	var fishID = getCatch(player, spots);
	api.addCarriedItem(player, fishID, 1);
	api.sendFilterMessage(player, "You catch some " + api.getItemName(fishID) + ".");
}

function getDelay (player, spots, tool) {
	var timer = spots.baseTime - api.getStatLevel(player, Stat.FISHING) - Math.floor(Math.random() * tool.time);
	print(timer+"\n");
	if (timer < 1 + spots.randomTime) {
		timer = 1 + Math.floor((Math.random() * spots.randomTime));
		print(timer+"\n");
	}
	return timer;
}

function getCatch (player, spots) {
	var possibleCatches = [];
	for (var i in spots.catchLevels) {
		if (spots.catchLevels[i] <= api.getStatLevel(player, Stat.FISHING)) {
			possibleCatches.push(spots.catches[i]);
		}
	}
	return possibleCatches[Math.floor(possibleCatches.length * Math.random())];
}

function forSpots(id, option) {
	switch (id) {
	case 233:
		return Spots.RIVER_BAIT;
	case 329:
		return option == 1 ? Spots.RIVER_LURE : Spots.RIVER_BAIT;
	}
}

function forTool(player) {
	var tool;
	for (var ordial in Tool) {
		tool = Tool[ordial];//TODO: Run this backwards (from best to worst)
		if (api.itemTotal(player, Inv.BACKPACK, tool.itemID) >= 1) {
			return tool;
		}
	}
	return Tool.SMALL_FISHING_NET;
} 