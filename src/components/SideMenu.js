import { useEffect, useState, useRef } from "react";

import { List, Icon, Divider, Accordion, Menu, Form } from "semantic-ui-react";

const bigCategoryStyleObj = {
  padding: 0,
  // margin: 10,
  fontSize: 14,
  color: "#808B96",
  // borderwidth: "2px",
  // borderStyle: "dashed",
};

const midCategoryStyleObj = {
  fontSize: 12,
  color: "#808B96",
  fontWeight: "normal",
  // borderwidth: "2px",
  // borderStyle: "dashed",
};

const smCategoryStyleObj = {
  paddingTop: 5,
  // margin: 10,
  fontSize: 12,
  color: "#808B96",
  // borderwidth: "2px",
  // borderStyle: "dashed",
};

const SideMenu = () => {
  const [activeIndex, setActiveIndex] = useState(false);

  const handleAccordianClick = () => {
    console.log(activeIndex);

    setActiveIndex(activeIndex ? false : true);
  };

  return (
    <>
      <List>
        <List.Item>
          <List.Icon name="folder" />
          <List.Content style={bigCategoryStyleObj}>
            포트폴리오 전략
            <List.List>
              <List.Item>
                {/* <List.Icon name='folder' /> */}
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    포트폴리오 대시보드
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                {/* <List.Icon name='folder' /> */}
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    카테고리 전반 HeatMap
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                {/* <List.Icon name='folder' /> */}
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    프로모션 지출
                  </List.Header>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name="folder" />
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    카테고리 전반
                  </List.Header>
                  <List.List>
                    <List.Item>
                      {/* <List.Icon name="folder" /> */}
                      <List.Content>
                        <List.Header style={midCategoryStyleObj}>
                          default
                        </List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      {/* <List.Icon name="folder" /> */}
                      <List.Content>
                        <List.Header style={midCategoryStyleObj}>
                          my_theme
                        </List.Header>
                      </List.Content>
                    </List.Item>
                  </List.List>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="file" />
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>메뉴명1</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex}
                    index={0}
                    onClick={handleAccordianClick}
                    style={midCategoryStyleObj}
                  >
                    <Icon name="file" />
                    아코디언 메뉴
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex}>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Header style={midCategoryStyleObj}>
                            서브메뉴1
                          </List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header style={midCategoryStyleObj}>
                            서브메뉴2
                          </List.Header>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </Accordion.Content>
                </Accordion>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
      </List>

      <Divider />

      <List>
        <List.Item>
          <List.Icon name="box" />
          <List.Content>
            <List.Header style={bigCategoryStyleObj}>
              포트폴리오 전략
            </List.Header>
            <List.List>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    포트폴리오 대시보드
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    카테고리 전반 HeatMap
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    프로모션 지출
                  </List.Header>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
      </List>

      <Divider />
      <List>
        <List.Item>
          <List.Icon name="box" />
          <List.Content>
            <List.Header style={bigCategoryStyleObj}>카테고리 분석</List.Header>
            <List.List>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    카테고리 대시보드
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    매출 및 마진
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    매출 및 마진 증가분
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    프로모션 목록
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content style={midCategoryStyleObj}>
                  <Icon name="folder" />
                  실적 동인
                  <List.List>
                    <List.Item>
                      <List.Icon />
                      <List.Content style={midCategoryStyleObj}>
                        <List.List>
                          <List.Item>
                            <List.Content style={midCategoryStyleObj}>
                              메뉴명1
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content style={midCategoryStyleObj}>
                              메뉴명1
                            </List.Content>
                          </List.Item>

                          <List.Item>
                            <List.Content style={midCategoryStyleObj}>
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
                  <Icon name="folder" />
                  default
                </List.Content>
              </List.Item>

              {/* <List.Item>
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
                            </List.Item> */}
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
};

export default SideMenu;
