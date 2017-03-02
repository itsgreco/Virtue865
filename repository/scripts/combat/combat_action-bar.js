/**
 * @author Greco
 * @since 01/07/2017
 */

/**
 *  Ability Shortcut types
 */
var ITEM_SHORTCUT = 0, MELEE_ABILITY_SHORTCUT = 1, STRENGTH_ABILITY_SHORTCUT = 2, RANGED_ABILITY_SHORTCUT = 5, DEFENCE_ABILITY_SHORTCUT = 3,  
	HEAL_ABILITY_SHORTCUT = 4, MAGIC_ABILITY_SHORTCUT = 6, PRAYER_SHORTCUT = 7;

/**
 *  Regeneration ability varbit id
 */
var REGENERATION_VARBIT_ID = 24939;

/**
 *  ClientScript Data ID for ability types
 */
var CS_DATA_ID = [6734, 6735, 6736, 6737, 6738, 6740, 6739];

var Shortcut = {
	getShortcut : function(player) {
		var getId;
		var getType;
		var queue;
	}	
}

/**
 *  Current action bar(s) being displayed
 */
var currentBar;
/**
 *  Keybind shortcuts for the action bar
 */
var shortcuts;
/**
 *  Toggle the locking of the action bar(s)
 */
var lockedBar;
/**
 *  Blocking the ability to share offers between two or more players
 */
var blockIncomingShareOffers;
/**
 *  Ability cooldowns for abilities
 */
var cooldowns;
/**
 * Global Ability cooldown for abilities that fall under the same category 
 */
var globalCooldown;
/**
 *  Start of the ActionBar
 *  TODO Finish this system -> use Matrix 3 to finish this system
 */
var Actionbar = {
		getActionbar : function(player) {
			shortcuts = Shortcut.getShortcut(player);
	}	
}