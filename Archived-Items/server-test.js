// Original
(function() {
	// populate the 'data' object
	// e.g., data.table = $sp.getValue('table');
	
	function getIcon(value) {
		if ( value == 'green' )
			return 'icon-success-circle';
		else if ( value == 'yellow' )
			return 'icon-not-started-circle';
		else
			return 'icon-warning-circle';
	}
	
	var s = new PmProjectStatusReport();
	data.limit = 11;
	var endDate = $sp.getParameter('sysparm_status_date') || (new GlideDate()).getDisplayValue();
	
	var statuses = s.getStatuses($sp.getParameter('sysparm_sys_id'), endDate, data.limit);

	data.categories = [];
	data.categories.push({label: gs.getMessage('Overall'), name: 'overall'});
	data.categories.push({label: gs.getMessage('Schedule'), name: 'schedule'});
	data.categories.push({label: gs.getMessage('Cost'), name: 'cost'});
	data.categories.push({label: gs.getMessage('Resources'), name: 'resources'});
	data.categories.push({label: gs.getMessage('Scope'), name: 'scope'});
		
	data.statuses = {};
	data.statuses.overall = [];
	data.statuses.cost = [];
	data.statuses.schedule = [];
	data.statuses.scope = [];
	data.statuses.resources = [];
	data.dates = [];
	
	for ( var i=0; i < statuses.length; i++ ) {
		data.statuses.overall.push({icon: getIcon(statuses[i].overall), comment: statuses[i].comments});
		data.statuses.cost.push({icon: getIcon(statuses[i].cost), comment: statuses[i].cost_comments});		
		data.statuses.resources.push({icon: getIcon(statuses[i].resources), comment: statuses[i].resources_comments});
		data.statuses.schedule.push({icon: getIcon(statuses[i].schedule), comment: statuses[i].schedule_comments});
		data.statuses.scope.push({icon: getIcon(statuses[i].scope), comment: statuses[i].scope_comments});
		data.dates.push(statuses[i].date);
	}
	//gs.info("cost_comment: " + (new JSON()).encode(data.statuses.cost));
})();