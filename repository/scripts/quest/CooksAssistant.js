var CooksAssistant = {
		showQuestJournal : function (player, questLog) {
			if(questApi.isFinished(player, 6)) {
				questLog.setJournalLine(player, 1, "");
				questLog.setJournalLine(player, 2, "<col=999999>It was the Duke of Lumbridge's birthday, but his cook had forgotten to buy the");
				questLog.setJournalLine(player, 3, "<col=999999>ingredients he needed to bake a birthdat cake. I brought the cook an egg, a pot");
				questLog.setJournalLine(player, 4, "<col=999999>of flour and a bucket of milk and the cook made a delicious-looking cake with");
				questLog.setJournalLine(player, 5, "<col=999999>them");
				questLog.setJournalLine(player, 6, "");
				questLog.setJournalLine(player, 7, "<col=FFFFFF>QUEST COMPLETE!");
				questLog.setJournalLine(player, 8, "<col=EB981F>I gained <col=EBE076>1 Quest Point<col=EB981F>, <col=EBE076>20 sardines<col=EB981F>, <col=EBE076>500 coins <col=EB981F>and <col=EBE076> 300 Cooking XP<col=EB981F>.");
				questLog.setJournalLine(player, 9, "<col=EB981F>I have also gained <col=EBE076>two prize keys<col=EB981F> for <col=EBE076>Treasure Hunter<col=EB981F>!");
				questLog.setJournalLine(player, 10, "<col=EB981F>The cook now also lets me use his high-quality <col=EBE076>range<col=EB981F>, which burns certain low-");
				questLog.setJournalLine(player, 11, "<col=EB981F>level dishes less often thsn other ranges.");
			} else if(questApi.isStarted(player, 6)) {
			if (api.getVarBit(player, 12206) == 1) { 
		    var QualityMilk = "I have given the cook a bucket of top-quality milk.";
		    } else {
		    var QualityMilk = "<col=EB981F>I need to find a <col=EBE076>bucket of top-quality milk<col=EB981F>.";	
		    }
		    if (api.getVarBit(player, 12205) == 1) { 
		    var LargeEgg = "I have given the cook a super large egg.";
		    } else {
		    var LargeEgg = "<col=EB981F>I need to find a <col=EBE076>super large egg<col=EB981F>.";	
		    }
	    	if (api.getVarBit(player, 12204) == 1) { 
		    var FineFlour = "I have given the cook a pot of extra fine flour.";
		    } else {
		    var FineFlour = "<col=EB981F>I need to find a <col=EBE076>pot of extra fine flour<col=EB981F>.";	
		    }
				questLog.setJournalLine(player, 1, "");
				questLog.setJournalLine(player, 2, "<col=EB981F>It's the <col=EBE076>Duke of Lumbridge's <col=EB981F>birthday and I have to help his <col=EBE076>cook<col=EB981F> make him a");
			    questLog.setJournalLine(player, 3, "birthday cake. <col=EB981F>To do this I need to bring the cook the following ingredients:");
				questLog.setJournalLine(player, 4, "");
				questLog.setJournalLine(player, 5, QualityMilk);
				questLog.setJournalLine(player, 6, FineFlour);
				questLog.setJournalLine(player, 7, LargeEgg);
				questLog.setJournalLine(player, 8, "");
				questLog.setJournalLine(player, 9, "<col=EB981F>According to the <col=EBE076>cook<col=EB981F>, I can find the ingredients in the vicinty of <col=EBE076>Lumbridge<col=EB981F>, He");
				questLog.setJournalLine(player, 10, "<col=EB981F>has noted certain possible locations of the ingredients on my world map.");
			} else {
				questLog.setJournalLine(player, 1, "");
				questLog.setJournalLine(player, 2, "<col=EB981F>I can start this quest by speaking to the <col=EBE076>Cook<col=EB981F> in the <col=EBE076>kitchen<col=EB981F> of <col=EBE076>Lumbridge");
				questLog.setJournalLine(player, 3, "<col=EBE076>Castle<col=EB981F>.");
			}
		}
}