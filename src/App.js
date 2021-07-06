import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  indicator: {
    backgroundColor: 'black',
  },
}));

function App() {
  const routes = ['/', '/work', '/about'];
  const classes = useStyles();

  return (
    <Router>
      <Route
        path="/"
        render={({ location }) => (
          <Fragment>
            <AppBar position="static" className={classes.root} elevation={0}>
              <Tabs value={location.pathname} classes={{indicator: classes.indicator}} centered>
                <Tab label={<span style={{ color: 'black' }}>HOME</span>} value={routes[0]} component={Link} to={routes[0]} />
                <Tab label={<span style={{ color: 'black' }}>WORK</span>}  value={routes[1]} component={Link} to={routes[1]} />
                <Tab label={<span style={{ color: 'black' }}>ABOUT ME</span>}  value={routes[2]} component={Link} to={routes[2]}/>
              </Tabs>
            </AppBar>
            {/* <Toolbar /> */}

            <Switch>
              <Route exact path={routes[0]}>
                <HomePage />
              </Route>
              <Route exact path={routes[1]}>
                <WorkPage />
              </Route>
              <Route exact path={routes[2]}>
                <AboutPage />
              </Route>
            </Switch>

          </Fragment>
        )}
      />
    </Router>
  );
}

export default App;
