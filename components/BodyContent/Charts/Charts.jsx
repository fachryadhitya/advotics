import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Button, Card, Dropdown, Menu } from "antd";
import { useState } from "react";
import { data1, data2 } from "../../../utils";
import { DownOutlined } from "@ant-design/icons";
import styles from "./Charts.module.css";

export default function Charts() {
  const [dropdown, setDropdown] = useState("6");

  const handleClick = (e) => {
    console.log(e);
    setDropdown(e.key);
  };
  const menu = (
    <Menu onClick={handleClick}>
      <Menu.Item key="2">Last 2 Month</Menu.Item>
      <Menu.Item key="6">Last 6 Month</Menu.Item>
    </Menu>
  );
  return (
    <Card
      // style={{
      //   width: "50%",
      // }}
      className={styles.cardWrapper}
    >
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Average Purchase Value</h1>

        <Dropdown overlay={menu} trigger={["click"]}>
          <Button className={styles.button}>
            Last {dropdown} Month <DownOutlined />
            {/* <span>
              
            </span> */}
          </Button>
        </Dropdown>
      </div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%" aspect={1.5}>
          <ComposedChart
            className={styles.chart}
            width={500}
            // height={400}
            data={dropdown === "6" ? data1 : data2}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gross" barSize={20} fill="#37B04C" />
            <Line type="monotone" dataKey="nett" stroke="#FFE854" />
            <Line type="monotone" dataKey="upt" stroke="#FFE854" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
