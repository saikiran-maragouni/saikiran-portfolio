import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="container-custom text-center">
                <p className="mb-4">
                    © {new Date().getFullYear()} Saikiran Maragouni. All rights reserved.
                </p>
                <p className="text-sm">
                    Designed & Built with <span className="text-indigo-600 dark:text-indigo-400 font-semibold">React</span> & <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Tailwind CSS</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
