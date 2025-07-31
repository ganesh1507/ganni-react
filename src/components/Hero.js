import React from 'react';
import './Hero.css';
import homeBg from '../assets/home.png';
import brand from '../assets/brand.png';



export default function Hero() {
  return (
    <section className="hero">
      <div className="video-background">
        <img
          src={homeBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="hero-content">
          <h1 data-aos="fade-down">skillbrücke.com</h1>
          <p data-aos="fade-up" data-aos-delay="300">
            We are building the best solution for internationals in Germany.
            With our diverse team of experts, we have built a holistic platform that supports you in every step of your journey to Germany, from learning about the country and finding a study program, to getting your visa and living here.
            Our team is driven by the experience of having lived abroad and relocating to Germany. We want to simplify your journey and make your move stress-free. We provide all your needed products and services in one solution.
            We do that hard part for you, so you can forget about German bureaucracy, paperwork, and language barriers.
          </p>
          <div className="buttons" data-aos="fade-up" data-aos-delay="500">
            <button className="buy">CONTACT NOW!</button>
            <button className="explore">GET A QUOTATION</button>
          </div>
          <div className="scroll-circle">
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-96,0 a96,96 0 1,1 192,0 a96,96 0 1,1 -192,0"
                />
              </defs>
              <text dy="10" textLength="600">
                <textPath href="#circlePath" startOffset="0">
                  — YOU’RE NOT LOST - YOU’RE JUST NOT IN GERMANY YET 
                </textPath>
              </text>
            </svg>
            <span className="arrow">↓</span>
          </div>
        </div>
        <div>
        <img src={brand} alt="Branding" style={{ height: '400px', paddingTop: '30px' }} />
        </div>
      </div>
    </section>
  );
}
