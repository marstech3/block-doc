import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./common/sideBar";
// import Footer from './common/footer'
// import NavigationBar from './common/navigationBar';
import { Home } from "./component/home";
import { About } from "./component/about";
import { NoMatch } from "./component/noMatch";
import { Friend } from "./component/friend";
import { MyFile } from "./component/myFile";
import { SharedFile } from "./component/sharedFile";
import UploadFile from "./component/uploadFile";
import { Setting } from "./component/setting";

class App extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {
      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // console.log("app.js: ", this.state.drizzleState, this.props.drizzle);
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
              <Route
                path="/uploadFile"
                component={() => (
                  <UploadFile
                    drizzle={this.props.drizzle}
                    drizzleState={this.state.drizzleState}
                  />
                )}
              />
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
