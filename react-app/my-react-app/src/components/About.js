import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
         border: '2px solid white'
        
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">Our Services - FAQs</h1>

      <div className="accordion" id="accordionExample">
        {/* 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              What is Web Development and how can it help my business?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Web development involves creating and maintaining websites that are fast, secure, and responsive. A well-developed website helps you reach more customers, build credibility, and increase sales.
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              Why should I choose WordPress for my website?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              WordPress is the most popular CMS in the world. It's user-friendly, SEO-friendly, highly customizable, and has thousands of plugins to extend functionality for blogs, eCommerce, and business websites.
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              How does SEO improve my website’s visibility?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              SEO (Search Engine Optimization) improves your website’s ranking in search engines, helping more people find you organically without paid ads.
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={myStyle}>
              Do you provide eCommerce website development?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Yes! We create secure, user-friendly eCommerce stores with payment integration, inventory management, and modern UI for maximum sales.
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={myStyle}>
              Can you redesign my existing website?
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Absolutely! We can revamp your outdated site into a modern, responsive, and SEO-friendly design without losing your existing content.
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={myStyle}>
              Do you offer website maintenance services?
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Yes, we provide ongoing maintenance including updates, backups, security checks, and performance optimization.
            </div>
          </div>
        </div>

        {/* 7 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style={myStyle}>
              How long does it take to develop a website?
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              It depends on the complexity of the site. A simple website may take 1–2 weeks, while larger projects can take 4–6 weeks or more.
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight" style={myStyle}>
              Do you provide SEO along with website development?
            </button>
          </h2>
          <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Yes, we implement on-page SEO strategies during development to make your website search engine friendly from the start.
            </div>
          </div>
        </div>

        {/* 9 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine" style={myStyle}>
              Can you integrate third-party tools into my site?
            </button>
          </h2>
          <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Yes! We can integrate CRMs, chatbots, analytics tools, and other third-party services into your site.
            </div>
          </div>
        </div>

        {/* 10 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen" style={myStyle}>
              Do you provide training for managing my website?
            </button>
          </h2>
          <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Yes, we offer training sessions so you can easily update content, manage products, and handle basic site maintenance yourself.
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}
