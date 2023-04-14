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
  cursor: "pointer",
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
            챠트 컴포넌트 예시
            <List.List>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    HeatMap
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    Bubble Chart
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    Bar Chart
                  </List.Header>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj} onClick={() => alert('Mixed Bar Chart')}>
                    Mixed Bar Chart
                  </List.Header>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
      </List>

      <List>
        <List.Item>
          <List.Icon name="folder" />
          <List.Content style={bigCategoryStyleObj}>
            grid 컴포넌트 예시
            <List.List>
              <List.Item>
                <List.Content>
                  <List.Header style={midCategoryStyleObj}>
                    ag-grid table
                  </List.Header>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
      </List>

      <Divider />
    </>
  );
};

export default SideMenu;
