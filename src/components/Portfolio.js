import React, { useEffect } from 'react';
import Isotope from 'isotope-layout';
import './Portfolio.css';
import img1 from '../assets/landing-1.png';
import img2 from '../assets/landing-2.png';
import img3 from '../assets/landing-3.png';

export default function Portfolio() {
  useEffect(() => {
    const iso = new Isotope('.grid', {
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      percentPosition: true,
      transitionDuration: '0.6s',
      masonry: {
        gutter: 20,
      },
    });

    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        iso.arrange({ filter });
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    return () => iso.destroy();
  }, []);

  return (
    <section className="portfolio">
      <div className="filters">
        <button className="filter-button active" data-filter="*">All</button>
        <button className="filter-button" data-filter=".branding">Branding</button>
        <button className="filter-button" data-filter=".web">Web</button>
        <button className="filter-button" data-filter=".photography">Photography</button>
      </div>
      <div className="grid">
        <div className="grid-item branding"><img src={img1} alt="Branding" /></div>
        <div className="grid-item web"><img src={img2} alt="Web" /></div>
        <div className="grid-item photography"><img src={img3} alt="Photography" /></div>
        <div className="grid-item web"><img src={img2} alt="Web" /></div>
        <div className="grid-item branding"><img src={img1} alt="Branding" /></div>
      </div>
    </section>
  );
}
