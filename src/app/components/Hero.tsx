"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animation";

const Hero = () => {
    return (
        <section className="py-28 container max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div {...scaleIn} transition={{ delay: 0.2 }} className="flex flex-col items-center">
                    <Image src="/syahrul.jpeg" alt="profile image" width={130} height={130} className="rounded-full mb-4 h-32 object-cover ring-2 ring-primary" />
                </motion.div>
                <motion.h1 {...fadeInUp} transition={{ delay: 0.4 }} className="text-4xl md:text-5xl font-bold mb-6">
                    Hi, I&apos;m <span className="text-primary">Muhammad Syahrul Ramadhan </span>
                </motion.h1>

                <motion.p {...fadeInUp} transition={{ delay: 0.5 }} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                    Front End Developer | Web Developer | Full Stack Developer
                </motion.p>

                <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="flex justify-center space-x-4 mb-8">
                    <Link href="https://github.com/SyahrulDeveloper" target="_blank" className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 duration-300">
                        <FaGithub />
                    </Link>

                    <Link href="https://www.linkedin.com/in/muhammad-syahrul-ramadhan-987b8b28b/" target="_blank" className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 duration-300">
                        <FaLinkedin />
                    </Link>

                    <Link href="https://www.instagram.com/syahrulramadhan.24/" target="_blank" className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 duration-300">
                        <FaInstagram />
                    </Link>
                </motion.div>

                <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="flex flex-col md:flex-row justify-center gap-4">
                    <Link
                        href="https://drive.google.com/file/d/1Leg4Y8VjV5V54qu4SBQq7r-lAL5ZDHNc/view?usp=sharing"
                        target="_blank"
                        className="rounded-lg bg-primary px-8 py-3 inline-block w-full md:w-auto text-white hover:bg-primary/80 transition-colors"
                    >
                        Download CV
                    </Link>
                    <Link href="/contact" className="rounded-lg bg-gray-500 px-8 py-3 inline-block w-full md:w-auto text-white hover:text-gray-800 hover:bg-gray-300 transition-colors">
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
