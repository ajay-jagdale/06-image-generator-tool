import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const socialLinks = [
    { href: 'https://www.linkedin.com/in/ajay-jagdale', icon: 'bi bi-linkedin', label: 'LinkedIn' },
    { href: 'https://github.com/ajay-jagdale', icon: 'bi bi-github', label: 'GitHub' },
    { href: 'https://x.com/ajayjagdale2912', icon: 'bi bi-twitter-x', label: 'Twitter' },
    { href: 'https://www.instagram.com/ajayjagdale2912', icon: 'bi bi-instagram', label: 'Instagram' },
    { href: 'https://www.threads.com/ajayjagdale2912', icon: 'bi bi-threads', label: 'Threads' },
    { href: 'https://www.pinterest.com/ajay_jagdale', icon: 'bi bi-pinterest', label: 'Pinterest' },
    { href: 'https://ajayjagdale.medium.com/', icon: 'bi bi-medium', label: 'Medium' },
];

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-5 mt-auto w-full">
            <div className="mx-4 md:mx-8 lg:mx-12">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs sm:text-sm mb-4 sm:mb-0">
                        Next.js | Developed by Ajay Jagdale
                    </p>

                    <div className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#2563eb] text-base sm:text-lg md:text-xl lg:text-2xl transition-colors duration-300"
                                aria-label={link.label}
                                style={{ fontSize: '1.25rem' }}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
