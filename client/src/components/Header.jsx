import { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import './Header.css';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${scrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <h1 className='heading'>Pizzeria Lola</h1>
      <button className="menu-toggle" onClick={toggleNav}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </button>
      <ul className={`${isOpen ? 'open' : ''}`}>
        <li onClick={() => handleNavClick('food')}>Hrana</li>
        <li onClick={() => handleNavClick('drinks')}>Piće</li>
        <li onClick={() => handleNavClick('contact')}>Kontakt</li>
      </ul>
    </header>
  );
};

