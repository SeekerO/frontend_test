'use client'

import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./gallery";
import useFetchAPI from "./hooks/useFetchAPI";

export default function Home() {
  const { newData, setNewData, fetchNewDataAPI } = useFetchAPI()

  return (
    <main className={styles.main}>
      <Gallery users={newData} handleFunctionNewData={fetchNewDataAPI} />
    </main>
  );
}


