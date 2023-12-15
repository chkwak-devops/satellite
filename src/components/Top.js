import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState, useRef } from "react";
import { Icon, Dropdown, Button } from "semantic-ui-react";
import { useRouter } from "next/router";

const styleMenuLogoObj = {
  float: "left",
  width: "50%",
  borderColor: "red",
  paddingLeft: 20,
  // borderWidth: 2,
  // borderStyle: 'dashed',
  // justifyContent: 'center'
};

const options = [
  {
    key: "home",
    icon: "home",
    text: "home",
    value: "/",
  },
  { key: "delete", icon: "delete", text: "Remove Post", value: "/test" },
  { key: "hide", icon: "hide", text: "Hide Post", value: "/main" },
];

const Top = () => {
  const router = useRouter();

  const menuMove = (e, { value }) => {
    router.push(value);
  };

  return (
    <>
      <div style={styleMenuLogoObj}>
        {/* <img src="/images/emart_logo.png" width="60" /> */}
        <span style={{ fontSize: "14px", paddingLeft: "10px" }}>
          <font color="#fab601">S</font>atellite <font color="#fab601">AI</font>
        </span>
      </div>
      <div
        style={{
          width: "50%",
          textAlign: "right",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        <Dropdown
          style={{ fontSize: "12px" }}
          text="Setting"
          icon="setting"
          direction="left"
          options={options}
          onChange={menuMove}
        />
      </div>
    </>
  );
};

export default Top;
