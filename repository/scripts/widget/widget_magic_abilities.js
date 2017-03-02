

var fire = 554;
var water = 555;
var air = 556;
var earth = 557;
var mind = 558;
var body = 559;
var death = 560;
var nature = 561;
var chaos = 562;
var law = 563;
var cosmic = 564;
var blood = 565;
var soul = 566;
var steam = 4694;
var mist = 4695;
var mud = 4698;
var lava = 4699;
var astral = 9075;
var armadyl = 21773;
var elemental = 12850;
var catalytic = 12851;

var magic = Stat.MAGIC;
var smith = Stat.SMITHING;
var invention = Stat.INVENTION;


var MageAbilitiesOpenListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		api.setWidgetEvents(player, 1461, 1, 0, 189, 97350);
		api.setWidgetEvents(player, 1461, 7, 7, 16, 2);
	}
});

var MageAbilitiesButtonListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		var spell = args.slot;
		var item = args.item;
		var level = api.getCoordLevel(player);
		//var item = api.getItem(player, Inv.BACKPACK, slot);
		switch (args.slot) {
		case 156:
			EnchantCrossbowBolt.handleEnchantment(player, spell);
			break;
		case 155://Home teleport (Lodestone) Normal spellbook
		case 36://House Teleport
			api.openCentralWidget(player, 1092, false);
			return;
		case 28://Varrock teleport
			if (api.getStatLevel(player, magic) <= 25) {
				api.sendMessage(player, "You need a Magic level of " + 25 + " to cast this spell!");
				return;
			}
			if (api.carriedItemTotal(player, air) < 3) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			if (api.carriedItemTotal(player, fire) < 1) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			if (api.carriedItemTotal(player, law) < 1) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			api.delCarriedItem(player, air, 3);
			api.delCarriedItem(player, fire, 1);
			api.delCarriedItem(player, law, 1);
			api.addExperience(player, magic, 35, true);
			//api.teleportEntity(player, 3212, 3424, 0);
			runVarrockTeleport(player);
			return;
		case 31://Lumbridge teleport
			if (api.getStatLevel(player, magic) <= 31) {
				api.sendMessage(player, "You need a Magic level of " + 31 + " to cast this spell!");
				return;
			}
			if (api.carriedItemTotal(player, air) < 3) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			if (api.carriedItemTotal(player, earth) < 1) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			if (api.carriedItemTotal(player, law) < 1) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			api.delCarriedItem(player, air, 3);
			api.delCarriedItem(player, earth, 1);
			api.delCarriedItem(player, law, 1);
			api.addExperience(player, magic, 41, true);
			//api.teleportEntity(player, 3222, 3218, 0);
			runLumbridgeTeleport(player);
			return;
			
		case 34://Falador teleport
			if (api.getStatLevel(player, magic) <= 37) {
				api.sendMessage(player, "You need a Magic level of " + 37 + " to cast this spell!");
				return;
			}
			if (api.carriedItemTotal(player, air) < 3) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			if (api.carriedItemTotal(player, water) < 1) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			if (api.carriedItemTotal(player, law) < 1) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			api.delCarriedItem(player, air, 3);
			api.delCarriedItem(player, water, 1);
			api.delCarriedItem(player, law, 1);
			api.addExperience(player, magic, 48, true);
			//api.teleportEntity(player, 2965, 3379, 0);
			runFaladorTeleport(player);
			return;
		
			
		case 39://Camelot Teleport
			if (api.getStatLevel(player, magic) <= 45) {
				api.sendMessage(player, "You need a Magic level of " + 45 + " to cast this spell!");
				return;
			}
			if (api.carriedItemTotal(player, air) < 5) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			if (api.carriedItemTotal(player, law) < 1) {
				api.sendMessage(player, "You don't have enough runes to cast this spell.");
				return;
			}
			api.delCarriedItem(player, air, 5);
			api.delCarriedItem(player, law, 1);
			api.addExperience(player, magic, 55.5, true);
			//api.teleportEntity(player, 2965, 3379, 0);
			runCamelotTeleport(player);
			return;			
			
		default:
			api.sendMessage(player, "Unhandled magic button: comp="+args.component+", slot="+args.slot+", button="+args.button);
			return;
		}
		switch (args.component) {
		case 1:
			var spell = org.virtue.game.content.skills.magic.Spellbook.MODERN.get(args.slot);
			if (player.getCombatSchedule().getAutocastSpell() != null) {
				player.getCombatSchedule().setAutocastSpell(null);
				api.sendMessage(player, "Auto-cast spell cleared.");
			} else {
				player.getCombatSchedule().setAutocastSpell(spell);
				api.sendMessage(player, "Main-hand spell set to: spell");
			}
		default:
			api.sendMessage(player, "Unhandled mage abilities button: comp="+args.component+", slot="+args.slot+", button="+args.button);
			return;
		}
	}
});

var MageAbilitiesTargetListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		var spell = args.slot;
		if (args.targetInterface != 1473) {//Spell used on something other than backpack
			api.sendMessage(player, "Unhandled magic ability target: spell="+spell+", targetInterface="+args.targetInterface+", targetComp="+args.targetComponent);
			return;
		}
		var slot = args.targetSlot;
		var item = api.getItem(player, Inv.BACKPACK, slot);
		if (item == null) {
			return;//This means the spell wasn't used on an item. We'll just suppress the debug message.
		}
		switch (args.slot) {
		case 188://Analyse
			Disassembly.analyseItem(player, api.getId(item));
			return;
		case 189://Disassemble
			Disassembly.startDisassembly(player, item, slot);
			return;
		default:
			api.sendMessage(player, "Unhandled magic spell use: spell="+spell+", slot="+slot+", item="+item);
			return;
		}
	}
});


function runVarrockTeleport (player) {
	var frame = 0;
	var Action = Java.extend(Java.type('org.virtue.game.entity.player.event.PlayerActionHandler'), {
		process : function (player) {
			if (frame === 0) {
				api.freezeEntity(player, 2);
				api.runAnimation(player, 8939);
				api.setSpotAnim(player, 1, 1576);
			} else if (frame == 1) {//Actually moving the player
				//api.runAnimation(player, 8941);
				//api.setSpotAnim(player, 1, 1577);
			} else if (frame == 2) {
				api.teleportEntity(player, 3212, 3424, 0);
			} else if (frame == 3) {
				api.runAnimation(player, 8941);
				api.setSpotAnim(player, 1, 1577);
				//api.teleportEntity(player, 3212, 3424, 0);
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

function runLumbridgeTeleport (player) {
	var frame = 0;
	var Action = Java.extend(Java.type('org.virtue.game.entity.player.event.PlayerActionHandler'), {
		process : function (player) {
			if (frame === 0) {
				api.freezeEntity(player, 2);
				api.runAnimation(player, 8939);
				api.setSpotAnim(player, 1, 1576);
			} else if (frame == 1) {//Actually moving the player
				api.runAnimation(player, 8941);
				api.setSpotAnim(player, 1, 1577);
			} else if (frame == 2) {
				api.teleportEntity(player, 3222, 3218, 0);
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

function runFaladorTeleport (player) {
	var frame = 0;
	var Action = Java.extend(Java.type('org.virtue.game.entity.player.event.PlayerActionHandler'), {
		process : function (player) {
			if (frame === 0) {
				api.freezeEntity(player, 2);
				api.runAnimation(player, 8939);
				api.setSpotAnim(player, 1, 1576);
			} else if (frame == 1) {//Actually moving the player
				api.runAnimation(player, 8941);
				api.setSpotAnim(player, 1, 1577);
			} else if (frame == 2) {
				api.teleportEntity(player, 2965, 3379, 0);
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

function runCamelotTeleport (player) {
	var frame = 0;
	var Action = Java.extend(Java.type('org.virtue.game.entity.player.event.PlayerActionHandler'), {
		process : function (player) {
			if (frame === 0) {
				api.freezeEntity(player, 2);
				api.runAnimation(player, 8939);
				api.setSpotAnim(player, 1, 1576);
			} else if (frame == 1) {//Actually moving the player
				api.runAnimation(player, 8941);
				api.setSpotAnim(player, 1, 1577);
			} else if (frame == 2) {
				api.teleportEntity(player, 2757, 3477, 0);
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

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new MageAbilitiesOpenListener();	
	scriptManager.registerListener(EventType.IF_OPEN, 1461, listener);
	
	listener = new MageAbilitiesButtonListener();	
	scriptManager.registerListener(EventType.IF_BUTTON, 1461, listener);
	
	listener = new MageAbilitiesTargetListener();	
	scriptManager.registerCompListener(EventType.IF_BUTTONT, 1461, 1, listener);
};

var MagicAbilities = {
		
}