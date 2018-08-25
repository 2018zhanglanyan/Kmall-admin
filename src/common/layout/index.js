import React,{ Component } from 'react';

// import { Layout } from 'antd';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import MyHeader from 'common/header';
import MySider from 'common/sider';

class MyLayout extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <MyHeader />
                    <Layout>
                    <MySider />
                      <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                         {this.props.children}
                        </Content>
                      </Layout>
                    </Layout>
                </Layout>,
            </div>
        )
    }

}

export default MyLayout;