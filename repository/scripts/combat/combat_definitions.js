/**
 *  @author Greco
 *  @since 01/07/2017
 */

/**
 *  Combat attack types
 */
var STAB_ATTACK = 0, SLASH_ATTACK = 1,
CRUSH_ATTACK = 2, RANGE_ATTACK = 4, MAGIC_ATTACK = 3;
/**
 *  Combat defensive types
 */
var STAB_DEF = 5, SLASH_DEF = 6, CRUSH_DEF = 7,
RANGE_DEF = 9, MAGIC_DEF = 8, SUMMONING_DEF = 10;
/**
 *  Combat bonus types
 */
var STRENGTH_BONUS = 14, RANGED_STR_BONUS = 15,
MAGIC_DAMAGE = 17, PRAYER_BONUS = 16;
/**
 *  Combat absorption types
 */
var ABSORVE_MELEE_BONUS = 11, ABSORVE_RANGE_BONUS = 13,
ABSORVE_MAGE_BONUS = 12;

/**
 *  Combat modes
 */
var MANUAL_COMBAT_MODE = 0, REVOLUTION_COMBAT_MODE = 1, MOMENTUM_COMBAT_MODE = 2, LEGACY_COMBAT_MODE = 3;

/**
 *  If your experience is being shared with the other Stats (Skills)
 */
var SHARED = -1;
/**
 *  If using special attack whilst in legacy combat mode
 */
var usingSpecialAttack;
/**
 *  Bonuses for equipment
 */
var bonuses;
/**
 *  Stats for equipment
 */
var stats;
/**
 *  Special attack percentage whilst in legacy combat mode
 */
var specialAttackPercentage;
/**
 *  Determines if auto retaliate is on or off
 */
var autoRelatie;
/**
 *  Current entity defensive casting
 */
var defensiveCasting;
/**
 *  Enabled or disables entity instant attacking 
 */
var instantAttack;
/**
 *  The Spellbook used whilst in a dungeon -> Stat (Dungeoneering)
 */
var dungeonneringSpellBook;
/**
 *  Current entity combat stance
 */
var combatStance;
/**
 *  Entity Target Info
 */
var currentTarget;
var currentTargetMaxHP, currentTargetHP;
var currentTargetData;
/**
 *  Main-hand -> Off-hand Delays
 */
var mainHandDelay, offHandDelay;
/**
 *  Spellbook
 */
var spellBook;
/**
 *  Selected Main-hand spell
 */
var mainHandSpell;
/**
 *  Sheathing enabled or disabled
 */
var sheathe;
/**
 *  Force no sheathing
 */
var forceNoSheathe;
/**
 * Stat Experience gained 
 */
var meleeCombatExperience;
var rangedCombatExperience;
var magicCombatExperience;
/**
 *  The selected Combat Mode
 */
var combatMode;
/**
 *  Manual Ability castings
 */
var manualCast;
/**
 *  Allows the use of Ability Queueing
 */
var allowAbilityQueueing;
/**
 *  Combat mode icon
 */
var showCombatModeIcon;
/**
 *  Damage types
 */
var MAINHAND_DAMAGE = 0, MAINHAND_ACCURACY = 1,
OFFHAND_DAMAGE = 2, OFFHAND_ACCURACY = 3, ABILITY_DAMAGE = 4,
HEALTH = 5, PRAYER_B = 6, ARMOR = 7, ARMOR_MELEE_WEAKNESS = 8,
ARMOR_RANGE_WEAKNESS = 9, ARMOR_MAGIC_WEAKNESS = 10,
MELEE_ACCURACY_PENALTY = 13, RANGE_ACCURACY_PENALTY = 14,
MAGE_ACCURACY_PENALTY = 15;