import React from 'react';
import { Calendar } from 'lucide-react';

const ExperienceCard = ({ role, company, period, description }) => (
    <div className="relative pl-8 md:pl-0 py-8 group">
        {/* Timeline Line (Desktop: Center, Mobile: Left) */}
        <div className="hidden md:block absolute left-[30%] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 group-last:bottom-auto group-last:h-10"></div>
        <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
            {/* Dot Indicator */}
            <div className="absolute left-0 md:left-[30%] -translate-x-[5px] md:-translate-x-[5px] top-10 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500 border border-white dark:border-slate-950 shadow-sm z-10"></div>

            {/* Date Column */}
            <div className="md:w-[30%] md:text-right pt-8 md:pt-8 pl-6 md:pl-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300">
                    <Calendar size={12} /> {period}
                </span>
            </div>

            {/* Content Column */}
            <div className="flex-1 pt-2 md:pt-6">
                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-900 transition-colors card-hover">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{role}</h3>
                    <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4">{company}</h4>
                    <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Software Engineer",
            company: "Capgemini",
            period: "Sep 2024 – Present",
            description: [
                "Developed and deployed full-stack applications following Agile best practices.",
                "Collaborated with cross-functional teams to design and maintain scalable backend systems."
            ]
        },
        {
            role: "DSA Mentor",
            company: "Smart Interviews",
            period: "Sep 2023 – Feb 2024",
            description: [
                "Mentored students in Data Structures and Algorithms to improve problem-solving skills."
            ]
        },
        {
            role: "Web Developer Intern",
            company: "Login2Xplore",
            period: "Aug 2023",
            description: [
                "Built responsive web applications using HTML, CSS, JavaScript, and React.",
                "Automated repetitive tasks using scripts to improve productivity."
            ]
        }
    ];

    return (
        <section id="experience" className="section-padding bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Experience</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        My professional journey and career highlights.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
