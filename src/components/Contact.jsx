import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        const body = `Name: ${name}\n\nMessage: ${message}`;

        window.location.href = `mailto:msaikirangoud2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="section-padding bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Get In Touch</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Let's Connect</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            I'm open to freelance opportunities and new challenges.
                            Whether you have a question or just want to discuss tech, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:msaikirangoud2002@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 group">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <span className="font-medium">msaikirangoud2002@gmail.com</span>
                            </a>

                            <div className="flex gap-4 mt-8">
                                <a href="https://github.com/saikiran-maragouni" className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all transform hover:-translate-y-1">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/saikiran-maragouni/" className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all transform hover:-translate-y-1">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Project Inquiry"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                placeholder="Tell me about your project..."
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
                        >
                            Send Message
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
