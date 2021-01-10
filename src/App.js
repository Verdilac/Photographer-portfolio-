import React from "react";

//importing Styles
import GlobalStyle from "./components/GlobalStyle";

//importing pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetails";

//importing ReactRouter
import { Switch, Route,useLocation } from "react-router-dom";
//Animation configuration
import { AnimatePresence } from "framer-motion";

function App() {

const location = useLocation();


  return (
    <div className="App">
      <GlobalStyle />
      
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* this switch statement stops when it detects the path 
        that why we use exact prop to make sure it only renders exatly 
        what we want */}
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
