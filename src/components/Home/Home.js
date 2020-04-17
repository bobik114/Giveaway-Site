import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
import Header from './Header/Header';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleSteps from './SimpleSteps/SimpleSteps';
import AboutUs from './AboutUs/AboutUs'
import WhoWeHelp from './WhoWeHelp/WhoWeHelp';

const Home = () => {
    return <>
        <Header />
        <ThreeColumns />
        <SimpleSteps />
        <AboutUs />
        <WhoWeHelp />
    </>   
};

export default Home;