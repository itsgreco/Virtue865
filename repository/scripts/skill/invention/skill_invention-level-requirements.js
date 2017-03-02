
var DisassemblyLevelRequirements = {
		
		getLevelRequiements : function (itemId) {
			switch (itemId) {
			case 39://Bronze arrowheads
				return 1;
			case 40://Iron arrowheads
				return 15;
			
			case 1511://Normal logs
				return 1;
			case 1513://Magic logs
				return 75;
			case 1515://Yew logs
				return 60;
			case 1517://Maple logs
				return 45;
			case 1519://Willow logs
				return 30;
			case 1521://Oak logs
				return 15;
			case 29556://Elder logs
				return 90;
						
			case 1317://Adamant 2h sword
				return 40;
			default:
				return 1;
			}
		}		
	
}