import React,{ Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Dropdown } from 'antd';
import { USER_LOGOUT } from 'api';
import { request,getUsername,removeUsername } from 'util'
import './index.css'
const { Header, Content, Sider } = Layout;

const { SubMenu } = Menu;


class MyHeader extends Component{

	constructor(props){
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout(){
	  	request({
	  		url:USER_LOGOUT
	  	})
	  	.then((result)=>{
	  		if(result.code == 0){
	  			removeUsername();
	  			window.location.href = '/login';
	  		}
	  	})
	  	.catch(e=>{
	  		console.log(e);
	  	})
	}


	render(){

		const menu = (
		  <Menu onClick={ this.handleLogout }>
		    <Menu.Item key="0">
		      <Icon type="logout" />退出
		    </Menu.Item>
		  </Menu>
		)

		return(
			<div>
		        <Header className="header">
	              <div className="logo"> KMALL </div>
	              <Dropdown overlay={menu} trigger={['click']}>
				    <a className="ant-dropdown-link" href="#">
				      { getUsername() } <Icon type="down" />
				    </a>
				  </Dropdown>
	            </Header>
	             
            </div>
		)
	}

}


export default MyHeader;