/**
 *  @author Greco
 */

var XeniaListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, npc, "NEUTRAL", "Hello again, adventurer.", function () {
				Xenia.one(player, npc);
	       });	  
		}
	}
});

var listen = function(scriptManager) {
	var listener = new XeniaListener();
	scriptManager.registerListener(EventType.OPNPC1, 9633, listener);
};

var Xenia = {
		
		one : function (player, npc) {
			multi4(player, "CHOOSE AN OPTION", "I've got a question about my adventure in the catacombs...", function () {		
				Xenia.multifive(player, npc);
			}, "I've lost some of the cultists' weapons.", function () {//TODO
				Xenia.weaponsone(player, npc);
			}, "I've lost the Helmet of Trials.", function () {
				Xenia.helmoftrialsone(player, npc);
			}, "I think I'll go now.", function () {
				Xenia.farewell(player, npc);
			});
			return;
		},
		
		multifive : function (player, npc) {
			multi5(player, "CHOOSE AN OPTION", "You weren't really wounded, were you?", function () {		
				Xenia.wounded(player, npc);
			}, "What will happen in the catacombs now?", function () {
				Xenia.catacombsone(player, npc);
			}, "What is a blood pact?", function () {
				Xenia.bloodpactone(player, npc);
			}, "Who was Dragith Nurn?", function () {
				Xenia.dragithnurnone(player, npc);
			}, "I think I'll go now.", function () {
				Xenia.farewell(player, npc);
			});
			return;
		},
		
		weaponsone : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Yes, one of my contacts in the Champions' Guild found them and returned them for me.", function () {	
				if(api.itemTotal(player, Inv.BACKPACK, 15597)) {
					mesbox(player, "Xenia has already given you Kayle's chargebow.", function () {
						Xenia.farewell(player, npc);
				    });	
					} else {
				    api.addCarriedItem(player, 15597, 1);
					chatobj(player, 15597, "Xenia gives you Kayle's chargebow.", function () {	
						if(api.itemTotal(player, Inv.BACKPACK, 15598)) {
							mesbox(player, "Xenia has already given you Caitlin's staff.", function () {
								Xenia.farewell(player, npc);
						    });	
							} else {
						    api.addCarriedItem(player, 15598, 1);
							chatobj(player, 15598, "Xenia gives you Caitlin's staff.", function () {	
								if(api.itemTotal(player, Inv.BACKPACK, 15596)) {
									mesbox(player, "Xenia has already given you Reese's sword.", function () {
										Xenia.farewell(player, npc);
								    });	
									} else {
								    api.addCarriedItem(player, 15596, 1);
									chatobj(player, 15596, "Xenia gives you Reese's sword", function () {	
										if(api.itemTotal(player, Inv.BACKPACK, 30053)) {
											mesbox(player, "Xenia has already given you Reese's off-hand sword.", function () {
												Xenia.farewell(player, npc);
										    });	
											} else {
										    api.addCarriedItem(player, 30053, 1);
											chatobj(player, 30053, "Xenia gives you Reese's off-hand sword", function () {	
												
									     	});
											} 
							     	});
									} 
					     	});
							} 
			     	});
					} 
			}); 
		},
		
		helmoftrialsone : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "These things happen. I've got a new one for you...", function () {	
				Xenia.helmoftrialstwo(player, npc);
			}); 
		},
		
		helmoftrialstwo : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "You're one of the most accomplished heroes I've ever seen. You've done things I can scarcely imagine, and I've lost count of the people who owe you their lives.", function () {	
				Xenia.helmoftrialsthree(player, npc);
			}); 
		},
		
		helmoftrialsthree : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "If there's any justice when history is written, your name will be among the greatest heroes of old. With Arrav; with Camorra; with Robert the Strong.", function () {	
				Xenia.helmoftrialsfour(player, npc);
			}); 
		},
		
		helmoftrialsfour : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "I've talked to some people at the Legends' and Hereos' guilds, and we've create a special prize for you. Think of it as a token of recognition from the whole adventuring community.", function () {	
				if(api.itemTotal(player, Inv.BACKPACK, 15599)) {
					mesbox(player, "You already have an ornamental helmet from Xenia.", function () {
						Xenia.farewell(player, npc);
				    });	
					} else {
				    api.addCarriedItem(player, 15599, 1);
					chatobj(player, 15599, "Xenia gives you an ornamental helmet.", function () {	
						Xenia.helmoftrialsfive(player, npc);
			     	});
					} 
			}); 
		},
		
		helmoftrialsfive : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "The honor is mine. You truly are an outstanding hero. I know with you on the scene, the world is in safe hands.", function () {	
				Xenia.farewell(player, npc);
			}); 
		},
		
		bloodpactone : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "It's something Zamorakian cults do sometimesl; a way of swearing loyatly to their leader.", function () {	
				Xenia.bloodpacttwo(player, npc);
			}); 
		},
		
		bloodpacttwo : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "A blood pact doesn't have real magical power, but that kind of thing can have great power over a person if they believe strongly enough.", function () {	
				Xenia.multifive(player, npc);
			}); 
		},
		
		dragithnurnone : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Dragith Nurn was a wizard. He studied at the Wizards' Tower, but he also studied the dark art, necromancy, on his own.", function () {	
				Xenia.dragithnurntwo(player, npc);
			}); 
		},
		
		dragithnurntwo : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "He had a secret magical workshop beneath Lumbridge. He would steal bodies from the graveyard and perform experiments on them.", function () {	
				Xenia.dragithnurnthree(player, npc);
			}); 
		},
		
		dragithnurnthree : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Necromancy was like an addication for him. When I met him he was very troubled; ver conflicted I convinced him to put an end to it all.", function () {	
				Xenia.dragithnurnfour(player, npc);
			}); 
		},
		
		dragithnurnfour : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "He couldn't destroy all the undead he had created - not permanently - so he trapped them all in the lower level of his workshop and sealed it off. He converted the upper level in these catacombs.", function () {	
				Xenia.dragithnurnfive(player, npc);
			}); 
		},
		
		dragithnurnfive : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Everyone thinks Dragith Nurn is buried here in this tomb, but he isn't. He built the tomb to hide the entrance to the lower level.", function () {	
				Xenia.dragithnurnsix(player, npc);
			}); 
		},
		
		dragithnurnsix : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Dragith Nurn is still down there. He knew that when he died he would rise again as a monster, so he sealed himself in with his creatues.", function () {	
			Xenia.multifive(player, npc);
			}); 
		},
		
		wounded : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Very perceptive, adventurer.", function () {	
				Xenia.woundedtwo(player, npc);
			}); 
		},
		
		woundedtwo : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "I was wounded, but not as badly as I looked. I took the opportunity to see how you would fare.", function () {	
				Xenia.multifive(player, npc);
			}); 
		},
		
		catacombsone : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Reese managed to complete the ritual with his own death. He's opened the lower level of the catacombs, which is swarming with undead.", function () {	
				Xenia.catacombstwo(player, npc);
			}); 
		},
		
		catacombstwo : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Without a nercromancer to control the, the creatures won't leave the tomb, I'll warn Father Aereck not to let people go down there.", function () {	
				Xenia.catacombsthree(player, npc);
			}); 
		},
		
		catacombsthree : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "You're an aventurer, though. If you want to, you can venture into the tomb and fight the creatures.", function () {	
				Xenia.multifive(player, npc);
			}); 
		},

		startTalk : function (player, npc) {
			chatplayer(player, "No, I'm afraid I don't.", function () {	
			}); 
		},
		
		farewell : function (player, npc) {
			chatnpc(player, npc, "NEUTRAL", "Farewell, adventurer.", function () {	
			}); 
		}		
}