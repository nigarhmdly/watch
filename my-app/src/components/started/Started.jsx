import React from 'react'
import styles from './Started.module.scss'

const Started = () => {
  return (
    <section className={styles.started}>
        <div className={styles.main}>

<nav>
    <h6>BRAND NEW APP TO BLOW YOUR MIND</h6>
    <h1>We’ve made a life <br />
    that will change you</h1>
    <span>We are here to listen from you deliver exellence</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
    <a href="/"><button>GET STARTED NOW</button></a>
</nav>


<div className={styles.img}>
    <div>
        <img src="https://preview.colorlib.com/theme/watch/img/play-icon.png" alt="" />
    </div>
</div>

        </div>
    </section>
  )
}

export default Started