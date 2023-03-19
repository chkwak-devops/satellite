import { useEffect, useState, useRef } from "react";
import styles from "@/styles/Home.module.css";

import { Icon, Dropdown, Button, Header } from "semantic-ui-react";

const TestMenu = () => {
  useEffect(() => {}, []);

  return (
    <>
      <main
        className={styles.main}
        style={{
          borderWidth: 5,
          borderStyle: "dashed",
        }}
      >
        <div>
          <Header as="h3" icon="plug" content="이마트 대시보드" />
        </div>

        <div
          style={{
            float: "left",
            width: "800px",
          }}
        >
          {/* <div> */}
          <div
            style={{
              float: "left",
              paddingRight: 10,
              marginRight: 10,
              color: "blue",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px",
              borderWidth: 5,
              borderStyle: "dashed",
            }}
          >
            TestMenu
          </div>
          <div
            style={{
              float: "left",
              padding: 10,

              color: "blue",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px",
              borderWidth: 5,
              borderStyle: "dashed",
            }}
          >
            TestMenu
          </div>
        </div>
      </main>
    </>
  );
};

export default TestMenu;
