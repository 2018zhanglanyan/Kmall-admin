import React,{ Component } from 'react';
import { Alert } from 'antd'
import './index.css'
import { Link } from 'react-router-dom'

class ErrorPage extends Component{

	render(){
		return(
			<div className="ErrorPage">
				<Alert message="页面加载错误！！！" type="error" />
		        <Link to="/">返回首页</Link>
            </div>
		)
	}

}


export default ErrorPage;