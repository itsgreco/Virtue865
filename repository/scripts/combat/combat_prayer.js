/**
 *  @author Greco
 *  TODO Redo Prayers -> Prayer headicons -> fix the commented out lines of code ->
 *  do some code cleanup
 */


var PrayerBook = {
		NORMAL : {
			prayerLvls : [1, 4, 7, 8, 8, 9, 9, 19, 22, 25, 35, 37, 40, 43, 46, 49, 52, 60, 65, 70, 70, 70], 
			closePrayers : [0, 1, 4, 6, 2, 3, 5, 17, 19, 20, 21, 10, 11, 12, 13, 14, 15, 16, 8, 18], 
			prayerSlotValues : [1, 2, 4, 4096, 16384, 8192, 32768, 8, 16, 32, 65536, 64, 128, 256, 512, 1024, 2048, 131072, 524288, 262144, 2097152, 1048576], 
			prayerDrainRate : [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 6, 6, 6, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.6, 0.3, 0.3, 0.3]
		},
		CURSES : {
			prayerLvls : [50, 50, 52, 53, 54, 55, 56, 57, 58, 59, 62, 65, 68, 71, 74, 76, 77, 78, 79, 80, 82, 84, 86, 89, 92, 95, 95, 95], 
			closePrayers : [1, 2, 3, 4, 5, 6, 7, 8, 14, 15, 16, 17, 18, 19, 20, 21, 22, 25, 26, 27, 10, 11, 12, 13, 23, 24], 
			prayerSlotValues : [1, 2, 4, 33554432, 8, 16777216, 16, 134217728, 67108864, 32, 64, 128, 256, 512, 1024, 2048, 1048576, 4096, 2097152, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 4194304, 8388608], 
			prayerDrainRate : [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 1.2, 0.4, 0.4, 0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.2, 0.2, 0.2, 0.2]
		},
		SPRITE : {//TODO add headicons when activating selected prayers
			spriteids : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 2, 1, 0, 3, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}
		
}

var player;
var onPrayers = 0;
var usingQuickPrayer;
var onPrayersCount;

var quickPrayers = 0;
var prayerPoints;
var leechBonuses;
var ancientcurses;
var nextDrain;
var boostedLeech;

//var getPrayerHeadIcon = {
//		handleHeadIcon : function (player) {
//			if (onPrayersCount == 0) {
//				return -1;
//			}
//			var value = -1;
//			if(!ancientcurses) {
//				if (usingPrayer.handleusingprayer(player, 0, 10))
//					value += 8;
//				if (usingPrayer.handleusingprayer(player, 0, 11))
//					value += 3;
//				else if (usingPrayer.handleusingprayer(player, 0, 12))
//					value += 2;
//				else if (usingPrayer.handleusingprayer(player, 0, 13))
//					value += 1;
//				else if (usingPrayer.handleusingprayer(player, 0, 14))
//					value += 4;
//				else if (usingPrayer.handleusingprayer(player, 0, 15))
//					value += 6;
//				else if (usingPrayer.handleusingprayer(player, 0, 16))
//					value += 5;			
//			} else {
//				if (usingPrayer.handleusingprayer(player, 1, 10)) {
//					value += 16;
//				if (usingPrayer.handleusingprayer(player, 1, 12))
//					value += 2;
//				else if (usingPrayer.handleusingprayer(player, 1, 11))
//					value += 3;
//				else if (usingPrayer.handleusingprayer(player, 1, 13))
//					value += 1;
//			} else if (usingPrayer.handleusingprayer(player, 1, 11))
//					value += 14;
//				else if (usingPrayer.handleusingprayer(player, 1, 12))
//					value += 15;
//				else if (usingPrayer.handleusingprayer(player, 1, 13))
//					value += 13;
//				else if (usingPrayer.handleusingprayer(player, 1, 23))
//					value += 20;
//				else if (usingPrayer.handleusingprayer(player, 1, 24))
//					value += 21;
//			}
//			return value;
//		}
//}

var usingPrayer = {
	handleusingprayer : function(player, book, prayerId) {
		onPrayers[getPrayerBook.handlegetPrayerBook()][prayerId];
	}	
		
}

