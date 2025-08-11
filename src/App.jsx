import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationUI from './components/RegistrationUI';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";

import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = React.useState({});

  React.useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Navigation />
              <Header data={landingPageData.Header} onRegisterClick={(e) => {
                e.preventDefault();
                window.location.href = '/register';
              }} />
              <About data={landingPageData.About} />
              <Features data={landingPageData.Features} />
              <Services data={landingPageData.Services} />
              <Testimonials data={landingPageData.Testimonials} />
              <Team data={landingPageData.Team} />
              <Footer data={landingPageData.Contact} />
            </div>
          )}
        />
        <Route path="/register" render={() => <RegistrationUI />} />
      </Switch>
    </Router>
  );
};

export default App;
