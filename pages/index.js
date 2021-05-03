import Head from "next/head";
import Image from "next/image";
import { Toolbar } from "../components/ToolBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next JS News App</h1>
        <h3>Latest News Articles</h3>
      </div>
    </div>
  );
}
