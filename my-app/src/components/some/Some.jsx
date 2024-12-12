import React from 'react'
import styles from './Some.module.scss'
import { FaRegUser } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoDiamondOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";



const Some = () => {
  return (
    <section className={styles.some}>
        <div className={styles.main}>
            <nav className={styles.imp}>
                <h1>Some Features that Made us Unique</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </nav>








<section>
    <div>
        <h4><i><FaRegUser /></i>Expert Technicians</h4>
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>

    
    <div>
        <h4><i><GiDiploma /></i>Professional Service</h4>
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>


    <div>
        <h4><i><FaPhoneAlt /></i>Great Support</h4>
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>




    <div>
        <h4><i><HiOutlineRocketLaunch /></i>Technical Skills</h4>
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>



    <div>
        <h4><i><IoDiamondOutline /></i>Highly Recomended</h4>
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>



    <div>
        <h4><i><LuMessageCircle /></i>Positive Reviews</h4>
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>
</section>



















        </div>
    </section>
  )
}

export default Some