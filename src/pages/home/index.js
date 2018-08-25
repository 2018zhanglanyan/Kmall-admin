import React,{ Component } from 'react';
import Layout from 'common/layout'
import { Card } from 'antd'
import * as actionCreator from './store/actionCreates.js'
import { connect } from 'react-redux'

import './index.css'

class MyHome extends Component{

	componentDidMount(){
		this.props.handleCount()
	}
	render(){
		return(
			<div className="Home">
				<Layout>
					<Card title="用户数" hoverable={true}>
					    <p>{this.props.usernum}</p>
					</Card>
					<Card title="订单数" hoverable={true}>
					    <p>{this.props.ordernum}</p>
					</Card>
					<Card title="商品数" hoverable={true}>
					    <p>{this.props.productnum}</p>
					</Card>
				</Layout>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		usernum:state.get('home').get('usernum'),
		ordernum:state.get('home').get('ordernum'),
		productnum:state.get('home').get('productnum')
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		handleCount:()=>{
			const action =actionCreator.GetCountAction();
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(MyHome);