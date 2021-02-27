import { ArrowDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import styles from "./Card.module.css";

export default function TextCard() {
  return (
    <Card className={styles.cardWrapper}>
      <h3 style={{ marginBottom: "0" }}>Sales Turnover</h3>

      <div className={styles.salesLayout}>
        <div className={styles.wrapper}>
          <p className={styles.price}>Rp. 3,600,000</p>
          <p className={styles.detail}>
            <span className={styles.iconLayout}>
              <ArrowDownOutlined
                style={{ color: "red", marginRight: "0.3rem" }}
              />
              13.8%
            </span>
            last period in product sold
          </p>
        </div>

        <ShoppingCartOutlined className={styles.bigIcon} />
      </div>
    </Card>
  );
}
