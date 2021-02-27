import { Card, Dropdown, Menu } from "antd";
import { useState } from "react";
import Charts from "../Charts/Charts";
import ProductList from "./ProductList";
import styles from "./ProductContent.module.css";

export default function ProductContent() {
  return (
    <>
      <div className={styles.wrapper}>
        <Charts />
        <div className={styles.productListWrapper}>
          <ProductList text="Best Selling SKU" />
          <ProductList text="top competitor SKU" />
        </div>
      </div>
    </>
  );
}
