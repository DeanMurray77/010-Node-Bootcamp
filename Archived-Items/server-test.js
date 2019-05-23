// Play
(function() {
	// populate the 'data' object
	// e.g., data.table = $sp.getValue('table');
	// modified by Earl Lewis Feb. 17, 2017
	// commented out cost and resource fields and added budget fields for report display
	
	function getIcon(value) {
		if ( value == 'green' )
			return 'fa-check-circle';
		else if ( value == 'yellow' )
			return 'fa-minus-circle';
		else if ( value == 'na' )
			return 'fa-ban';
		else
			return 'fa-exclamation-circle';
	}
	
	var s = new PmProjectStatusReport();
	data.limit = 9;
	var endDate = new GlideDate();
	
	var statuses = s.getStatuses($sp.getParameter('sysparm_sys_id'), endDate, data.limit);

	data.categories = [];
	data.categories.push({label: gs.getMessage('Overall'), name: 'overall'});
	data.categories.push({label: gs.getMessage('Schedule'), name: 'schedule'});
	//data.categories.push({label: gs.getMessage('Cost'), name: 'cost'});
	//data.categories.push({label: gs.getMessage('Resources'), name: 'resources'});
	data.categories.push({label: gs.getMessage('Scope'), name: 'scope'});
	data.categories.push({label: gs.getMessage('Budget'), name: 'budget'});
		
	data.statuses = {};
	data.statuses.overall = [];
	//data.statuses.cost = [];
	data.statuses.schedule = [];
	data.statuses.scope = [];
	//data.statuses.resources = [];
	data.statuses.budget = [];
	data.dates = [];
	
	for ( var i=0; i < statuses.length; i++ ) {
		data.statuses.overall.push({icon: getIcon(statuses[i].overall), comment: statuses[i].comments});
		//data.statuses.cost.push({icon: getIcon(statuses[i].cost), comment: statuses[i].cost_comments});		
		//data.statuses.resources.push({icon: getIcon(statuses[i].resources), comment: statuses[i].resources_comments});
		data.statuses.schedule.push({icon: getIcon(statuses[i].schedule), comment: statuses[i].schedule_comments});
		data.statuses.scope.push({icon: getIcon(statuses[i].scope), comment: statuses[i].scope_comments});
		data.statuses.budget.push({icon: getIcon(statuses[i].budget), comment: statuses[i].budget_comments});
		data.dates.push(statuses[i].date);
	}
	//gs.info("cost_comment: " + (new JSON()).encode(data.statuses.cost));
})();