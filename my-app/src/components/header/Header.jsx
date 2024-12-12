import React from 'react'
import styles from './Header.module.scss'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";



const Header = () => {
  return (
    <section className={styles.main}>
      <section className={styles.header}>
      <div>
        <img src="https://preview.colorlib.com/theme/watch/img/logo.png" alt="" />

        <nav className= {styles.navigation}>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">SERVICES</a></li>
            <li><a href="/">UNIQUE FEATURE</a></li>
            <li><a href="/">REVIEW</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">PAGES <i><MdOutlineKeyboardArrowDown /></i></a></li>
          </ul>
        </nav>

       
             <i className={styles.ham}><RxHamburgerMenu /></i>
          

      </div>
    </section>

<nav className={styles.buy}>
  <h5>NOW YOU CAN FEEL THE HEAT</h5>
  <h1>SMART NEW FUTURE</h1>
  <a href="/"><button>BUY NOW</button></a>
</nav>


    </section>
  )
}

export default Header