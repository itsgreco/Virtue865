//12204{startBit=0, baseVarType=PLAYER, baseVarKey=2493, endBit=0}// maby flour
//12205{startBit=1, baseVarType=PLAYER, baseVarKey=2493, endBit=1}// maby egg
//12206{startBit=2, baseVarType=PLAYER, baseVarKey=2493, endBit=2}// maby milk
//12207{startBit=3, baseVarType=PLAYER, baseVarKey=2493, endBit=3}
//12208{startBit=4, baseVarType=PLAYER, baseVarKey=2493, endBit=4} // talked to millie miller
//12209{startBit=5, baseVarType=PLAYER, baseVarKey=2493, endBit=5}


 var CookListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			if(questApi.isFinished(player, 6)) {
			chatnpc(player, npc, "NEUTRAL", "Hello, friend, how is the adventuring going?", function () {
            CookFinished.maintalk(player, npc);
			});	
			} else if(questApi.isStarted(player, 6)) {
            chatnpc(player, npc, "NEUTRAL", "How are you getting on with finding the ingredients?", function () {
			CookStarted.maintalk(player, npc);
			});	
			} 
			else {
			chatnpc(player, npc, "NEUTRAL", "What am I to do?", function () {
			Cook.maintalk(player, npc);
			});	
			}		  
		}
	}
});
/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new CookListener();
	scriptManager.registerListener(EventType.OPNPC1, 278, listener);
};
var CookFinished = {
       maintalk : function (player, npc) { 
	   multi4(player, "SELECT AN OPTION", "I'm getting strong and mighty.", function () {	
	   chatplayer(player, "NEUTRAL", "I'm getting strong and mighty. Grr.", function () {
	   chatnpc(player, npc, "NEUTRAL", "Glad to hear it.", function () {
	   });
	   });
	}, "I keep on dying.", function () {
	   chatplayer(player, "NEUTRAL", "I keep on dying.", function () {
	   chatnpc(player, npc, "NEUTRAL", "Ah, well, at least you keep coming back to life too!", function () {
	   });
	   });
    }, "Can i use your range?", function () {
	   chatplayer(player, "NEUTRAL", "Can i use your range?", function () {
	   chatnpc(player, npc, "NEUTRAL", "Go ahead! It's a very good range;it's better than most<br> other ranges.", function () {
	   chatnpc(player, npc, "NEUTRAL", "It's called the Cook-o-Matic 25 and it uses a combination<br> of state-of-the-art temperature regulation and magic.", function () {
	   chatplayer(player, "NEUTRAL", "will it mean my food will burn less often?", function () {
	   chatnpc(player, npc, "NEUTRAL", "As long as the food is fairly easy to cook in the first place!", function () {   
	 if(api.itemTotal(player, Inv.BACKPACK, 15411)) {
		 chatnpc(player, npc, "NEUTRAL", "The manual you have in your inventory should tell you<br> more.", function () {
	     chatplayer(player, "NEUTRAL", "Thanks!", function () {		
	     });
	     });
		 }
	else {
		chatnpc(player, npc, "NEUTRAL", "Here, take this manual. It should tell you everything you<br> need to know about this range.", function () {
		api.addCarriedItem(player, 15411, 1);
	    chatobj(player, 15411, "The cook hands you a manual.", function () {	
		chatplayer(player, "NEUTRAL", "Thanks!", function () {		
		});	
	    });
		});
       }
	   });
	   });
	   });
	   });
	   });
	   }, "What happened to the castle?", function () {
		chatnpc(player, npc, "NEUTRAL", "The castle really did suffer in the battle of Lumbridge. I'm<br> glad it's over", function () {
		chatnpc(player, npc, "NEUTRAL", "People came from all over the world to help rebuild, and<br> now things are getting back to normal. I'm glad - I have<br> important things to cook and I'm not letting anything get<br> in the way!", function () {
		});	
		});	
		});
	},
}
  var CookStarted = {
    maintalk : function (player, npc) {
	if(api.itemTotal(player, Inv.BACKPACK, 15413)) {	
	chatobj(player, 15413, "You give the top-quality milk to the cook.", function () {	
	api.setVarBit(player, 12206, 1);
	api.delItem(player, Inv.BACKPACK, 15413, 1);
	chatplayer(player, "NEUTRAL", "Here's some top-quality milk.", function () {
	CookStarted.stillneed(player, npc);
    });
	});
	} else if(api.itemTotal(player, Inv.BACKPACK, 15414)) {	
	chatobj(player, 15414, "You give the extra fine flour to the cook.", function () {	
	api.setVarBit(player, 12204, 1);
	api.delItem(player, Inv.BACKPACK, 15414, 1);
	chatplayer(player, "NEUTRAL", "Here's the extra fine flour.", function () {
	CookStarted.stillneed(player, npc);
    });
	});
	} else if(api.itemTotal(player, Inv.BACKPACK, 15412)) {	
	chatobj(player, 15412, "You give the super large egg to the cook.", function () {	
	api.setVarBit(player, 12205, 1);
	api.delItem(player, Inv.BACKPACK, 15412, 1);
	chatplayer(player, "NEUTRAL", "Here's a super large egg.", function () {
	CookStarted.stillneed(player, npc);
    });
	});
	} else if (api.getVarBit(player, 12206) == 1 || api.getVarBit(player, 12205) == 1 || api.getVarBit(player, 12204) == 1){
	chatnpc(player, npc, "NEUTRAL", "Thanks for the ingredients you have got so far; please get<br> the rest quickly. I'm running out of time! The Duke will<br> throw me out onto the street!", function () {
	CookStarted.stillneed(player, npc);
	});
	} else {
	chatplayer(player, "NEUTRAL", "I haven't got any of them yet, I'm still looking.", function () {
    chatnpc(player, npc, "NEUTRAL", "Please get the ingredients quickkly. I'm running out of time!<br> The duke will throw me out onto the street!", function () {
	CookStarted.stillneed(player, npc);
	});
	});
	}
	},
	stillneed : function (player, npc) {
	    if (api.getVarp(player, 2493) == 23) {
		chatnpc(player, npc, "NEUTRAL", "You've brought me everything I need! I am saved! Thank<br> you!", function () {
	    chatplayer(player, "NEUTRAL", "So, do I get to go to the Duke's party?", function () {	
        chatnpc(player, npc, "NEUTRAL", "I'm afraid not. Only the big cheeses get to dine with the<br> Duke.", function () {
        chatplayer(player, "NEUTRAL", "Well, maybe one day, I'll be important enough to sit at the Duke's table.", function () {	
        chatnpc(player, npc, "NEUTRAL", "Maybe, but I won't be holding my breath.", function () { 
	    api.addExperience(player, Stat.COOKING, 300, true);
	    api.addCarriedItem(player, 326, 20);
		api.addCarriedItem(player, 995, 500);
		api.setVarp(player, 2492, 2);
		api.setVarp(player, 2493, 48);
		api.incrementVarp(player, 1297,1);
	    api.openCentralWidget(player, 1244, false);
		api.setWidgetText(player, 1244, 25, "You have completed Cook's Assistant!");	
		api.setWidgetText(player, 1244, 26, "<br>1 Quest point<br>300 Cooking XP<br>500 coins<br>20 sardines<br>Access to the cook's range<br>Tow Treasure Hunter keys");
	    api.setWidgetText(player, 1244, 27, "Quest points:<col=ee1111> "+api.getVarp(player, 1297));			
        });
	    });
        });
	    });
        });
		} else {
		if (api.getVarBit(player, 12206) == 1) { 
		var QualityMilk = " ";
		} else {
		var QualityMilk = "Some top-quality milk.";	
		}
		if (api.getVarBit(player, 12205) == 1) { 
		var LargeEgg = " ";
		} else {
		var LargeEgg = "A super large egg.";	
		}
		if (api.getVarBit(player, 12204) == 1) { 
		var FineFlour = " ";
		} else {
		var FineFlour = "Some extra fine flour.";	
		}
		mesbox(player, "You still need to get:<br>"+ QualityMilk +" "+ FineFlour +" "+ LargeEgg , function () {	
		});
		}
		
	}	
}
 var Cook = {	
	maintalk : function (player, npc) {
		multi5(player, "SELECT AN OPTION", "What's wrong?", function () {		
		Cook.Whatswrong(player, npc);
		}, "Can you make me a cake?", function () {
		chatnpc(player, npc, "NEUTRAL", "*sniff* Don't talk to me about cakes...", function () {
		Cook.Whatswrong(player, npc);
		});	
		}, "You don't look very happy.", function () {	
		chatnpc(player, npc, "NEUTRAL", "No, I'm not. The world is caving in around me. I'm<br> overcome with dark feelings of impending doom.", function () {
		multi2(player, "SELECT AN OPTION", "What's wrong?", function () {	
		Cook.Whatswrong(player, npc);
		}, "I'd take the rest of the day off, if I were you.", function () {	
	    chatnpc(player, npc, "NEUTRAL", "No, that's the worst thing I could do. I'd get in terrible<br> trouble.", function () {
		chatplayer(player, "NEUTRAL", "Well, maybe you need to take a holiday...", function () {
		chatnpc(player, npc, "NEUTRAL", "That would be nice, but the Duke doesn't allow holidays<br> for core staff.", function () {
        chatplayer(player, "NEUTRAL", "Hmm, why not run away to the sea and start a new life as<br> a pirate?", function () {
        chatnpc(player, npc, "NEUTRAL", "My wife gets seasick and I have an irrational fear of<br> eyepatches. I don't see it working.", function () {		
		chatplayer(player, "NEUTRAL", "I'm afraid I've run out of ideas.", function () {	
		chatnpc(player, npc, "NEUTRAL", "I know, I'm doomed.", function () {	
		Cook.Whatswrong(player, npc);	
		}); 	
		}); 
		}); 	
		}); 
		});		
		}); 
		});	
	    }); 
		}); 
		}, "Nice hat!", function () {
		chatnpc(player, npc, "NEUTRAL", "Er, thank you. It's a pretty ordinary cook's hat, really.", function () {
		chatplayer(player, "NEUTRAL", "Still, it suits you. The trousers are pretty special too.", function () {
		chatnpc(player, npc, "NEUTRAL", "It's all standard-issue cook's uniform.", function () {
		chatplayer(player, "NEUTRAL", "The whole hat, apron and stripy trousers ensemble...it<br> works. It makes you look like a real cook.", function () {
		chatnpc(player, npc, "NEUTRAL", "I AM a real cook! I haven't got time to be chatting about culinary fashion, I'm in desperate need of help!", function () {
		Cook.Whatswrong(player, npc);
		}); 
		}); 
		}); 
		}); 
		});
		}, "What happened to the castle?", function () {
		chatnpc(player, npc, "NEUTRAL", "The castle really did suffer in the battle of Lumbridge. I'm<br> glad it's over", function () {
		chatnpc(player, npc, "NEUTRAL", "People came from all over the world to help rebuild, and<br> now things are getting back to normal. I'm glad - I have<br> important things to cook and I'm not letting anything get<br> in the way!", function () {
		chatnpc(player, npc, "NEUTRAL", "In fact, even now I'm preparing a cake for the Duke's<br> birthday! Although...umm...", function () {
		multi2(player, "SELECT AN OPTION", "What's the problem?", function () {
		Cook.Whatswrong(player, npc);
		}, "I'll let you get on with it!", function () {
		});	
		});	
		});	
		});	
		});	
	},
	Whatswrong : function (player, npc) {
		chatnpc(player, npc, "NEUTRAL", "Oh dear, oh dear, oh dear, I'm in a terrible, terrible mess!<br> It's the Duke's birthday today, and I should be making him<br> a lovely, big birthday cake using special ingredients...", function () {	
		chatnpc(player, npc, "NEUTRAL", "...but I've forgotten to get the ingredients. I'll never get<br> them in time now. He'll sack me! Whatever will I do? I have<br> four children and a goat to look after. Would you help me?<br> Please?", function () {
        //start quest
        multi2(player, "start quest?", "yes", function () {//TODO get the interface to start the quest
		api.setVarp(player, 2492, 1);
		chatnpc(player, npc, "NEUTRAL", "Oh, thank you, thank you. I must tell you that this is no<br> ordinary cake, though - only the best ingredients will do! I<br> need a super large egg, top-quality milk and some extra<br> fine flour.", function () {	
		chatplayer(player, "NEUTRAL", "Where can I find those, then?", function () {	
		chatnpc(player, npc, "NEUTRAL", "That's the problem: I dont exactly know. I usually send<br> my assistant to get them for me but he quit.", function () {	
		chatnpc(player, npc, "NEUTRAL", "I've marked some places on your world map in red. You<br> might want to consider investigating them.", function () {	
		}); 
		}); 
		}); 
		}); 
		}, "Not right now", function () {	
        chatnpc(player, npc, "NEUTRAL", "Fine. I always knew you adventurer types were callous<br> beasts. Go on your merry way!", function () {	
		});		
		}); 
		});
		});
	}

}