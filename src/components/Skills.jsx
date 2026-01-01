import React from 'react';
import { Monitor, Server, Wrench, Database } from 'lucide-react';

const SkillCard = ({ title, icon, skills }) => (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 card-hover">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Monitor size={24} />,
            skills: ["React.js", "JavaScript", "HTML5", "CSS3"]
        },
        {
            title: "Backend Development",
            icon: <Server size={24} />,
            skills: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs"]
        },
        {
            title: "Databases",
            icon: <Database size={24} />,
            skills: ["MySQL", "MongoDB"]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Technical Skills</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A showcase of the technologies and tools I practice and use.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {skillCategories.map((category) => (
                        <SkillCard key={category.title} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
