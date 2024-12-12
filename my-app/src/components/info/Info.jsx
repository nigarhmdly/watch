import React from 'react'
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";
import styles from './Info.module.scss'



const Info = () => {
  return (
    <section className={styles.info}>
        <div className={styles.grid}>



<div className={styles.imp}>
    <h1>Top Courses That are open for Students</h1>
    <p>Who are in extremely love with eco friendly system.</p>
</div>


<div className={styles.main}>


<div>
    <nav>
        <i><HiOutlineRocketLaunch /></i>
        <h4>High Performance</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.</p>
    </nav>

    <nav>
        <i><IoSettingsOutline /></i>
        <h4>High Performance</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.</p>
    </nav>
</div>




<img src="https://preview.colorlib.com/theme/watch/img/c1.png" alt="" />


<div>
    <nav>
        <i><BsBuildings /></i>
        <h4>High Performance</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.</p>
    </nav>

    <nav>
        <i><MdOutlinePhone /></i>
        <h4>High Performance</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.</p>
    </nav>
</div>



</div>





        </div>
    </section>
  )
}

export default Info