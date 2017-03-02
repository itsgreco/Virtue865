var fill = {
        VIAL : {
			empty : 229,
			full : 227
		},
		BOWL : {
			empty : 1923,
			full : 1921
		}
};


var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;		
		var invSlot = args.useslot;
		var item = args.useitem;
		var itemId = api.getId(item);
		switch (itemId) {	
		case 229:
		case 1923:
		runAnimation(player, 832, function () {
		api.delCarriedItem(player, itemId, 1, args.slot);
		api.addCarriedItem(player, itemId-2 ,1);
		api.sendMessage(player, "You fill the "+api.getItemName(item)+" with water");
		});
		return true;
		default:
        api.sendMessage(player, "Nothing interesting happens.");
	     return false;
		}
	
	},
});
		
var listen = function(scriptManager) {	
	var locs = [24265,3460,24214,24161,35762,23920,43095,26945,43896,30820,5086,45299,46015,46019
	,14352,14353,87946,36781,36971,76531,40063,43096,9684,43097,43099,99779,11661,66664,67063,67064
	,8699,26966];
	var listener = new Listener();	
	for (var i in locs) {
	scriptManager.registerListener(EventType.OPLOCU, locs[i], listener);
	}
};