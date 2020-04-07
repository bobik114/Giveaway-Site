import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
import styles from './Header.module.scss';
import UserNav from './UserNav/UserNav';
import MainNav from './MainNav/MainNav';
import homeHeroImage from '../../../assets/Home-Hero-Image.jpg';

const Header = () => {
    return <div className={styles.container}>
        <img className={styles.homeHeroImage} src={homeHeroImage}/>
        <div className={styles.sideContainer}>
            <UserNav />
            <MainNav />
            
        </div>
    </div>   
};

export default Header;