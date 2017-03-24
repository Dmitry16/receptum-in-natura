// Libs
import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, etc.} from 'react-router';
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom';
// css
require ('./production/css/newstyle.css');
// components
import App from "./App";
import HeaderLarge from "./components/header";
import Manifesto from "./components/manifesto";
import Footer from "./components/footer";
import Slider from "./components/slider_component";
import CTA from "./components/cta";
import Modal from "./components/modal";
import SliderTop from "./components/slider-top";
import MainNav from "./components/nav";
import AllPics from "./components/allpics";



render ((

<Router>
  <div>

    <App />

    <Route path="/" component={HeaderLarge}/>
    <Route path="/" component={MainNav}/>
    <Route exact={true} path="/" component={SliderTop}/>
    <Route exact={true} path="/" component={Manifesto}/>
    <Route exact={true} path="/" component={CTA}/>
    <Route exact={true} path="/" component={Slider}/>
    <Route path="/fotos" component={AllPics}/>
    <Route path="/" component={Footer}/>


  </div>
</Router>
), document.getElementById("zz"));
