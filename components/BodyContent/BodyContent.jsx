import TextCard from "./Card/Card";
import ProductContent from "./ProductContent/ProductContent";
import { BulbOutlined, UpOutlined } from "@ant-design/icons";
import styles from "./BodyContent.module.css";

export default function BodyContent() {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Market Insights</h2>
        <div>
          <BulbOutlined className={styles.icon} />
          <a className={styles.title}>Click Here For Help</a>
          <UpOutlined className={styles.icon} />
        </div>
      </div>

      <TextCard />
      <ProductContent />
    </>
  );
}
