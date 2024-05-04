"use client"

import Header from "@/app/_Components/header";
import { motion } from "framer-motion"
import Image from "next/image";
import PortItems from "../components/portfolioItems";

const Portfolio = () => {
    return (
        <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.75 }}>
            <Header />
            <img src="/portfolioImage.jpg" alt="foto" className="w-full h-[350px]" />

            <PortItems />
        </motion.div>
    );

};

export default Portfolio;
