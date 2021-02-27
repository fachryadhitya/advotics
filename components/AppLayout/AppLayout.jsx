import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import HeaderContent from "../Header/HeaderContent";
import SidebarContent from "../Sidebar";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AppLayout({ children }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SidebarContent />

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            background: "transparent",
          }}
        >
          <HeaderContent />
        </Header>
        <Content style={{ margin: "0 16px", marginTop: "1.875rem" }}>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>Advotics Dashboard</Footer>
      </Layout>
    </Layout>
  );
}
