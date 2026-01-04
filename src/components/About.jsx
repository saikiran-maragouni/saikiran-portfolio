import React from 'react';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-300 border border-slate-200 dark:border-slate-800">
                            <img
                                src="/images/saikiran.jpg"
                                alt="Saikiran Maragouni"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">About Me</h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                I’m a software engineer with hands-on experience building clean, scalable web applications using Java, Spring Boot, React, and modern web technologies. I enjoy working across the stack — from crafting intuitive user interfaces to designing reliable backend services.
                            </p>
                            <p>
                                I focus on writing maintainable code, solving real problems, and continuously improving performance and usability. I’m currently looking to grow in a product-focused team where I can learn deeply, contribute meaningfully, and build software that creates real impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
