import React,{ Component } from 'react';
import { getUsername } from 'util'
import Layout from 'common/layout'
import { Table } from 'antd'

const columns = [{
  title: '用户名',
  dataIndex: 'username',
  key: 'username',
}, {
  title: '是否是管理员',
  dataIndex: 'isAdmin',
  key: 'isAdmin',
  render:isAdmin=>(isAdmin ? '是' : '否')
}]; 

const dataSource = [{
  key: '1',
  username: '胡彦斌',
  isAdmin: true,
  // address: '西湖区湖底公园1号'
}, {
  key: '2',
  username: '胡彦祖',
  isAdmin: false,
  // address: '西湖区湖底公园1号'
}];


class User extends Component{

	render(){

		const data = [];
		for(let i = 0;i<500;i++){
			data.push({
				key:1,
				username:'test'+i,
				isAdmin:false
			})
		}

		return(
			<div>
				<Layout>
					<Table 
					dataSource={dataSource} 
					columns={columns} 
					pagination={
						{
							defaultCurrent:1,
							total:500,
							pageSize:10
						}
					}
					/>
				</Layout>
			</div>
		)
	}

}


export default User;