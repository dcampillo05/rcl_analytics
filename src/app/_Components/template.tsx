"use client"

import React from "react";
import { motion } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
    React.useEffect(() => {
        console.log("Template mudou!")
    })

    return (
        <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.75 }}>
            {children}
        </motion.div>
    )
}