var closePrayers = {
	handleclosePrayers : function(usingQuickPrayer, prayers) {
		var prayerId;
		if (usingQuickPrayer)
			quickPrayers[getPrayerBook.handlegetPrayerBook()][prayerId] = false;
		else {
			if (onPrayers[getPrayerBook.handlegetPrayerBook()][prayerId])
				onPrayersCount--;
			onPrayers[getPrayerBook.handlegetPrayerBook()][prayerId] = false;
			closePrayers(prayerId);
		}
	}	
		
}

var switchSettingQuickPrayer = {
		handleswitchSettingsQuickPrayer : function (player) {
			usingQuickPrayer = !usingQuickPrayer;
			api.setVarc(player, 181, usingQuickPrayer ? 1 : 0);
			unlockPrayerBookButtons;
			if (usingQuickPrayer) {
				recalculatePrayer.handlerecalculatePrayer(player);
				//ADD game tab here.
			}
	}
}

var quickPrayerOn;
var prayer;
var quickPrayers;

var switchQuickPrayers = {
	handleSwitchQuickPrayers : function (player) {
		var hasQuickPrayers = false;
			if (prayer) {
				hasQuickPrayers = true;
				return;
			}
		if (!hasQuickPrayers) {
			api.sendMessage(player, "You don't have any quick prayers selected.");
			api.sendMessage(player, "Right-click the prayer button on the action bar to select some.");
			return;
		}
//		if (!checkPrayer())
//			return;
		quickPrayerOn = !quickPrayerOn;
		if (hasPrayersOn())
			closeAllPrayers.handlecloseAllPrayers(player);
		if (quickPrayerOn) {
			var index = 0;
				if (prayer)
					usePrayer.handleusePrayer(player, index, false);
				index++;
				api.setVarc(player, 182, 1);
			recalculatePrayer.handlerecalculatePrayer(player);
		}
	}			
}

var updateBuffs = {
		handleupdateBuffs : function (player) {
			player.getVars().setVarValue(895, 1);
			//api.(player, 895, (895) + 1);//(895) + 1  setVarp
		}
		
}

var recalculatePrayer = {
	handlerecalculatePrayer : function (player) {
		if(recalculatePrayers.handlerecalculatePrayers(player, ancientcurses, false))
			updateBuffs.handleupdateBuffs(player);
		if(usingQuickPrayer)
			recalculatePrayers.handlerecalculatePrayers(player, ancientcurses, true);	
	}	

}

var recalculatePrayers = {
		handlerecalculatePrayers : function (player, ancientCurses, usingQuickPrayer) {
			var book = !usingQuickPrayer ? onPrayers[ancientCurses ? 1 : 0] : quickPrayers[ancientCurses ? 1 : 0];
			var value = 0;
			var slot = 0;
			for (slot; slot < book; slot++) {
				if (book[slot])
					value += PrayerBook.NORMAL.prayerSlotValues[0][slot];
					value += PrayerBook.CURSES.prayerSlotValues[1][slot];
			}
			api.setVarc(player, 1768, value);//ancientCurses ? (usingQuickPrayer ? 1768 : 3275) : (usingQuickPrayer ? 1770 : 3272)
		}	

	}



var switchPrayer = {
	handleswitchPrayer : function (player, prayerId, setQuickPrayer) {
		//this.handleswitchPrayer(player, prayerId, setQuickPrayer)
			if (!setQuickPrayer)
//				if (!checkPrayer())
//					return;
			usePrayer.handleusePrayer(player, prayerId, setQuickPrayer);
			recalculatePrayer.handlerecalculatePrayer(player);
	}	
}

var delayUsePrayer = {
		handledelayUsePrayer : function (player, prayerId, usingQuickPrayer) {
			switchPrayer.handleswitchPrayer(player, prayerId, usingQuickPrayer);
	}	
}

var delaySwitchQuickPrayers = {
		handledelaySwitchQuickPrayers : function (player) {
			switchQuickPrayers.handleSwitchQuickPrayers(player)();
	}	
}

