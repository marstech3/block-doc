import React, { Component } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import Sidebar from './common/sideBar'
// import Footer from './common/footer'
// import NavigationBar from './common/navigationBar';
import { Home } from './component/home';
import { About } from './component/about';
import { NoMatch } from './component/noMatch';
import { Friend } from './component/friend';
import { MyFile } from './component/myFile';
import { SharedFile } from './component/sharedFile';
import UploadFile from './component/uploadFile';
import { Setting } from './component/setting';
import {COLORS} from './common/colorConstant'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1>Ethereum and IPFS using Infura</h1>
        </header> */}
        <React.Fragment>
          <Router>
            
            {/* <Footer />  */}
            
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/friend" component={Friend} />
              <Route path="/myFile" component={MyFile} />
              <Route path="/sharedFile" component={SharedFile} />
              <Route path="/uploadFile" component={UploadFile} />
              <Route path="/setting" component={Setting} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}
export default App;
