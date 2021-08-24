import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <Layout>
      <Header className="header">
          <div className="logo" />
      </Header>

      <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
              
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              
            </Menu>
          </Sider>

          <Content style={{ padding: '0 24px', minHeight: 280 }}>{props.children}</Content>
        </Layout>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Footer ©2018 Created by Me</Footer>
  </Layout>
  );
};

export default BasicLayout;




  