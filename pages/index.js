import Head from "next/head";
import AppLayout from "../components/AppLayout/AppLayout";
import BodyContent from "../components/BodyContent/BodyContent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Advotics Dashboard</title>
      </Head>
      <div>
        <AppLayout>
          <BodyContent />
        </AppLayout>
      </div>
    </>
  );
}
