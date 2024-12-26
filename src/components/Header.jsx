import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="py-5 px-8 w-full">
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                <div className="flex items-center gap-4">
                    <img
                        src="./assets/logo.png"
                        alt="Logo"
                        className="h-10"
                    />
                    <span className="text-lg font-logo font-black text-slate-800 tracking-wide">
                        Lorem Ipsum
                    </span>
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {/* Hamburger */}
                    <div className="w-6 h-0.5 bg-secondary mb-1"></div>
                    <div className="w-6 h-0.5 bg-secondary mb-1"></div>
                    <div className="w-6 h-0.5 bg-secondary"></div>
                </button>

                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-12">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Products', path: '/products' },
                            { name: 'Contact', path: '/contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-md font-inter tracking-wide transition-colors duration-200 ${isActive
                                            ? 'text-secondary font-semibold'
                                            : 'text-black hover:text-secondary'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="md:hidden bg-secondary overflow-hidden mt-4"
            >
                <ul className="flex flex-col items-start px-8 py-4 space-y-4">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'About', path: '/about' },
                        { name: 'Products', path: '/products' },
                        { name: 'Contact', path: '/contact' }
                    ].map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                onClick={() => setIsOpen(false)} // Close on link click
                                className={({ isActive }) =>
                                    `block text-[15px] font-normal tracking-wide transition-colors duration-200 ${isActive
                                        ? 'text-button'
                                        : 'text-white hover:text-button'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </header>
    );
};

export default Header;
