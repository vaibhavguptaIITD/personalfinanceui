import React, { Component } from 'react';
import Service from './Service';
import BalanceGraphHighChartHelper from './BalanceGraphHighChartHelper'
import HighChartHelper from './HighChartHelper'

class BalanceGraph extends Component {

	componentDidMount() {
		Service.getBalance(this.props.account)
		.then(BalanceGraphHighChartHelper.getChartData)
		.then((data) => {
			HighChartHelper.createPieChart(this.props.account, data, `Graph for ${this.props.account}`);
		});
	}

	render() {
		return (
			<div>
				<div id={this.props.account}></div>
			</div>
		);
	}
}

export default BalanceGraph;