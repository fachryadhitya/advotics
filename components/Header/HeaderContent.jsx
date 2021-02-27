import DatePickerComponentt from "../DatePicker/DateComponent/DatePicker";
import styles from "./HeaderContent.module.css";

export default function HeaderContent() {
  return (
    <>
      <div className={styles.topbar}>
        <img
          className={styles.image}
          src="https://www.advotics.com/wp-content/uploads/2019/07/advotics-logo-optimize.jpg"
          alt="advotics"
        />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Dashboard</h1>
        <DatePickerComponentt />
      </div>
    </>
  );
}
