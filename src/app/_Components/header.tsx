
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import SideMenu from "./side-menu";
import "../static/styles.css"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
   
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        handleResize(); 
        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="bg-gradient-to-br from-black to-gray-800 w-full fixed top-0 left-0 z-50 shadow-md" id="header">
            <div className="flex justify-between items-center px-4">
                <div className={`${isMobile ? 'ml-4' : 'ml-20'}`}> 
                    <Image src="/Logo.png" alt="Logo" width={160} height={60} />
                </div>

                
                {isMobile ? (
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={"secondary"} size={"icon"} className="bg-transparent text-white">
                                <MenuIcon/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="bg-gradient-to-bl from-[#03597ef8] to-[#012b3df8]">
                            <SideMenu/>
                        </SheetContent>
                    </Sheet>
                ) : (
                    
                    <nav className="mr-20">
                        <ul className="flex">
                            <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-blue-500">Sobre Nós</a></li>
                            <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-blue-500">O que fazemos</a></li>
                            <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-blue-500">Trabalhe Conosco</a></li>
                            <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-blue-500">Práticas</a></li>
                            <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-blue-500">Percepções</a></li>
                            <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-blue-500">Contato</a></li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
}

export default Header;