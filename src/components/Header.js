import React, { useEffect } from 'react';
import '../App.css';

const Header = () => {
    useEffect(() => {
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        const handleScroll = () => {
            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        const linkToAddActive = document.querySelector(`header nav a[href*=${id}]`);
                        if (linkToAddActive) linkToAddActive.classList.add('active');
                    });
                }
            });
        };

        const handleMenuClick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        const handleNavLinkClick = () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };

        window.addEventListener('scroll', handleScroll);
        menuIcon.addEventListener('click', handleMenuClick);
        navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            menuIcon.removeEventListener('click', handleMenuClick);
            navLinks.forEach(link => link.removeEventListener('click', handleNavLinkClick));
        };
    }, []);

    return (
        <header className="header">
            <a href="/" className="logo">Nitya</a>
            <i className="fas fa-bars" id="menu-icon"></i>
            <nav className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#project">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
