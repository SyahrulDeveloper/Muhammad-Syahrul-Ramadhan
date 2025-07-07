"use client";

import Image from "next/image";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import { certifications } from "@/contents/certification";
import { motion } from "framer-motion";
import { fadeIn, fadeInDown, fadeInUp, staggerContainer } from "@/utils/animation";
const AboutPage = () => {
    return (
        <div className="container max-w-7xl mx-auto py-20 px-4">
            <motion.h1 {...fadeInDown} className="text-4xl font-bold mb-10 text-center">
                About Me
            </motion.h1>

            {/* About Section */}
            <motion.section {...fadeInUp} className="flex flex-col xl:flex-row items-center justify-center gap-10">
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                    <Image src="/syahrul_hd.jpeg" alt="Profile image" fill sizes="(max-width: 768px) 320px, 384px" className="rounded-full object-cover ring-4 ring-primary" priority />
                </div>

                <p className="text-lg text-dark dark:text-white max-w-2xl text-justify">
                    <span className="font-semibold">Front-End Developer</span> pemula dengan dasar yang kuat dalam HTML, CSS, JavaScript, React, dan Tailwind CSS. Terampil dalam membangun antarmuka yang responsif dan berfokus pada
                    pengalaman pengguna. Saat ini merupakan <span className="font-medium">mahasiswa S1 Sistem Informasi di Universitas Pembangunan Nasional Veteran Jakarta</span>, dan sedang mencari peluang untuk berkontribusi dalam tim
                    startup atau perusahaan sambil terus mengembangkan kemampuan profesional.
                </p>
            </motion.section>

            {/* Skills Section */}
            <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="py-20 mb-5">
                <motion.h2 {...fadeInUp} className="section-title">
                    Skills
                </motion.h2>
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <FaCode className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                        <ul className="text-secondary space-y-2">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>React.js / Next.js</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Backend</h3>
                        <ul className="text-secondary space-y-2">
                            <li>MySQL</li>
                            <li>PHP</li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Tools</h3>
                        <ul className="text-secondary space-y-2">
                            <li>Git / Github</li>
                            <li>Visual Studio Code</li>
                            <li>Figma</li>
                            <li>Canva</li>
                            <li>Microsoft Word</li>
                            <li>Microsoft Excel</li>
                            <li>Microsoft PowerPoint</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Certification Section */}
            <section className="py-20 container max-w-7xl px-4">
                <motion.h2 {...fadeInDown} className="section-title">
                    Certifications
                </motion.h2>
                <motion.div variants={staggerContainer} initial="initial" animate="animate" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certifications.map((cert) => (
                        <motion.article key={cert.id} variants={fadeInUp} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
                            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                                <Image src={cert.image} alt={cert.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary rounded-full text-sm">{cert.issuer}</span>
                            </div>

                            <div className="flex gap-4 mt-2">
                                <Link href={cert.link} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                                    <span>View</span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPage;
