
var Disassembly = {
		categoryLookup : null,
		initCategoryLookup : function () {
			this.categoryLookup = {};
			var that = this;
			function registerCategory (id, materialCount, often, sometimes, rarely, boosted) {
				boosted = boosted === undefined ? false : boosted;
				that.categoryLookup[id] = {"id":id, "materialCount":materialCount, "often":often, "sometimes":sometimes, "rarely":rarely, "boosted":boosted}
			}
			var Material = InventionMaterials.Material;
			registerCategory(22, 1, [Material.SIMPLE], [], [Material.LIVING]);//Logs
			registerCategory(64, 12, [Material.STAVE, Material.TENSILE, Material.FLEXIBLE], [], [Material.PRECISE, Material.DEXTROUS], true);//Shortbow
			registerCategory(3751, 4, [Material.STAVE, Material.TENSILE, Material.FLEXIBLE], [], [Material.PRECISE, Material.STRONG], true);//Shieldbow (u)
			registerCategory(3752, 4, [Material.STAVE, Material.TENSILE, Material.FLEXIBLE], [], [Material.PRECISE, Material.DEXTROUS], true);//Shortbow (u)
			registerCategory(2758, 12, [Material.BASE, Material.BLADE, Material.METALLIC], [], [Material.SHARP, Material.STRONG], true);//2758
		},
		lookupCategory : function (category) {
			if (this.categoryLookup == null) {
				this.initCategoryLookup();
			}
			return this.categoryLookup[category];
		},
		canDisassemble : function (item) {			
			var category = configApi.objCategory(configApi.objUncert(api.getId(item)));
			return this.lookupCategory(category) !== undefined;
		},
		startDisassembly : function (player, item, slot) {
			api.interrupt(player);
			if (!this.canDisassemble(item)) {
				api.sendMessage(player, "You can't disassemble that item (not yet implemented)");
				return;
			}
			var itemId = configApi.objUncert(api.getId(item));
			var total = Math.min(60, api.itemTotal(player, Inv.BACKPACK, api.getId(item)));
			api.setVarc(player, 5123, itemId);
			api.setVarc(player, 5124, 1);
			CraftProcess.openInterface(player, 36365, 10740, total, 2);
			var remaining = total;
			var that = this;
			api.sendMessage(player, "Disassembling: "+configApi.objName(itemId));
			api.setSpotAnim(player, 1, 6003);
			api.runAnimation(player, 27997);
			var xp = that.calculateExperience(itemId);
			var onInterrupt = function () {
				api.closeOverlaySub(player, 1018, true);
			}
			var disassembleItem = function () {
				that.addMaterials(player, itemId);
				api.delItem(player, Inv.BACKPACK, api.getId(item), 1);
				remaining--;
				CraftProcess.setRemaining(player, remaining);
				api.addExperience(player, Stat.INVENTION, xp, true);// * 20				
				if (remaining > 0) {
					api.setSpotAnim(player, 1, 6003);
					api.runAnimation(player, 27997);
					delayFunction(player, 2, disassembleItem, true, onInterrupt);
				}
			};
			delayFunction(player, 2, disassembleItem, true, onInterrupt);			
		},
		
		/**
		 * Gets the level of the item, used to calculate the junk chance & experience gained.
		 * For most items, this is based either off the level to make or gather (logs, bars, ores, etc) or the level to wear/wield.
		 */
		getItemLevel : function (itemId) {
			switch (configApi.objCategory(itemId)) {
			case 22://Logs
				return Woodcutting.getLevelToChop(itemId);
			case 64://Shortbow
				return configApi.objParam(itemId, 23);
			case 3751://Shieldbow (u)
			case 3752://Shortbow (u)
				return Math.floor(configApi.objParam(itemId, 2645) / 2);
			case 2758:
				return configApi.objParam(itemId, 23);
				//return Math.floor(configApi.objParam(itemId, 2645) / 2);
			default:
				return 1;
			}			
		},
		
		analyseItem : function (player, itemId) {
			itemId = configApi.objUncert(itemId);
			var categoryData = this.lookupCategory(configApi.objCategory(itemId));
			if (categoryData === undefined) {
				api.sendMessage(player, "<col=ff0000>That item cannot be disassembled.");
				return;
			}
			api.sendMessage(player, "Item: "+configApi.objName(itemId));
			api.sendMessage(player, "Junk chance: "+this.calculateJunkChance(itemId));
			api.sendMessage(player, "Experience: "+this.calculateExperience(itemId));
			api.sendMessage(player, "Chance for materials: "+categoryData.materialCount);
			api.sendMessage(player, "This may be disassembled into: ");
			for (var material in categoryData.often) {
				api.sendMessage(player, "* "+InventionMaterials.getName(categoryData.often[material])+" (often)");
			}
			for (var material in categoryData.sometimes) {
				api.sendMessage(player, "* "+InventionMaterials.getName(categoryData.often[material])+" (sometimes)");
			}
			for (var material in categoryData.rarely) {
				api.sendMessage(player, "* "+InventionMaterials.getName(categoryData.often[material])+" (rarely)");
			}
			api.openCentralWidget(player, 1166, false);
			api.setWidgetText(player, 1166, 23, "Analyse");
			api.setWidgetText(player, 1166, 1, "Item: "+configApi.objName(itemId) + "<br><br>" + "Junk chance: "+this.calculateJunkChance(itemId) + "<br><br>" + "Experience: "+this.calculateExperience(itemId)
			+ "<br><br>"+ "Chance for materials: "+categoryData.materialCount + "<br><br>" + "This may be disassembled into: "  + "<br>"+"* "+InventionMaterials.getName(categoryData.often[material])+" (often)"
			+ "<br>"+ "* "+InventionMaterials.getName(categoryData.often[material])+"<br>"+"* "+InventionMaterials.getName(categoryData.often[material])+" (rarely)");
			api.setWidgetText(player, 1166, 2, "Analyse");
		},
		//1713?
		calculateExperience : function (itemId) {
			var categoryData = this.lookupCategory(configApi.objCategory(itemId));
			var level = this.getItemLevel(itemId);
			return Math.max((categoryData.boosted ? 0.3 : 0.03)*level, 0.1);
		},
		
		junkPast75 : {
			75 : 4.2, 76 : 3.8, 77 : 3.4, 78 : 3.0, 79 : 2.7,
			80 : 2.3, 81 : 2.0, 82 : 1.7, 83 : 1.4, 84 : 1.2,
			85 : 1.0, 86 : 0.8, 87 : 0.6, 88 : 0.4, 89 : 0.3 },
		
		calculateJunkChance : function (itemId) {
			var level = this.getItemLevel(itemId);
			if (level < 75) {
				return 100 - level * 1.1;
			} else if (level >= 75 && level < 90) {
				return this.junkPast75[level];
			} else if (level >= 90) {
				return 0.0;
			}
		},
		
		addMaterials : function (player, itemId) {
			var categoryData = this.lookupCategory(configApi.objCategory(itemId));
			if (categoryData === undefined) {
				api.sendMessage(player, "No materials found for category "+configApi.objCategory(itemId));
				return;
			}
			var materials = {};
			
			var junkChance = this.calculateJunkChance(itemId);
			
			
			for (var i=0;i<categoryData.materialCount;i++) {
				var material = this.pickMaterial(categoryData.often, categoryData.sometimes, categoryData.rarely, junkChance);
				if (typeof(materials[material]) !== "number") {
					materials[material] = 0;
				}
				materials[material]++;
			}
			var message = "Materials gained: ";
			var materialValues = [];
			for (var material in materials) {
				var count = materials[material];
				var materialId = parseInt(material);
				var type = InventionMaterials.getCategory(materialId);
				if (count > 0) {
					if (type == 3) {//Uncommon
						materialValues.push("<col=ff6600>"+count+" x "+InventionMaterials.getName(materialId)+"</col>");
					} else if (type == 4) {//Rare
						materialValues.push("<col=ff0000>"+count+" x "+InventionMaterials.getName(materialId)+"</col>");
					} else {
						materialValues.push(count+" x "+InventionMaterials.getName(materialId));
					}					
					InventionMaterials.addMaterials(player, materialId, count);
				}
			}
			api.sendMessage(player, message+materialValues.join(", "), MesType.GAME_SPAM);
		},
		pickMaterial : function (often, sometimes, rarely, junkChance) {
			if ((Math.random() * 100) < junkChance) {
				return InventionMaterials.Material.JUNK;
			}
			return often[(Math.floor(Math.random() * often.length))]
		}
}