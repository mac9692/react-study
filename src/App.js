import './App.css';

import React, {Component} from 'react';
import TodaysPlan from "./plan/TodaysPlan";
import StatePlan from "./plan/StatePlan";
import LifecyclePlan from "./plan/LifecyclePlan";

class App extends Component {
  render() {
      const addressObject = {
          zipNo: "1661",
          dtlAddress: "213-902-1",
      }
      return (
          <div className="App">
              {/*<h1 className="title">컴포넌트</h1>*/}
              {/*<TodaysPlan*/}
              {/*    name="박진성"*/}
              {/*    age={30}*/}
              {/*    gender*/}
              {/*    addressObject={addressObject}*/}
              {/*>*/}
              {/*    <div>----------------------------------------</div>*/}
              {/*</TodaysPlan>*/}
              {/*<StatePlan/>*/}
              <LifecyclePlan/>
          </div>
      );
  }
}

export default App;
