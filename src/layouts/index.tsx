import React from "react";
import { Layout } from 'antd';
import Menu from "./menu";
import * as logo from "../assets/logo.png";
import styles from "./index.css";

const { Header, Content, Footer, Sider } = Layout;

const BasicLayout: React.FC = props => {

  const today = new Date();
  const currYear = today.getFullYear()
  
  return (
    <Layout>
      <Header className="header" >
          <img className={styles.logo} src={logo} />
      </Header>

      <Content>
          <Layout className="site-layout-background">
              <Sider className="site-layout-background" width={200}>
                  <Menu />
              </Sider>

              <Content style={{ padding: '24px', minHeight: 280, background: "#fff" }}>{props.children}</Content>
          </Layout>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Footer ©{currYear} Created by Me</Footer>
  </Layout>
  );
};

export default BasicLayout;




  