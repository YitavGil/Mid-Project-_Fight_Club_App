import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./comps/Navbar";
import SwapCards from "./comps/SwapCards";
import Events from "./comps/Events";
import Popup from "./comps/Popup";
import Matches from "./comps/Matches";
import { GlobalProvider } from "./context/GlobalState";
import NearMe from "./comps/NearMe";
import LoginForm from "./comps/LoginForm";
import ProfilePage from "./comps/ProfilePage";
import Premium from "./comps/Premium";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "12345"
  }

  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);
  const [popup, setPopup] = useState(false);
  const [user,setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email
      });
      localStorage.setItem('user-signin', JSON.stringify({
        name: details.name,
        email: details.email
       }))
    }
    else {
      setError("Details do not match!")
    }
  }

  const Logout = () => {
    setUser({name:"", email:""});
    localStorage.removeItem('user-signin')
  }




  const addMatch = (hero) => {
    setMatches([...matches, hero]);
    setPopup(true);
    localStorage.setItem("matches", JSON.stringify([...matches, hero]))
  };

  const closePopup = () => {
    setPopup(false);
  };


  useEffect(() => {
    const strUser = localStorage.getItem('user-signin');
    if(strUser){
      setUser(JSON.parse(strUser));
    }
    const tempMatch = localStorage.getItem("matches");
    if (tempMatch) {
      console.log(tempMatch);
      setMatches(JSON.parse(tempMatch))
    }
  
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
        <Navbar matches={matches.length} Logout={Logout} />
        {user.name.length===0 && <LoginForm Login={Login} error={error}/> }

        {user.name.length >0 && <Switch>           
          <Route path="/local-fights" exact>
            <NearMe heros={heroes} />
          </Route>
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
          <Route path="/premium" exact>
            <Premium />
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
        </Switch> }
      </BrowserRouter>
    </div>
  );
}

export default App;
