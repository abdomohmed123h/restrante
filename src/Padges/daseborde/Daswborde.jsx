import React from "react";
 import styles from "./Daswborde.module.css";

export default function Dashboard() {
  return (
    <>
      <div className="bg-dark h-100 flex-grow-1" id={styles.dasboard}>
        <div className="container-fluid">
          <h1 className="text-center text-white">Dashboard</h1>
        </div>
      </div>
    </>
  );
}
