import { useEffect, useState, useRef } from "react";

import {
    List, Icon, Divider
} from "semantic-ui-react";


const bigCategoryStyleObj = {
    padding: 0,
    // margin: 10,
    fontSize: 14,
    color: "#808B96"
    // borderwidth: "2px",
    // borderStyle: "dashed",
}

const midCategoryStyleObj = {
    // paddingTop: 10,
    margin: 4,
    fontSize: 12,
    color: "#808B96",
    fontWeight: "normal"
    // borderwidth: "2px",
    // borderStyle: "dashed",
}

const smCategoryStyleObj = {
    paddingTop: 5,
    // margin: 10,
    fontSize: 12,
    color: "#808B96"
    // borderwidth: "2px",
    // borderStyle: "dashed",
}




const menuList = []

const SideMenu = () => {

    return (
        <>



            <List>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content style={bigCategoryStyleObj}>포트폴리오 전략
                        <List.List>
                            <List.Item>
                                {/* <List.Icon name='folder' /> */}
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>포트폴리오 대시보드</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                {/* <List.Icon name='folder' /> */}
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>카테고리 전반 HeatMap</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                {/* <List.Icon name='folder' /> */}
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>프로모션 지출</List.Header>
                                </List.Content>
                            </List.Item>


                            <List.Item>
                                <List.Icon name='folder' />
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>카테고리 전반 HeatMap</List.Header>
                                    <List.List>
                                        <List.Item>
                                            <List.Icon name='folder' />
                                            <List.Content>
                                                <List.Header style={midCategoryStyleObj}>default</List.Header>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='folder' />
                                            <List.Content>
                                                <List.Header style={midCategoryStyleObj}>my_theme</List.Header>
                                            </List.Content>
                                        </List.Item>
                                    </List.List>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='file' />
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>theme.config</List.Header>
                                </List.Content>
                            </List.Item>
                        </List.List>
                    </List.Content>
                </List.Item>
            </List>

            <Divider />








            <List>
                <List.Item>
                    <List.Icon name='box' />
                    <List.Content>
                        <List.Header style={bigCategoryStyleObj}>포트폴리오 전략</List.Header>
                        <List.List>
                            <List.Item>
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>포트폴리오 대시보드</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>카테고리 전반 HeatMap</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>프로모션 지출</List.Header>
                                </List.Content>
                            </List.Item>
                        </List.List>
                    </List.Content>
                </List.Item>
            </List>
            <Divider />
            <List>
                <List.Item>
                    <List.Icon name='box' />
                    <List.Content>
                        <List.Header style={bigCategoryStyleObj}>카테고리 분석</List.Header>
                        <List.List>
                            <List.Item>
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>카테고리 대시보드</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>매출 및 마진</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>매출 및 마진 증가분</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>프로모션 목록</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content style={midCategoryStyleObj}>
                                    <Icon name='folder' />
                                    실적 동인
                                    <List.List>
                                        <List.Item>
                                            <List.Icon />
                                            <List.Content style={midCategoryStyleObj}>
                                                <List.List>
                                                    <List.Item>
                                                        <List.Content style={midCategoryStyleObj} >
                                                            메뉴명1
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Content style={midCategoryStyleObj} >
                                                            메뉴명1
                                                        </List.Content>
                                                    </List.Item>

                                                    <List.Item>
                                                        <List.Content style={midCategoryStyleObj} >
                                                            메뉴명1
                                                        </List.Content>
                                                    </List.Item>

                                                </List.List>
                                            </List.Content>
                                        </List.Item>
                                    </List.List>


                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content style={midCategoryStyleObj}>
                                    <Icon name='folder' />
                                    default
                                </List.Content>
                            </List.Item>





                            <List.Item>


                                <List.Icon name='folder' />
                                <List.Content>
                                    <List.Header style={midCategoryStyleObj}>실적 동인</List.Header>
                                    <List.List>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header style={midCategoryStyleObj}>카테고리 대시보드</List.Header>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header style={midCategoryStyleObj}>매춣 및 마진</List.Header>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header style={midCategoryStyleObj}>매출 및 마진 증가분</List.Header>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header style={midCategoryStyleObj}>프로모션 목록</List.Header>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header style={midCategoryStyleObj}>실적 동인</List.Header>
                                            </List.Content>
                                        </List.Item>
                                    </List.List>

                                </List.Content>
                            </List.Item>
                        </List.List>
                    </List.Content>
                </List.Item>
            </List>






            {/* <a style={styleObj} href="#" > 메뉴명-test10 </a>
            <a style={styleObj} href="#" > 메뉴명-test10 </a>
            <a style={styleObj} href="#" > 메뉴명-test10 </a>
            <a style={styleObj} href="#" > 메뉴명-test10 </a>
            <a style={styleObj} href="#" > 메뉴명-test10 </a>
            <a style={styleObj} href="#" > 메뉴명-test10 </a> */}
        </>

        // <div style={{ backgroundColor: "yellow", width: "300px", color: "red", textAlign: "center", fontSize: "16px", fontWeight: "bold", padding: "10px", borderWidth: 2, borderStyle: 'dashed', justifyContent: 'center', }}>

        // </div>
    );
}

export default SideMenu; 