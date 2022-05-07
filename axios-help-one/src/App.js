import React from 'react';
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents")
      .then((res) => res.data.data)
      .then((data) => {
        setAgents(data);
        setLoading(false);
      })
      .catch((e) => {
        setErrMsg(e);
        setError(true);
      });
  }, [1]);

  const renderAgents = () => {
    if (agents.length === 0) {
      return (<p>No agents...</p>)
    } else {
      let out = [];
      agents.map((e, i) => {
        let temp = <p key={i}>{e.displayName}</p>;
        out.push(temp);
        return
      });
      return out;
    }
  };

  const loadingMsg = () => {
    if (loading) {
      return (<h2>Loading...</h2>)
    } else {
      return (<h2>Not loading anymore.</h2>)
    }
  }

  return (
    <>
      <h1>something</h1>
      {loadingMsg()}
      <br />
      {renderAgents()}
    </>
  )
}

export default App;
