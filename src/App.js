// Importing
import "./App.css"; 
import HomePage from "./home/HomePage"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage";
import Header from "./components/header/Header"; 
import Footer from "./components/footer/Footer"; 

function App() {
  
  return (
    <>
      <Router> {/* Router component to enable routing */}
        <Header /> {/* Render the Header component */}
        <Switch> {/* Switch component to render the first matching Route */}
          <Route exact path='/' component={HomePage} /> 
          <Route path='/singlepage/:id' component={SinglePage} exact /> 
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

