import React, { useEffect, useState } from 'react';
import Navbar from './comps/Navbar';
import SwapCards from './comps/SwapCards';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Matches from './comps/Matches';


function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);

  const addMatch = (hero) => {
    setMatches([...matches, hero])
  }

  let componentMounted = true

  useEffect(() =>{
    let proxy = 'https://api.codetabs.com/v1/proxy/?quest='
    const getHeroes = async () =>{
        setLoading(true);
        const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
        //if(componentMounted) {
            const h = await response.json();
            console.log(h);
            setHeroes(h);
            setLoading(false);
            
       // }
  
        //return () => {
            componentMounted = false
        //}
    }
    
    getHeroes()
  }, []);
  
  const removeMatch = (id) => {
    const temp = matches.filter((hero) =>{
      return id !== hero.id
      
    })
    setMatches(temp)
  }
 
    return (
    <div className="App">
     

        <BrowserRouter>
        <Navbar matches={matches.length}/>
        <Switch>
            <Route path="/" exact component={App}>
              <SwapCards heros={heroes} addMatch={addMatch} />
            </Route>
            <Route path="/my-fights" exact >
              <Matches removeMatch={removeMatch} matches={matches} />
            </Route>
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;


