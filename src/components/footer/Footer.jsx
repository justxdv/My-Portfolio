import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Digvijay Sethi</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/iamdigvijaysethi/" className="home__social-icon" target="_blank">
            <i class='bx bxl-instagram'></i>
        </a>

        <a href="https://www.linkedin.com/in/iamdigvijaysethi/" className="home__social-icon" target="_blank">
        <i class='bx bxl-linkedin'></i>
        </a>

        <a href="https://www.github.com/justxdv/" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
        </a>
            </div>

            <span className="footer__copy">&#169; Digvijay Sethi | Phoenix | 2023</span>
        </div>
    </footer>
  )
}

export default Footer