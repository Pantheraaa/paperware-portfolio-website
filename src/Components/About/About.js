import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-us" id="about">
      <h1>About us
        <hr />
      </h1>
      <div className="about-us-content">
        <div className="about">
          <p>
            Since its establishment, PAPERWARE has been committed to designing, developing, producing and selling
            high-quality disposable food packaging, products. We always uphold the business philosophy of "high quality,
            professional, environmental protection", adhere to the principle of quality first, and continue to innovate
            around customer's requirement. <br /> <br />
            In the future, PAPERWARE will continue to be committed to the development, productioin and sales of more
            environmentally friendly disposable food packaging. <br /><br />
            All our stylish and unique items are manufactured from high-grade raw materials and confirm to the highest
            international standards. The company stands on the pillars of integrity and hard work. And just because of
            the dedicatioin of our team members, we have garnered a huge clientele across the country. Besides, taking
            care of our quality-conscious clients, we produce paper cups on imported, automatic paper cup forming
            machines in very hygienic &amp; dust-free conditions.
          </p>
        </div>
        <div className="about-pic">
          <div className='company-pic' style={{ backgroundImage: 'url(' + require('../../Assets/CompanyPic.png') + ')' }}></div>
        </div>
      </div>
    </div>
  )
}

export default About;