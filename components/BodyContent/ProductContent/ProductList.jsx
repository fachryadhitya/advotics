import { MoreOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { dummyData } from "../../../utils/index";
import styles from "./ProductContent.module.css";

export default function ProductList({ text }) {
  return (
    <Card className={styles.listCardWrapper} style={{ width: "100%" }}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{text}</h3>
        <span>
          <MoreOutlined className={styles.icon} />
        </span>
      </div>

      <div className={styles.listLayout}>
        {dummyData.map((item, i) => (
          <div key={i} className={styles.cardList}>
            <img className={styles.image} src={item.image} alt="Product" />

            <div className={styles.product}>
              <h4 className={styles.productName}>{item.name}</h4>
              <div className={styles.priceWrapper}>
                <p className={styles.productPrice}>Rp. {item.harga} </p>
                <p>{item.qty} Pcs </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
