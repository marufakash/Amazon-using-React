import React from 'react'
import logo from '../images/amazon_PNG11.webp';
import style from './header.module.css';
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className={style.navbar}>
        <div className={style.img}>
            <img src={logo} alt="nav-logo" />
        </div>
        <div className={style.type1}>
          <div>
            <IoLocationOutline />
          </div>
          <div>
            <h5><span>Deliver to</span> Bangladesh</h5>
          </div>
        </div>
        <div className={style.search}>
          <input type="text" name="search" id="search" />
        </div>
        <div className={style.type2}></div>
        <div className={style.type1}></div>
        <div className={style.type2}></div>
        <div className={style.type2}></div>
    </nav>
  )
}

export default Header;