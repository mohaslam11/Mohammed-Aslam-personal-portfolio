import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold uppercase text-white tracking-widest mb-2">Aslam<span className="text-cinema-orange">.</span></h3>
                    <p className="text-gray-600 text-xs font-mono">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/mohaslam11" target="_blank" className="text-gray-600 hover:text-white transition-colors"><FaGithub size={20} /></a>
                    <a href="https://linkedin.com/in/mohaslam" target="_blank" className="text-gray-600 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                    {/* Placeholder for Twitter/X */}
                    <a href="#" className="text-gray-600 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
