import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';
import React from 'react';
import styles from  './About.module.css'


const Nav = ({onSearch}) => {
    return (
        <div>
            <ul>
                 <SearchBar onSearch={onSearch} />
                 <li>
                    <Link to="/home" className={styles.DivHome}>HOME</Link>
                
                    <Link to="/About" className={styles.DivAbout}>ABOUT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;