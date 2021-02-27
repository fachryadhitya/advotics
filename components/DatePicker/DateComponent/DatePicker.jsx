import React, { useState } from "react";
import {
  DateRangePicker,
  createStaticRanges,
  DateRange,
} from "react-date-range";
import { addDays, addMonths, format, startof, startOfMonth } from "date-fns";
import { defineds } from "../../../utils";
import { Modal, Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import styles from "./DatePicker.module.css";
import { useWindowWidth } from "@react-hook/window-size";

const sideBarOptions = () => {
  const customDateObjects = [
    {
      label: "Today",
      range: () => ({
        startDate: defineds.startOfToday,
        endDate: defineds.endOfToday,
      }),
    },
    {
      label: "Yesterday",
      range: () => ({
        startDate: defineds.startOfYesterday,
        endDate: defineds.endOfYesterday,
      }),
    },
    {
      label: "Last 7 Days",
      range: () => ({
        startDate: defineds.startOfLastWeek,
        endDate: defineds.endOfLastWeek,
      }),
    },
    {
      label: "Last 30 Days",
      range: () => ({
        startDate: defineds.startOfLastMonth,
        endDate: defineds.endOfLastMonth,
      }),
    },
    {
      label: "This Month",
      range: () => ({
        startDate: defineds.startOfMonth,
        endDate: defineds.endOfToday,
      }),
    },
    {
      label: "Custom",
      range: () => ({
        startDate: defineds.startOfToday,
        endDate: defineds.endOfToday,
      }),
    },
  ];

  return customDateObjects;
};

const TAB_SIZE = 768;
const TAB_SIZE_RANGE = 1024;

export default function DatePickerComponentt() {
  const width = useWindowWidth();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const startDate = state.map((i) => format(i.startDate, "dd MMMM yyyy"));
  const endDate = state.map((i) => format(i.endDate, "dd MMMM yyyy"));

  const sideBar = sideBarOptions();

  const staticRanges = [
    // ...defaultStaticRanges,
    ...createStaticRanges(sideBar),
  ];

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.button}
        type="default"
        onClick={showModal}
        icon={<CalendarOutlined />}
      >
        <p style={{ marginBottom: "0" }}>
          Period {startDate} - {endDate}
        </p>
      </Button>
      <Modal
        width={1000}
        title="Period"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {width < TAB_SIZE ? (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            color="#37B04C"
            rangeColors={["#37B04C"]}
            maxDate={startOfMonth(addMonths(new Date(), +6))}
          />
        ) : (
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction={width < TAB_SIZE_RANGE ? "vertical" : "horizontal"}
            staticRanges={staticRanges}
            color="#37B04C"
            rangeColors={["#37B04C"]}
            maxDate={startOfMonth(addMonths(new Date(), +6))}
          />
        )}
      </Modal>
    </div>
  );
}
