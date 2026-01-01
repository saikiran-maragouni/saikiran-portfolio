import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">

            {/* Background Blobs - Made chunkier and more subtle */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/10 rounded-full blur-[100px] animate-blob -z-10"></div>
            <div className="absolute top-1/2 -right-20 w-80 h-80 bg-violet-200/40 dark:bg-violet-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000 -z-10"></div>

            <div className="container-custom relative z-10 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">

                    {/* Left: Text Content - Slightly more compact spacing */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">

                        {/* Animated Badge */}
                        <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 animate-fade-in">
                            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 tracking-wide uppercase">
                                Full Stack Developer
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tight animate-fade-in [animation-delay:200ms]">
                            Saikiran <span className="gradient-text">Maragouni</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in [animation-delay:400ms]">
                            I build clean, scalable web applications and enjoy working across the stack — from intuitive UIs to reliable backend systems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in [animation-delay:600ms] pt-2">
                            <a
                                href="#projects"
                                className="group w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1OcrTiSuowaR5808vWoPOYngfwglVcXpL/view?usp=sharing"
                                target="_blank"
                                className="group w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold rounded-full border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                            >
                                Download Resume
                                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Hero Image - Controlled sizing and better alignment */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fade-in [animation-delay:300ms]">
                        <div className="relative max-w-sm lg:max-w-md w-full">
                            {/* Decorative backdrop ring */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-full blur-2xl transform scale-90"></div>

                            <img
                                src="/images/hero3.png"
                                alt="Saikiran Coding"
                                className="relative z-10 w-full h-auto object-contain drop-shadow-xl hover:scale-102 transition-transform duration-500"
                                style={{ maxHeight: '450px' }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
