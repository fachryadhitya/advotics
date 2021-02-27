import React from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import ScrollBar from '../ScrollBar';
// import SidebarContent from "./SidebarContent";

const LeftDrawer = ({ isVisible, handleVisible }) => {
  const onClose = () => {
    handleVisible(false);
  };

  return (
    <div className="ant-drawer-content-wrapper" style={{ overflow: "hidden" }}>
      <div
        // className="gx-layout-sider-scrollbar"
        style={{ minHeight: "100vh" }}
      >
        <Drawer
          //   className="gx-drawer-sidebar"

          placement="left"
          onClose={onClose}
          visible={isVisible}
          closable={false}
        >
          <MenuOutlined />
          <p>some content</p>
        </Drawer>
      </div>
    </div>
  );
};

export default LeftDrawer;
