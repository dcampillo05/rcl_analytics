"use client"

import Header from "@/app/_Components/header";
import { motion } from "framer-motion"
import Image from "next/image";
<<<<<<< HEAD
import PortItems from "../components/portfolioItems";
import FooterCl from "@/app/_Components/footer";
=======
import PortItems from "../portfolioItems";
>>>>>>> c155e824d0c2f69f84a04659be6718dbe7966316

const Portfolio = () => {
    return (
        <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.75 }}>
            <Header />
            <img src="/portfolioImage.jpg" alt="foto" className="w-full h-[350px]" />
                
            <PortItems />

            <FooterCl />
        </motion.div>
    );

};

export default Portfolio;
