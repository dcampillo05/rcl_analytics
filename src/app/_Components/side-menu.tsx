import Link from "next/link";
import { useRouter } from "next/router";

const SideMenu = () => {





    return (
        <nav className="text-left ">
            <ul className="pt-10 text-right">
                <li><a href="/#sobre" className="text-white text-xl font-light py-5 px-5 block transition duration-200 ">Sobre nós</a></li>
                <li><a href="/#atuacao" className="text-white text-xl font-light py-5 px-5 block transition duration-200 ">O que fazemos</a></li>
                <li><a href="/portfolio" className="text-white text-xl font-light py-5 px-5 block transition duration-200 ">Portfolio</a></li>
                <li><a href="/#meth" className="text-white text-xl font-light py-5 px-5 block transition duration-200 ">Contato</a></li>
                <li><a href="/#forms" className="text-white text-xl font-light py-5 px-5 block transition duration-200 ">Orçamento</a></li>
            </ul>
        </nav>
    );
}

export default SideMenu;