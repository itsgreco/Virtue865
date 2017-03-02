/**
 * @author Sundays211
 * @author Greco
 */

var OpHeldUseListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		var player = args.player;		
		var itemId = api.getId(args.item);
		var useitemId = api.getId(args.useitem);
		var slot = args.slot;
		
		var validUse = false;
		var product = null;
		switch (itemId) {
		case 12539://Grenwall spikes
		case 52://Arrow shaft
			if (CraftDialog.structContainsItem(14981, useitemId)) {
				validUse = true;
				itemId = 52;
				product = 53;
			}
			break;
		case 314://Feather
		case 10087://Stripy feather
		case 10088://Red feather
		case 10089://Blue feather
		case 10090://Yellow feather
		case 10091://Orange feather
		case 11525://Wimpy feather
			if (CraftDialog.structContainsItem(14983, useitemId)) {
				validUse = true;
				itemId = 314;
				product = 53;
			}
			break;
		}
		
		if (validUse) {
			Fletching.handleCraft(player, itemId, slot, product);
		} else {
			defaultOpHeldUseHandler(player, args);
		}
	}
});

var OpHeldListner = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		
		Fletching.handleCraft(player, api.getId(args.item), args.slot);
	}
});

/* Listen to the item ids specified */
var listen = function(scriptManager) {
	Fletching.initMaterialLookup();
	Fletching.initProductLookup();
	var items = [39,40,41,48,50,52,54,56,58,60,62,64,66,68,70,72,1777,21600,29734,29736];
	var itemsu = [52,314];
	var opHeldListener = new OpHeldListner();
	var opHeldUseListener = new OpHeldUseListener();
	for (var i in items) {
	scriptManager.registerListener(EventType.OPHELD1, items[i], opHeldListener);//
	}
	for (var i in itemsu) {
	scriptManager.registerListener(EventType.OPHELDU, itemsu[i], opHeldUseListener);//
	}
	
};

var Fletching = {
		MaterialType : {
			LOGS : {
				category : 6939,
				categoryNames : 6940,
				text : "You carefully cut the wood into: ",
				animation : 24938
			},
			STRING : {
				category : 6941,
				categoryNames : 6942,
				text : "You carefully string the bow into: ",
				animation : 24952
			},
			ARROW_SHAFT : {
				category : 6943,
				categoryNames : 6944,
				animation : 19516
			},
			ARROW : {
				category : 6945,
				categoryNames : 6946,
				text : "You carefully tip the arrows into: ",
				animation : 19516
			}
		},
		materialLookup : {},
		initMaterialLookup : function () {
			this.materialLookup = {};
			var that = this;
			function addMaterial (id, category, type) {
				that.materialLookup[id] = {
						"id" : id, 
						"category" : category,
						"type" : type
						};
			}
			//Logs
			addMaterial(1511, 6947, this.MaterialType.LOGS);//Normal logs
			addMaterial(1521, 6949, this.MaterialType.LOGS);//Oak logs
			addMaterial(1519, 6950, this.MaterialType.LOGS);//Willow logs
			addMaterial(6333, 6951, this.MaterialType.LOGS);//Teak logs
			addMaterial(1517, 6952, this.MaterialType.LOGS);//Maple logs
			addMaterial(6332, 6953, this.MaterialType.LOGS);//Mahogany logs
			addMaterial(1515, 6954, this.MaterialType.LOGS);//Yew logs
			addMaterial(1513, 6955, this.MaterialType.LOGS);//Magic logs
			addMaterial(21600, 6956, this.MaterialType.LOGS);//Blisterwood logs
			addMaterial(29556, 7994, this.MaterialType.LOGS);//Elder logs
			
			//Arrow shafts/Feathers
			addMaterial(52, 6966, this.MaterialType.ARROW_SHAFT);//Arrow shafts
			addMaterial(314, 6966, this.MaterialType.ARROW_SHAFT);//Feathers
			
			//Arrow tips
			addMaterial(39, 6963, this.MaterialType.ARROW);
			addMaterial(40, 6963, this.MaterialType.ARROW);
			addMaterial(41, 6963, this.MaterialType.ARROW);
			
			//Stringing
			addMaterial(1777, 6958, this.MaterialType.STRING);
			addMaterial(48, 6958, this.MaterialType.STRING);
			addMaterial(50, 6958, this.MaterialType.STRING);
			addMaterial(54, 6958, this.MaterialType.STRING);
			addMaterial(56, 6958, this.MaterialType.STRING);
			addMaterial(58, 6958, this.MaterialType.STRING);
			addMaterial(60, 6958, this.MaterialType.STRING);
			addMaterial(62, 6958, this.MaterialType.STRING);
			addMaterial(64, 6958, this.MaterialType.STRING);
			addMaterial(66, 6958, this.MaterialType.STRING);
			addMaterial(68, 6958, this.MaterialType.STRING);
			addMaterial(70, 6958, this.MaterialType.STRING);
			addMaterial(72, 6958, this.MaterialType.STRING);
			addMaterial(29736, 6958, this.MaterialType.STRING);
			addMaterial(29734, 6958, this.MaterialType.STRING);
			
			
			
		},
		productLookup : {},
		initProductLookup : function () {
			this.productLookup = {};
			var that = this;
			function addProduct (id, animation, text) {
				that.productLookup[id] = {"id":id, "animation":animation, "text":text};
			}

			//Used when the standard animation, specified in MaterialType, isn't appropriate for this product
			addProduct(839, 24952);//shieldbow
			addProduct(841, 24945);//shortbow
			addProduct(845, 24953);//oak shieldbow
			addProduct(843, 24946);//oak shortbow
			addProduct(847, 24954);//willow shieldbow
			addProduct(849, 24947);//willow shortbow
			addProduct(851, 24955);//maple shieldbow
			addProduct(853, 24948);//maple shortbow
			addProduct(855, 24956);//yew shieldbow
			addProduct(857, 24950);//yew shortbow
			addProduct(859, 24957);//Magic shieldbow 70
			addProduct(861, 24951);//Magic shortbow 72
			addProduct(29611, 24958);//elder shieldbow
			addProduct(29614, 24952);//elder shortbow
			addProduct(53, undefined, "You attach feathers to 15 arrow shafts.");//Headless arrows
		},
		handleCraft : function (player, itemId, slot, productId) {
			var material = this.materialLookup[itemId];
			if (material === undefined) {
				throw "Unsupported material: "+itemId;
			}
			api.setVarp(player, 1168, material.type.category);//Main category
			api.setVarc(player, 2222, material.type.categoryNames);//Category text key
			api.setVarp(player, 1169, material.category);//Sub category
			if (typeof(productId) === "number") {
				api.setVarp(player, 1170, productId);
			}
			api.openCentralWidget(player, 1370, false);
			var that = this;
			var Handler = Java.extend(Java.type('org.virtue.game.content.dialogues.InputEnteredHandler'), {				
				handle: function(value) {
					api.closeCentralWidgets(player);
					productId = api.getVarp(player, 1170);
					var amount = api.getVarBit(player, 1003);
					var productData = that.productLookup[productId];
					if (amount > 0) {
						api.setVarp(player, 1175, productId);
						var animation = productData !== undefined ? productData.animation : material.type.animation;
						var text = productData !== undefined && productData.text !== undefined ? productData.text : material.type.text+configApi.objName(productId);
						CraftProcess.startCrafting(player, amount, animation, text);
					}			
				}			
			});
			api.setInputHandler(player, new Handler());
		}
}