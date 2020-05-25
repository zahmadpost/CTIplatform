import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Overview from "./components/Overview.jsx";
import Trends from "./components/Trends.jsx";
import IntelBuyIn from "./components/IntelBuyIn.jsx";
import DiamondModels from "./components/DiamondModels.jsx";
import CriticalAssets from "./components/CriticalAssets.jsx";
import Amy from "./components/Amy.jsx";
import Izhar from "./components/Izhar.jsx";
import Zara from "./components/Zara.jsx";

const root = document.getElementById("root");
const bannerTitle = "Financial Industry CTI Platform";

function Nav() {
  return (
    <div className="firstnav">
      <div style={{ display: "grid" }}>
        <NavLink className="navlink" to="/home">
          Home
        </NavLink>
        {/* <br /> */}
        <NavLink className="navlink" to="/background">
          Industry Background
        </NavLink>
        {/* <br /> */}
        <NavLink className="navlink" to="/modeling">
          Threat Modeling
        </NavLink>
        {/* <br /> */}
        <NavLink className="navlink" to="/about">
          About Us
        </NavLink>
      </div>
    </div>
  );
}

function Banner() {
  return <div className="banner">{bannerTitle}</div>;
}

function App() {
  return (
    <Router basename="/CTIplatform">
      <Banner />
      <div className="content">
        <Nav />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/background">
            <IndustryBackground />
          </Route>
          <Route path="/modeling">
            <Modeling />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="leaf">
      <h2>Financial Industry Cyber Threat Intelligence Platform</h2>
      <p>
        Disclaimer: All content on this site is for educational purposes only
      </p>
      <p>This site contains detailed information regarding existing and emerging cyber threats to the financial industry.</p>
      <p>To get started, browse the navigation on the left-hand side of the page.</p>
    </div>
  );
}
function IndustryNav() {
  let { path, url } = useRouteMatch();
  return (
    <div className="secondnav">
      <div style={{ display: "grid" }}>
        <NavLink className="navlink" to={`${url}/overview`}>
          Industry Overview
        </NavLink>
        <NavLink className="navlink" to={`${url}/trends`}>
          Threat Trends
        </NavLink>
      </div>
    </div>
  );
}
function IndustryBackground() {
  let { path, url } = useRouteMatch();
  return (
    <div style={{ display: "flex" }}>
      <IndustryNav />
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/overview`}>
          <Overview />
        </Route>
        <Route path={`${path}/trends`}>
          <Trends />
        </Route>
      </Switch>
    </div>
  );
}
function ModelingNav() {
  let { path, url } = useRouteMatch();
  return (
    <div className="secondNav">
      <div style={{ display: "grid" }}>
        <NavLink className="navlink" to={`${url}/criticalAssets`}>
          Critical Assets
        </NavLink>
        <NavLink className="navlink" to={`${url}/diamondModels`}>
          Diamond Models
        </NavLink>
        <NavLink className="navlink" to={`${url}/intelBuyIn`}>
          Intelligence Buy In
        </NavLink>
      </div>
    </div>
  );
}
function Modeling() {
  let { path, url } = useRouteMatch();
  return (
    <div style={{ display: "flex" }}>
      <ModelingNav />
      <Switch>
        <Route path={`${path}/criticalAssets`}>
          <CriticalAssets />
        </Route>
        <Route path={`${path}/diamondModels`}>
          <DiamondModels />
        </Route>
        <Route path={`${path}/intelBuyIn`}>
          <IntelBuyIn />
        </Route>
      </Switch>
    </div>
  );
}
function AboutNav() {
  let { path, url } = useRouteMatch();
  return (
    <div className="secondnav">
      <div style={{ display: "grid" }}>
        <NavLink className="navlink" to={`${url}/amy`}>
          Amy
        </NavLink>
        <NavLink className="navlink" to={`${url}/izhar`}>
          Izhar
        </NavLink>
        <NavLink className="navlink" to={`${url}/zara`}>
          Zara
        </NavLink>
      </div>
    </div>
  );
}
function About() {
  let { path, url } = useRouteMatch();
  return (
    <div style={{ display: "flex" }}>
      <AboutNav />
      <Switch>
        <Route path={`${path}/amy`}>
          <Amy />
        </Route>
        <Route path={`${path}/izhar`}>
          <Izhar />
        </Route>
        <Route path={`${path}/zara`}>
          <Zara />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(<App />, root);
