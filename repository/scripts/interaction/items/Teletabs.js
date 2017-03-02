var TeleTabs = {
 	    VarrockTele : {
		itemID : 8007,
		destination : api.getCoords(3212, 3424, 0)
	    },
	    LumbridgeTele : {
		itemID : 8008,
		destination : api.getCoords(3222, 3218, 0)
	    },		    
        FaladorTele : {
		itemID : 8009,
		destination : api.getCoords(2965, 3379, 0)
	    },
		CamelotTele : {
		itemID : 8010,
		destination : api.getCoords(2757, 3477, 0)
	    },
		ArdougneTele : {
		itemID : 8011,
		destination : api.getCoords(2661, 3303, 0)
	    },
		WatchtowerTele : {
		itemID : 8012,
		destination : api.getCoords(2549, 3112, 0)
	    },
		HouseTele : {
		itemID : 8013,
		destination : api.getCoords(2955, 3224, 0)
	    },
		GodwarsTele : {
		itemID : 31665,
		destination : api.getCoords(2886, 5309, 0)
	    }		
};

var ItemListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		var player = args.player;
		var item = args.item;
		var slot = args.slot;
		startteletab(player, item, slot);
	}
});
/* Listen to the item ids specified */
var listen = function(scriptManager) {
	var ids = [8007, 8008, 8009, 8010,8011, 8012,8013, 31665];
	var itemListener = new ItemListener();
	for (var i in ids) {
		//Bind option one on all teleport tablets to this listener
		scriptManager.registerListener(EventType.OPHELD1, ids[i], itemListener);
	}
}

function startteletab (player, item, slot) {
	if (api.isPaused(player)) {
		return false;
	}
	var teletab = forteletab(player, item);
	if (teletab == null) {
		return;
	}
	api.delCarriedItem(player, teletab.itemID, 1, slot);
	var frame = 0;
	var Action = Java.extend(Java.type('org.virtue.game.entity.player.event.PlayerActionHandler'), {	
			process : function (player) {
			if (frame === 0) {
				api.freezeEntity(player, 7);
				api.setSpotAnim(player, 1, 1680);
				api.runAnimation(player, 9597);
			} else if (frame == 1) {//Actually moving the player
			api.runAnimation(player, -1);
           api.runAnimation(player, 4731);				
			} else if (frame == 3) {
				api.teleportEntity(player, teletab.destination);
			} else if (frame == 4) {
				api.runAnimation(player, 9598);
			}
			frame++;
			return false;
		},
		stop : function (player) {
			api.stopAnimation(player);
			api.clearSpotAnim(player, 1);
		}
	});
	player.setAction(new Action());
}


//Call correct teletab name
function forteletab(player, item) {
	var teletab;
	for (ordial in TeleTabs) {
		teletab = TeleTabs[ordial];
		if (teletab.itemID == item.getID()) {
			return teletab;
		}
	}
	return null;
} 