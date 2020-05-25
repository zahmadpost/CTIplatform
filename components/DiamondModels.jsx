import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function DiamondModels() {
  let { path, url } = useRouteMatch();
  return (
    <div style={{ display: "flex" }}>
      <DiamondModelsNav />
      <Switch>
        <Route path={`${path}/trojan`}>
          <Trojan />
        </Route>
        <Route path={`${path}/sql`}>
          <SQL />
        </Route>
        <Route path={`${path}/ddos`}>
          <DDOS />
        </Route>
        <Route path={`${path}/islandhopping`}>
          <IslandHopping />
        </Route>
        <Route path={`${path}/wateringhole`}>
          <WateringHole />
        </Route>
        <Route path={`${path}/ransomware`}>
          <Ransomware />
        </Route>
        <Route path={`${path}/atmskimmers`}>
          <ATMSkimmers />
        </Route>
        <Route path={`${path}/ghostrat`}>
          <Gh0stRAT />
        </Route>
        <Route path={`${path}/witchcoven`}>
          <Witchcoven />
        </Route>
        <Route path={`${path}/aptbackdoor`}>
          <APTBackdoor />
        </Route>
        <Route path={`${path}/lokibot`}>
          <Lokibot />
        </Route>
        <Route path={`${path}/socialengineering`}>
          <SocialEngineering />
        </Route>
        <Route path={`${path}/darkvishnya`}>
          <DarkVishnya />
        </Route>
        <Route path={`${path}/insider`}>
          <InsiderThreat />
        </Route>
        <Route path={`${path}/powerghost`}>
          <PowerGhost />
        </Route>
      </Switch>
    </div>
  );
}

function DiamondModelsNav() {
  let { path, url } = useRouteMatch();
  return (
    <div className="thirdnav" style={{ lineHeight: "5px" }}>
      <div style={{ display: "grid" }}>
        <NavLink className="navlink" to={`${url}/trojan`}>
          Trojan Malware
        </NavLink>
        <NavLink className="navlink" to={`${url}/sql`}>
          SQL Injection
        </NavLink>
        <NavLink className="navlink" to={`${url}/ddos`}>
          DDoS
        </NavLink>
        <NavLink className="navlink" to={`${url}/islandhopping`}>
          Island Hopping
        </NavLink>
        <NavLink className="navlink" to={`${url}/wateringhole`}>
          Watering Hole
        </NavLink>
        <NavLink className="navlink" to={`${url}/ransomware`}>
          Ransomware
        </NavLink>
        <NavLink className="navlink" to={`${url}/atmskimmers`}>
          ATM Skimmers
        </NavLink>
        <NavLink className="navlink" to={`${url}/ghostrat`}>
          Gh0stRAT
        </NavLink>
        <NavLink className="navlink" to={`${url}/witchcoven`}>
          Witchcoven
        </NavLink>
        <NavLink className="navlink" to={`${url}/aptbackdoor`}>
          APT Backdoor
        </NavLink>
        <NavLink className="navlink" to={`${url}/lokibot`}>
          Lokibot Malware
        </NavLink>
        <NavLink className="navlink" to={`${url}/socialengineering`}>
          Social Engineering
        </NavLink>
        <NavLink className="navlink" to={`${url}/darkvishnya`}>
          DarkVishnya Attack
        </NavLink>
        <NavLink className="navlink" to={`${url}/insider`}>
          Insider Threat
        </NavLink>
        <NavLink className="navlink" to={`${url}/powerghost`}>
          PowerGhost
        </NavLink>
      </div>
    </div>
  );
}

function Trojan() {
  return (
    <div className="leaf">
      <h2>Stealing Banking Information through Trojan Malware</h2>
      <img
        src="/images/trojan.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function SQL() {
  return (
    <div className="leaf">
      <h2>Stealing Customer PII through a SQL Injection</h2>
      <img
        src="/images/sqlinjection.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function DDOS() {
  return (
    <div className="leaf">
      <h2>Extortion Through Distributed Denial of Service Attack by Bringing Down Payment Infrastructure</h2>
      <img
        src="/images/ddos.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function IslandHopping() {
  return (
    <div className="leaf">
      <h2>Credit Card Theft through Island Hopping</h2>
      <img
        src="/images/islandhopping.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function WateringHole() {
  return (
    <div className="leaf">
      <h2>Data Breach Event via a Watering Hole Attack</h2>
      <img
        src="/images/wateringhole.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function Ransomware() {
  return (
    <div className="leaf">
      <h2>Block Transaction System via Ransomware</h2>
      <img
        src="/images/ransomware.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function ATMSkimmers() {
  return (
    <div className="leaf">
      <h2>ATM Skimming Attack</h2>
      <img
        src="/images/atmskimmers.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function Gh0stRAT() {
  return (
    <div className="leaf">
      <h2>SWIFT Payment Infrastructure Controlled via Gh0stRAT</h2>
      <img
        src="/images/ghostrat.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function Witchcoven() {
  return (
    <div className="leaf">
      <h2>Payment Infrastructure Revealed via Witchcoven</h2>
      <img
        src="/images/witchcoven.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function APTBackdoor() {
  return (
    <div className="leaf">
      <h2>Backdoors Created for APTs to Access CDE</h2>
      <img
        src="/images/aptbackdoor.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function Lokibot() {
  return (
    <div className="leaf">
      <h2>LokiBot for Mobile Application Hijacking</h2>
      <img
        src="/images/lokibot.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function SocialEngineering() {
  return (
    <div className="leaf">
      <h2>Customer Based Phishing Attack (Social Engineering)</h2>
      <img
        src="/images/socialengineering.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function DarkVishnya() {
  return (
    <div className="leaf">
      <h2>DarkVishnya Attacks</h2>
      <img
        src="/images/darkvishnya.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function InsiderThreat() {
  return (
    <div className="leaf">
      <h2>Insider Data Breach for Finanical Gain</h2>
      <img
        src="/images/insiders.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}

function PowerGhost() {
  return (
    <div className="leaf">
      <h2>PowerGhost Malware Attack</h2>
      <img
        src="/images/powerghost.png"
        className="leafImage"
        style={{ height: "75%" }}
      />
    </div>
  );
}
