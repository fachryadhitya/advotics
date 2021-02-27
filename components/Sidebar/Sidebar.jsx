import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  AreaChartOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Sidebar() {
  return (
    <Sider collapsible>
      <div
        style={{
          height: "32px",
          margin: "16px",
          background: " rgba(0, 0, 0, 0.3)",
        }}
      />
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
