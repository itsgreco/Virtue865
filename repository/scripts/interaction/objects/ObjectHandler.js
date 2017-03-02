/**
 * Copyright (c) 2014 Virtue Studios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions\:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.

/**
 * 
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 16/01/2015
 */

var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		
		switch (locTypeId) {
			case 1804://Varrock dungeon Door
				if(api.getCoordX(player) == 3115 && api.getCoordY(player) == 3449) {
					api.teleportEntity(player, 3115, 3450, 0);
				} else if(api.getCoordX(player) == 3115 && api.getCoordY(player) == 3450) {
					api.teleportEntity(player, 3115, 3449, 0);
				}
			return true;
			case 12389://Varrock dungeon Latter
				api.teleportEntity(player, 3117, 9852, 0);
			return true;
			case 29335://Varrock dungeon Latter
				api.teleportEntity(player, 3115, 3452, 0);
			return true;
			
			case 29728://enter cockroach area
				api.teleportEntity(player, 3157, 4279, 3);
				return true;
			case 29729://exit cockroach area
				api.teleportEntity(player, 3074, 3464, 0);
				return true;
			case 66991://enter taverly dungeon
				api.teleportEntity(player, 2885, 9795, 0);
				return true;
			case 74864://exit taverly dungeon
				api.teleportEntity(player, 2885, 3395, 0);
				return true;
			case 47231://enter kuradel slayer dungeon
				api.teleportEntity(player, 1735, 5313, 1);
				return true;
			case 47232://exit kuradel slayer dungeon
				api.teleportEntity(player, 1661, 5257, 0);
				return true;
			case 48797://enter lumby catacombs
				api.teleportEntity(player, 3877, 5526, 1);
				return true;
			case 48798://exit catacombs
				api.teleportEntity(player, 3246, 3198, 0);
				return true;
			case 48682://catacombs climb down 1
				api.teleportEntity(player, 3869, 5524, 0);
				return true;
			case 48679://catacombs climb up stairs 1
				api.teleportEntity(player, 3875, 5527, 1);
				return true;
			case 48688://catacombs climb down stairs 2
				api.teleportEntity(player, 3972, 5565, 0);
				return true;
			case 48683://lower catacombs exit
				api.teleportEntity(player, 3868, 5524, 0);
				return true;
			case 32015://ice dugeon ladder exit.
				api.sendMessage(player, "You climb up the ladder.");
				api.teleportEntity(player, 3009, 3150, 0);
				return true;
			case 9472://ice dugeon ladder entrance.
				api.sendMessage(player, "You climb down the ladder.");
				api.teleportEntity(player, 3007, 9550, 0);
				return true;
			case 17819:
				api.teleportEntity(player, 3040, 6125, 0);
				return true;						
			case 84909:
				api.teleportEntity(player, 2973, 3432, 0);
				return true;		
			case 88001://rots exit
				api.teleportEntity(player, 3541, 3311, 0);
				return true;
			case 87997://rots entrance
				api.teleportEntity(player, 2326, 5910, 0);
				return true;
			case 90948:
				api.teleportEntity(player, 4059, 6290, 0);
				return true;
			case 90144:
				api.teleportEntity(player, 2496, 2629, 2);
				return true;
			case 84702://ascension dungeon entrance
				api.teleportEntity(player, 1095, 579, 1);
				return true;
			case 84724://ascension dungeon exit
				api.teleportEntity(player, 2500, 2887, 0);
				return true;	
			
			case 79061://Food Table
				api.runAnimation(player, 881);
				api.addCarriedItem(player, 385, 1); //Sharks
				api.sendMessage(player, "You take food from the table.");
				return true;
			case 79041://Melee Setup
				api.runAnimation(player, 881);
				api.addCarriedItem(player, 1163, 1);
				api.addCarriedItem(player, 1127, 1);
				api.addCarriedItem(player, 1079, 1);
				api.addCarriedItem(player, 1201, 1);
				api.addCarriedItem(player, 7462, 1);	
				api.addCarriedItem(player, 4151, 1);
				api.addCarriedItem(player, 1215, 1);	
				api.addCarriedItem(player, 1725, 1);
				api.addCarriedItem(player, 6570, 1);
				api.addCarriedItem(player, 11732, 1);			
				api.sendMessage(player, "You take the melee setup!");
				return true;
			case 79042://Range Setup
				api.runAnimation(player, 881);
				api.addCarriedItem(player, 3749, 1);//archer helm
				api.addCarriedItem(player, 24382, 1);//royal dhide body
				api.addCarriedItem(player, 24379, 1);//royal dhide chaps
				api.addCarriedItem(player, 7462, 1);//barrows gloves
				api.addCarriedItem(player, 9185, 1);//rune crossbow
				api.addCarriedItem(player, 25891, 1);//offhand rune crossbow
				api.addCarriedItem(player, 9144, 1000);//runite bolts
				api.addCarriedItem(player, 6733, 1);//archer's ring
				api.addCarriedItem(player, 6585, 1);//fury
				api.addCarriedItem(player, 6570, 1);//fire cape
				api.addCarriedItem(player, 10499, 1);//avas accumalator			
				api.sendMessage(player, "You take the ranged setup!");
				return true;	
			case 79043://Magic Setup
				api.runAnimation(player, 881);
				api.addCarriedItem(player, 25825, 1);
				api.addCarriedItem(player, 25827, 1);
				api.addCarriedItem(player, 25831, 1);
				api.addCarriedItem(player, 25802, 1);
				api.addCarriedItem(player, 30825, 1);	
				api.addCarriedItem(player, 30828, 1);
				api.addCarriedItem(player, 22494, 1);	
				api.addCarriedItem(player, 1727, 1);
				api.addCarriedItem(player, 6922, 1);
				api.addCarriedItem(player, 6920, 1);
				api.addCarriedItem(player, 6570, 1);							
				api.sendMessage(player, "You take the magic setup!");
				return true;					
			case 79037://Combat Setup
				api.openDialog(player, "Combat");
				return true;		
			case 77834://KBD Lair
				api.teleportEntity(player, 2273, 4681, 0);
				return true;
			case 1817:
				api.teleportEntity(player, 3051, 3519, 0);
				return true;
			case 14304://Boat to Void Knight's Outpost
				api.teleportEntity(player, 2662, 2676, 1);
				return true;
			case 14305://Get off Port Sarim Boat
				api.teleportEntity(player, 3041, 3202, 0);
				return true;	
			case 14306://Leave Void Knight's Outpost
				api.teleportEntity(player, 3041, 3199, 1);
				return true;
			case 14307://Get off Void Knight's Boat
				api.teleportEntity(player, 2659, 2676, 0);
				return true;
			case 68134://Enter Tzhaar City
				api.teleportEntity(player, 4667, 5059, 0);
				return true;
			case 68135://Exit Tzhaar City
				api.teleportEntity(player, 2845, 3170, 0);
				return true;
			case 20604://gamer grotto
				api.teleportEntity(player, 3018, 3404, 0);
				return true;
			case 20602://gamer grotto
				api.teleportEntity(player, 2954, 9675, 0);
				return true;
			case 68223:
				api.teleportEntity(player, 4585, 5076, 0);
				return true;
			case 38698:
				api.teleportEntity(player, 2815, 5511, 0);
				return true;
			case 9356:
				api.teleportEntity(player, 4585, 5076, 0);
				return true;
			case 65084://Wildy Ditch
			case 65086:
			case 65082:
			case 65079:
			case 65077:
			case 65076:
				if(api.getCoordY(player) == 3520) {
					api.runAnimation(player, 6132);
					api.teleportEntityBy(player, 0, 3, 0);
				}
				return true;
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [ 77834, 1817, 14304, 14305, 14306, 14307, 68134, 68135, 65084,
					68223, 9356, 65086, 65082, 65079, 65077, 65076, 38698, 20604, 20602, 79061, 79041, 79042, 79043,
					1804, 12389, 29335, 29728, 29729, 66991, 74864, 47231, 47232, 48797, 48798, 48682, 48679, 48688, 48683,
					32015, 9472, 17819, 88001, 87997, 90948, 90144, 84702, 84724];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};