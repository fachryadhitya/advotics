import { useWindowWidth } from "@react-hook/window-size";
import { useState } from "react";
import LeftDrawer from "./LeftDrawer";
import Sidebar from "./Sidebar";

const TAB_SIZE = 992;

export default function SidebarContent() {
  const width = useWindowWidth();
  const [isVisible, setVisible] = useState(false);
  return width < TAB_SIZE ? (
    <LeftDrawer
      handleVisible={(visible) => setVisible(visible)}
      isVisible={isVisible}
    />
  ) : (
    <Sidebar />
  );
}
