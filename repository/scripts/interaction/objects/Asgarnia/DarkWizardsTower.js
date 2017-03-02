var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
		case 2867://Potted plant (Quest Witch's House)
		if (map_members == false){
		api.sendMessage(player, "You need to be on a member's world to use this feature.", function () {	
		});
		} else if(api.itemTotal(player, Inv.BACKPACK, 2409)) {
        api.sendMessage(player, "You don't find anything interesting.");
		} else {
		mesbox(player, "You find a key hidden under the flower pot.", function () {
		api.addCarriedItem(player, 2409,1);
		});
		}
		return true;
		case 2861://Door (Quest Witch's House)
		if (map_members == false){
		api.sendMessage(player, "You need to be on a member's world to use this feature.", function () {	
		});
		} else if(api.itemTotal(player, Inv.BACKPACK, 2409)) {
		chatplayer(player, "NEUTRAL", "It would be rude to break into this house.", function () {	
		});
		} else {
        api.sendMessage(player, "This door is locked.");
		}
	    return true;
        case 24842://Manhole (Quest Witch's House)
		if (map_members == false){
		api.sendMessage(player, "You need to be on a member's world to use this feature.", function () {	
		});
		} else {
        api.sendMessage(player, "The cover won't budge. It seems to be locked.");
		}
	    return true;
        default:
		return false;
		}		
	}
});



var Itemonobject = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
    invoke : function (event, locTypeId, args) {
        var player = args.player;
        var invSlot = args.useslot;
		var item = args.useitem;
		var itemId = api.getId(item);
        switch (itemId) {
		case 2409:
		chatplayer(player, "NEUTRAL", "It would be rude to break into this house.", function () {	
		});
		return true;	
		default:
        api.sendMessage(player, "Nothing interesting happens.");
	     return false; 
       }
    }
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [2861,2867,24842];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
	var ItemonobjectListener = new Itemonobject();
	scriptManager.registerListener(EventType.OPLOCU, 2861, ItemonobjectListener);
	

	
	
};