import React from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/home';
import Council from './pages/council';
import Highlights from './pages/highlights';
import Speakout from './pages/speakout';
import Work from './pages/work';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import { createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import themeConfig from './assets/theme/themeConfig.js'

const theme = createMuiTheme(themeConfig);

function App() {
    const [pageState, setPageState] = React.useState({
        council: 0,
        work: 0
    });
  return (
      <Router>
          <ThemeProvider theme={theme}>
              <Navbar
                  pageState={pageState}
                  setPageState={setPageState}
              />
              <Switch>
                  <Route path="/work">
                      <Work
                        pageState={pageState}
                      />
                  </Route>
                  <Route path="/council">
                    <Council
                        pageState={pageState}
                    />
                  </Route>
                  <Route path="/highlights">
                      <Highlights />
                  </Route>
                  <Route path="/speakout">
                      <Speakout />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
              <Footer />
          </ThemeProvider>
      </Router>
  );
}

export default App;
