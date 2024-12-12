import React from 'react'
import styles from './Details.module.scss'

const Details = () => {
  return (
    <section className={styles.details}>
        <img src="https://preview.colorlib.com/theme/watch/img/about-img.jpg" alt="" />

        <div>
           <nav>
           <h1>Globally Connected <br />
            by Large Network</h1>
            <span>We are here to listen from you deliver exellence</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            <a href="/"><button>GET DETAILS</button></a>
           </nav>
        </div>
    </section>
  )
}

export default Details