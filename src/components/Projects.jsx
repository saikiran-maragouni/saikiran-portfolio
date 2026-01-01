import React from 'react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image, githubLink, liveLink }) => (
    <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group h-full flex flex-col">
        <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-900">
                    <FolderGit2 size={48} />
                </div>
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="View Code">
                    <Github size={20} />
                </a>
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="Live Demo">
                    <ExternalLink size={20} />
                </a>
            </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-4 flex-1">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full border border-indigo-100 dark:border-indigo-800">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projectList = [
        {
            title: "Shortlist - Recruitment Platform",
            description: "MERN-based recruitment platform with an AI-powered ATS engine for instant candidate-job matching.",
            tags: ["MERN Stack", "AI/ML", "React", "Node.js"],
            image: "/images/shortlist.png",
            githubLink: "https://github.com/saikiran-maragouni/ShortList",
            liveLink: "https://short-list-three.vercel.app/"
        },
        {
            title: "Adaptive Learning Platform",
            description: "AI-driven platform personalizing education via GenAI based on student performance and learning styles.",
            tags: ["GenAI", "Personalization", "Education Tech"],
            image: "/images/ALB.png",
            githubLink: "https://github.com/saikiran-maragouni/AdaptingLearningPlatform-v1",
            liveLink: "https://github.com/saikiran-maragouni/AdaptingLearningPlatform-v1"
        },
        {
            title: "Custom Logo Builder",
            description: "Full-stack app for generating custom logos with AI-based branding suggestions.",
            tags: ["Full Stack", "AI Branding", "Web App"],
            image: "/images/CLB.png",
            githubLink: "https://github.com/saikiran-maragouni/custom-logo-builder",
            liveLink: "https://custom-logo-builder.onrender.com/"
        }
    ];

    return (
        <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Some of the key projects I've built.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