var usePrayer = {
		handleusePrayer : function (player, prayerId, usingQuickPrayer) {
		var needHeadIconsGenerate = false;	
		if (getPrayerBook.handlegetPrayerBook() == 0) {
			switch (prayerId) {
			case 0:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][3]);
				return true;
			case 1:
			case 4:
			case 6:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][1], closePrayers[getPrayerBook.handlegetPrayerBook()][3]);
				return true;
			case 2:
			case 3:
			case 5:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][2], closePrayers[getPrayerBook.handlegetPrayerBook()][3]);
				return true;
			case 17:
			case 19:
			case 20:
			case 21:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][0], closePrayers[getPrayerBook.handlegetPrayerBook()][1], closePrayers[getPrayerBook.handlegetPrayerBook()][2], closePrayers[getPrayerBook.handlegetPrayerBook()][3]);
				return true;
			case 10:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][6]);
				needHeadIconsGenerate = true;
				return true;
			case 11:
			case 12:
			case 13:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][5], closePrayers[getPrayerBook.handlegetPrayerBook()][6]);
				needHeadIconsGenerate = true;
				return true;
			case 14:
			case 15:
			case 16:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][4], closePrayers[getPrayerBook.handlegetPrayerBook()][5], closePrayers[getPrayerBook.handlegetPrayerBook()][6]);
				needHeadIconsGenerate = true;
				return true;
			case 8:
			case 18:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][7]);
				return true;
			default:
				return false;
			}
		} else {
			switch (prayerId) {
			case 0:
				if (!usingQuickPrayer) {
					api.runAnimation(player, 12567);
					api.setSpotAnim(player, 1, 2213);
				}
				return true;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][1], closePrayers[getPrayerBook.handlegetPrayerBook()][2]);
				return true;
			case 9:
				if (!usingQuickPrayer) {
					api.runAnimation(player, 12589);
					api.setSpotAnim(player, 1, 2266);
				}
				return true;
				
			case 10:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][5]);
				needHeadIconsGenerate = true;
				return true;
			case 11:
			case 12:
			case 13:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][4], closePrayers[getPrayerBook.handlegetPrayerBook()][5]);
				needHeadIconsGenerate = true;
				return true;	
			case 23:
			case 24:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][3], closePrayers[getPrayerBook.handlegetPrayerBook()][4], closePrayers[getPrayerBook.handlegetPrayerBook()][5]);
				needHeadIconsGenerate = true;
				return true;
				
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][0], closePrayers[getPrayerBook.handlegetPrayerBook()][2]);
				return true;
			case 25:
			case 26:
			case 27:
				if (!usingQuickPrayer) {
					api.runAnimation(player, 12656);
					api.setSpotAnim(player, 1, 2226);
				}
				//closePrayers.handleClosePrayers(usingQuickPrayer, closePrayers[getPrayerBook.handlegetPrayerBook()][0], closePrayers[getPrayerBook.handlegetPrayerBook()][1], closePrayers[getPrayerBook.handlegetPrayerBook()][2]);
				return true;
			default:
				return false;
			}
		}
		if (!usingQuickPrayer) {
			onPrayers[getPrayerBook.handlegetPrayerBook()][prayerId] = true;
			resetDrainPrayer(prayerId);
			onPrayersCount++;
			if (needHeadIconsGenerate)
				api.runAnimation(player, 18010);
		} else {
			quickPrayers[getPrayerBook.handlegetPrayerBook()][prayerId] = true;
		}
		return true;
	}	
}

var closeAllPrayer = {
		handlecloseAllPrayer : function (player, reset) {
			recalculatePrayer.handlerecalculatePrayer(player);
			onPrayersCount = 0;
			if (reset) {
				api.setVarc(player, 182, 0);
				quickPrayerOn = false;
			}
	}
}

var closeAllPrayers = {
		handlecloseAllPrayers : function (player) {
			closeAllPrayer.handlecloseAllPrayer(player, true)
	}
}

var hasPrayersOn = onPrayersCount > 0;

var getPrayerBook = {
	handlegetPrayerBook : function() {
		ancientcurses == false ? 0 : 1;
	}	
}


var refreshBook = {
		refresh : function (player) {
			player.getDispatcher().sendVarc(181, 0);
			//api.setVarc(player, 181, usingQuickPrayer ? 1 : 0);
			api.setVarBit(player, 16789, ancientcurses ? 1 : 0);
	}	
}

var unlockPrayerBookButtons = {
		unlockButtons : function (player) {
			api.setWidgetEvents(player, 1458, 31, 0, 28, 10320902);	
			api.setWidgetEvents(player, 1458, 32, 0, 28, 2);
	}	
}

var Prayer = prayerpoints = 10;//TODO
var isAncientCurses = ancientcurses;
var isUsingQuickPrayer = usingQuickPrayer;
var getPrayerpoints = prayerpoints;

