const getChartData = (accountData) => {
	var seriesData = [],
	drillDownData = {},
	masterChartData = {};
	accountData.forEach(function(entry){
		try{
			process(entry, masterChartData);	
		}
		catch(e){
			var parentEntry = {
			    "total": {
			      "currency": "",
			      "amount": entry.total.amount,
			    },
			    "account": {
			      "fullname": getParentCategoryName(entry),
			      "shortname": getParentCategoryShortName(entry)
			    }
			}
			process(parentEntry, masterChartData);
			process(entry, masterChartData);
		}
	});
	var values = Object.values(masterChartData);
	seriesData = values.shift().data;
	drillDownData.series = values.filter(function(item){
		return !!item.data.length;
	});
	return { seriesData, drillDownData};
}

const process = (entry, masterChartData) => {
	var shortname = entry.account.shortname,
	fullname = entry.account.fullname;
	masterChartData[fullname] = {
		id: fullname,
		name: shortname,
		data: []
	};
	if(fullname.indexOf(":") !== -1){
		var parentCategory = getParentCategoryName(entry),
		parentCategoryData = masterChartData[parentCategory];
		if(parentCategoryData !== undefined){
			parentCategoryData.data.push({
				name: shortname,
				drilldown: fullname,
				y: entry.total.amount
			})
		}
		else {
			throw 'invalid entry: ', fullname, 'doesn"t contain ', parentCategory, ' as parent';
		}
	}
}

const getParentCategoryName = (entry) => {
	var fullname = entry.account.fullname;
	return fullname.slice(0,fullname.lastIndexOf(':'));
}

const getParentCategoryShortName = (entry) => {
	var fullnameArr = entry.account.fullname.split(":");
	return fullnameArr[fullnameArr.length - 2];
}

const BalanceGraphHighChartHelper = { getChartData };
export default BalanceGraphHighChartHelper;