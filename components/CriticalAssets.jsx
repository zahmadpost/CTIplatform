import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function CriticalAssets() {
  let { path, url } = useRouteMatch();
  return (
    <div style={{ display: "flex" }}>
      <CriticalAssetsNav />
      <Switch>
        <Route path={`${path}/storage`}>
          <Storage />
        </Route>
        <Route path={`${path}/SWIFT`}>
          <SWIFT />
        </Route>
        <Route path={`${path}/cardholderdata`}>
          <CardholderData />
        </Route>
        <Route path={`${path}/thirdparty`}>
          <ThirdParty />
        </Route>
        <Route path={`${path}/securities`}>
          <Securities />
        </Route>
      </Switch>
    </div>
  );
}

function CriticalAssetsNav() {
  let { path, url } = useRouteMatch();
  return (
    <div className="thirdnav">
      <div style={{ display: "grid" }}>
        <NavLink className="navlink" to={`${url}/storage`}>
          Physical and Virtual Storage
        </NavLink>
        <NavLink className="navlink" to={`${url}/SWIFT`}>
          SWIFT Payment Infrastructure
        </NavLink>
        <NavLink className="navlink" to={`${url}/cardholderdata`}>
          Cardholder Data Environments (CDEs)
        </NavLink>
        <NavLink className="navlink" to={`${url}/thirdparty`}>
          3rd Party Digital Payment Integration
        </NavLink>
        <NavLink className="navlink" to={`${url}/securities`}>
          Securities
        </NavLink>
      </div>
    </div>
  );
}

function Storage() {
  return (
    <div className="leaf">
      <img
        src="../../images/storage.png"
        className="leafImage"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      />
    </div>
  );
}

function SWIFT() {
  return (
    <div className="leaf">
      <img
        src="../../images/swift.png"
        className="leafImage"
        style={{ float: "left" }}
      />
    </div>
  );
}

function CardholderData() {
  return (
    <div className="leaf">
      <img
        src="../../images/cardholderdata.png"
        className="leafImage"
        style={{ float: "left" }}
      />
    </div>
  );
}

function ThirdParty() {
  return (
    <div className="leaf">
      <img
        src="../../images/thirdparties.png"
        className="leafImage"
        style={{ float: "left" }}
      />
    </div>
  );
}

function Securities() {
  return (
    <div className="leaf">
      <img
        src="../../images/securities.png"
        className="leafImage"
        style={{ float: "left" }}
      />
    </div>
  );
}
