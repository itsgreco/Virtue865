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
		if (event == EventType.OPLOC1) {
		switch (locTypeId) {
			case 1317://GE
            chatnpc(player, 3636,"angry", "If you are a friend of the gnome people, you are a friend<br> of mine. Do you wish to travel, or do you wish to ask<br> about the evil tree?", function () {	
	        });
			return true;
			case 68974:// Tree Gnome Village
			return true;
			case 68973:// Tree Gnome Stronghold
			return true;
			
			default:
			return false;
		}
}



// varp 2662 52186551
//inter 1145
//anim
//23868
//23870


//old anim and gfx 
//7082, 7084, 1229, 1229,
if (event == EventType.OPLOC2) {
		switch (locTypeId) {
         case 1317://GE
		 api.openCentralWidget(player, 1145, false);
		 return true;
		 case 68974:// Tree Gnome Village
		 return true;
		 case 68973:// Tree Gnome Stronghold
		 return true;
		 
           default:
		   return false;
	    }
}
		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [1317,68974,68973 ];
	
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
		scriptManager.registerListener(EventType.OPLOC2, locs[i], listener);
	}
};