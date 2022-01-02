import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Wrapper} from "@googlemaps/react-wrapper";
import "./App.css";
import Navbar from "./comps/Navbar";
import SwapCards from "./comps/SwapCards";
import Events from "./comps/Events";
import Popup from "./comps/Popup";
import Matches from "./comps/Matches";
import { GlobalProvider } from "./context/GlobalState";
import NearMe from "./comps/NearMe";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);
  const [popup, setPopup] = useState(false);

  const addMatch = (hero) => {
    setMatches([...matches, hero]);
    setPopup(true);
    localStorage.setItem("matches", JSON.stringify([...matches, hero]))
  };

  const closePopup = () => {
    setPopup(false);
  };

  let componentMounted = true;

  useEffect(() => {
    const tempMatch = localStorage.getItem("matches");
    if (tempMatch) {
      console.log(tempMatch);
      setMatches(JSON.parse(tempMatch))
    }
    let proxy = "https://api.codetabs.com/v1/proxy/?quest=";
    const getHeroes = async () => {
      setLoading(true);
      const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      //if(componentMounted) {
      const h = await response.json();
      console.log(h);
      setHeroes(h);
      setLoading(false);

      // }

      //return () => {
      componentMounted = false;
      //}
    };

    getHeroes();
  }, []);

  const Loading = () => {
    return <div className="loading">Loading...</div>;
  };
  if (loading) {
    Loading();
  }

  const removeMatch = (id) => {
    const temp = matches.filter((hero) => {
      return id !== hero.id;
    });
    setMatches(temp);
    localStorage.setItem("matches", JSON.stringify(temp))
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar matches={matches.length} />

        <Switch>           
          <Route path="/local-fights" exact>
            <NearMe heros={heroes} />
          </Route>
          <Route path="/" exact component={App}>
            <SwapCards heros={heroes} addMatch={addMatch} />
            <Popup trigger={popup} closePopup={closePopup} />
          </Route>
          <Route path="/my-fights" exact>
            <Matches removeMatch={removeMatch} matches={matches} />
          </Route>
          <GlobalProvider>
            <Route path="/events" exact>
              <Events />
            </Route>
          </GlobalProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
