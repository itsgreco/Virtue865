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
 */
package org.virtue.game.content.dialogues;


/**
 * @author Mystic Flow <Steven@rune-server.org>
 */
public enum ChatheadEmoteType {
	
	
	    ANGRY(9787),//long the one rs is using
       // ANGRY(9786),//med
       // ANGRY(9785),//sort
	SHIFTY(9838),// dont think its the right one
     
        
	
	//////need to test and get right anim////
        BAD_ASS(9854),
        CALM(9805), 
	    CALM_TALK(9810), 
        CONFUSED(9830), 
        COOL_YES(9864),
        DEPRESSED(9770), 
        DRUNK_HAPPY_TIRED(9835),
        EVIL(9795), 
        HAPPY_TALKING(9850),
        LAUGH_EXCITED(9851),
        MEAN_FACE(9785), 
	    MEAN_HEAD_BANG(9790), 
        NEUTRAL(9827),//9834 maby NEUTRAL
	    REALLY_SAD(9760), 
        SAD(9765), 
	    SCARED(9780),
        SNOBBY(9820), 
        SNOBBY_HEAD_MOVE(9825), 
        TOUGH(9815), 
	    TALKING_ALOT(9845), 
        THINKING(9860), 
        WORRIED(9775), 
	    WHAT_THE_CRAP(9800);     
	
	private int animID;
	
	ChatheadEmoteType (int animID) {
		this.animID = animID;
	}
	
	public int getAnimID () {
		return animID;
	}
	
	public static ChatheadEmoteType forName (String name) {
		return valueOf(name.trim().replace(' ', '_').toUpperCase());
	}
}
