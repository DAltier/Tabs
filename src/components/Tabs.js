import React, { useState } from "react";
import TabButtonStyle from "./TabButtonStyle";
import TabContent from "./TabContent";


const Tabs = () => {
  const [state, setState] = useState ({
    selectedTab: 1
  });

  const tabOnClick = (event, value) => {
    setState({
      selectedTab: value
    });
  };

  return (
    <div>
      <h1>Tabs</h1>
      {[1, 2, 3].map((val, index) => (
        <TabButtonStyle
          key = { index }
          onClick = {e => tabOnClick(e, val)}
          selected = {state.selectedTab === val}
        >
          Tab {val}
        </TabButtonStyle>
      ))}

      <TabContent>Tab { state.selectedTab } is currently showing.</TabContent>
    </div>
  );
};

export default Tabs;