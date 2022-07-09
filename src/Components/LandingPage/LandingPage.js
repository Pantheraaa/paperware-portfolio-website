import React from 'react'
import './LandingPage.css'
import {CgArrowRightO} from 'react-icons/cg'

const LandingPage = () => {
  return (
    <section className='home'>
      <article>
        <div className="article-content">
          <p>A great solution to <br/><strong>brand building</strong> and even better <br/>for making <strong>earth </strong>
            a place to live in.</p>
          <p>We bring an exclusive collection<br/> of eco-friendly & <strong>food safe</strong> disposable
          <strong> packaging.</strong></p>
        </div>
        <div className='article-button'>
          <button className="download-btn">
            <p>
              <a href="#contact-us">Get in touch &nbsp;</a>
            </p>
            <CgArrowRightO className='icon'/></button>
        </div>
      </article>
      <aside>
        <div className="main-pic" style={{ backgroundImage: 'url(' + require('../../Assets/newBowl.png') + ')' }}>
        </div>
      </aside>

    </section>
  )
}

{/* <div className="slogan">
  <div className="slogan-card">
    <img src={require('../../Assets/sloganFinal.jpg')} alt="slogan" />
  </div>

</div> */}

export default LandingPage;