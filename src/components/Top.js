import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState, useRef } from "react";

import {
    Icon
} from "semantic-ui-react";

const styleMenuLogoObj = {
    float: "left",
    width: "50%",
    borderColor: "red",
    paddingLeft: 20,
    // borderWidth: 2,
    // borderStyle: 'dashed', 
    // justifyContent: 'center'
}

const Top = () => {

    return (
        <>
            <div style={styleMenuLogoObj}>
                <img src="/images/emart_logo.png" width="60" />
                <span style={{ fontSize: "14px", paddingLeft: "10px" }}>
                    <font color="#fab601">P</font>romotions <font color="#fab601">A</font>ccelerator
                </span>
            </div>
            <div style={{
                width: "50%", textAlign: "right",
                fontSize: 16
            }}>
                <Icon name='angle right' /> 환경 설정
            </div>
        </>
        // <div style={{ color: "red", textAlign: "center", fontSize: "16px", fontWeight: "bold", padding: "10px", borderWidth: 5, borderStyle: 'dashed', justifyContent: 'center', }}>
        //     Top
        // </div>
    );
}

export default Top;  