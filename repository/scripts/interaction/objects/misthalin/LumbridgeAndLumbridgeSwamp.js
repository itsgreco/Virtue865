var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
			case 69776://///////////sign posts
			api.sendMessage(player, "North to the Chsmpions' Guild and Varrock.");
			return true;
			case 69778:
			api.sendMessage(player, "West to Lumbridge's mill.");
			return true;
			case 69780:
			api.sendMessage(player, "East to Lumbridge.");
			return true;
			case 69782:
			api.sendMessage(player, "North to Lumbridge farms.");
			return true;
            case 69783:
			api.sendMessage(player, "South to Lumbridge.");
			return true;
			case 69784:
			api.sendMessage(player, "West to Draynow and Wizards' Tower.");
			return true;
			case 69785:
			case 69790:
			api.sendMessage(player, "East to Al Kharid.");
			return true;
			case 69786:
			api.sendMessage(player, "South to Lumbridge's graveyard/swamp and boat to Daemonheim.");
			return true;
			case 69787:
			api.sendMessage(player, "South-west into Lumbridge Castle.");
			return true;
			case 69788:
			api.sendMessage(player, "North-west to Lumbridge farms.");
			return true;
			case 69789:
			api.sendMessage(player, "North to Varrock.");
			return true;
			case 69791:
			api.sendMessage(player, "West into Lumbridge.");
			return true;/////////////////////end of sign posts
			case 55301:
			api.openCentralWidget(player, 205, false);
			api.setWidgetText(player, 205, 49, "Combat Winners");	
			api.setWidgetText(player, 205, 48, "EoC p2p Fullout - Wicked Fury<br>EoC p2p 20v20 - Wicked Fury<br>EoC f2p Fullout - Wicked Fury<br>EoC f2p 20v20 - Wicked Fury<br>Legacy p2p Fullout - Wicked Fury<br>Legacy p2p 20v20 - Wicked Fury<br>Legacy f2p Fullout - Titan's Revolution<br>Legacy f2p 20v20 - Wicked Fury<br>");
			api.setWidgetText(player, 205, 53, "Skilling Winners");
			api.setWidgetText(player, 205, 50, "2015 - Summit<br>2015 (Iron) - Ceecs Clan<br>2014 - Hola Amigos<br>2013 - Venimus<br>2012 - Skill Shock<br>2011 - Divination<br>2010 - Divination<br>2009 - Divination");
			api.setWidgetText(player, 205, 54, "Combined Winners");
			api.setWidgetText(player, 205, 51, "2013 - Venimus<br>2012 - Basedin2minutes<br>2011 - Family Unity Network<br>2010 - Basedin2minutes<br>2009 - Wicked Fury");
			api.setWidgetText(player, 205, 55, "Current Winners");
			api.setWidgetText(player, 205, 52, "The Victorious Winners of<br>the 2015 jagex Clan Cup<br> <br> Combat - Wicked Fury<br>Skilling - Summit<br>Iron Skilling - Ceecs Clan");
			return true;
			case 15468://Crate of hammers
			if(api.itemTotal(player, Inv.BACKPACK, 2347)) {
			mesbox(player, "You already have a hammer.", function () {
		    });	
			} else {
		    api.addCarriedItem(player, 2347,1);
			chatobj(player, 2347, "You take a hammer from the crate.", function () {	
	     	});
			} 
	        return true;
			case 47713://Rocks (Quest The Restless Ghost)
			mesbox(player, "There's nothing there of any use to you.", function () {
			});
		    return true;	
			case 86431://Old mine entrance(Ham hidout)
			
			// make sure varbit is  api.setVarBit(player, 303, 1);  befor you can tele in
		    api.teleportEntity(player, 3149, 9652, 0);
		    // api.setVarBit(player, 303, 0); 
		    
	        return true;
			case 91021://dark hole under tree
			
		    //what it will do here
		    
	        return true;
			case 2409://Swamp Tree
			
		   //what it will do here
		    
	        return true;
			case 47721:// Prized dairy cow (Quest Cook's Assistant)
			if(questApi.isStarted(player, 6) && !questApi.isFinished(player, 6)) {	
			if(api.itemTotal(player, Inv.BACKPACK, 15413)) {
			if(api.itemTotal(player, Inv.BACKPACK, 1925)) {
			api.sendMessage(player, "You've already got some top-quality milk; you should take it to the cook.");
			} else {
			api.sendMessage(player, "You'll need an empty bucket to collect the milk.");
			}
			} else {
			if(api.itemTotal(player, Inv.BACKPACK, 1925)) {
			api.runAnimation(player, 2305, function () {	
			api.delCarriedItem(player, 1925,1);
			api.addCarriedItem(player, 15413,1);
			api.sendMessage(player, "You milk the cow for top-quality milk.");
			});
			} else {
			api.sendMessage(player, "You'll need an empty bucket to collect the milk.");
			}
			}
			} else {	
			if(api.itemTotal(player, Inv.BACKPACK, 1925)) {
			mesbox(player, "If you're after ordinary milk, you should use an ordinary dairy cow.");
			} else {
			api.sendMessage(player, "You'll need an empty bucket to collect the milk.");
			}			
			}
			return;
			case 8689://dairy cow
			if(api.itemTotal(player, Inv.BACKPACK, 1925)) {
			api.runAnimation(player, 2305, function () {	
			api.delCarriedItem(player, 1925,1);
			api.addCarriedItem(player, 1927,1);
			api.sendMessage(player, "You milk the cow.");
			});
			} else {
			api.sendMessage(player, "You'll need an empty bucket to collect the milk.");
			}
            return;
			default:
			return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [8689,47721,55301,15468,47713,86431,91021,2409,69776,69778,69780,69782,69783,69784,69785,69786,69787,69788,69789,69790,69791];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};