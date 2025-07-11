"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animation";

const Projects = () => {
    return (
        <section className="py-20 container max-w-7xl px-4">
            <motion.h2 {...fadeInUp} transition={{ delay: 0.2 }} className="text-2xl font-bold mb-12 text-center">
                Featured Projects
            </motion.h2>
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.article key={project.title} variants={fadeInUp} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
                        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                            <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-primary rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-2">
                            <Link href={project.githubLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                                <FaGithub className="w-5 h-5" /> <span>Code</span>
                            </Link>

                            <Link href={project.demoLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                                <FaExternalLinkAlt className="w-5 h-5" /> <span>Live Demo</span>
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
