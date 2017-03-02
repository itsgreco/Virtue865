var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {	
		case 100809://A strange portal
		api.setVarBit(player, 30126, 1);
		mesbox(player, "You place your hand in the portal. The area within feels cold to touch.<br> Your hand comes across something solid but as you touch it, it disappears.", function () {
		mesbox(player, "You hear a voice telling you that you have found the statue contained<br> within and that it will be placed in your 15th Anniversary garden, north of<br> Falador.", function () {
		mesbox(player, "You have unlocked /15 statues.", function () {
		});		
		});
		});
		return true;
		case 100811://A strange portal
		api.setVarBit(player, 30127, 1);
		mesbox(player, "You place your hand in the portal. The area within is clammy and sticky.<br> Your hand comes across something solid but as you touch it, it disappears.", function () {
		mesbox(player, "You hear a voice telling you that you have found the statue contained<br> within and that it will be placed in your 15th Anniversary garden, north of<br> Falador.", function () {
		mesbox(player, "You have unlocked /15 statues.", function () {
		});		
		});
		});
		return true;
        case 100812://A strange portal
		api.setVarBit(player, 30128, 1);
		mesbox(player, "You place your hand in the portal. The air within the portal tickles your<br> skin. Your hand comes across something solid but as you touch it, it<br> disappears.", function () {
		mesbox(player, "You hear a voice telling you that you have found the statue contained<br> within and that it will be placed in your 15th Anniversary garden, north of<br> Falador.", function () {
		mesbox(player, "You have unlocked /15 statues.", function () {
		});		
		});
		});
		return true;	
        case 100813://A strange portal
		api.setVarBit(player, 30129, 1);
		mesbox(player, "You place your hand in the portal. The area within feels moist. Your hand<br> comes across something solid but as you touch it, it disappears.", function () {
		mesbox(player, "You hear a voice telling you that you have found the statue contained<br> within and that it will be placed in your 15th Anniversary garden, north of<br> Falador.", function () {
		mesbox(player, "You have unlocked /15 statues.", function () {
		});		
		});
		});
		return true;		
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [100809,100811,100812,100813];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};