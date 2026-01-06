"use client"; import { useState, useEffect } from "react"; import Link from "next/link"; import Image from "next/image"; import { useTheme } from "next-themes"; import { Menu, X, Sun, Moon } from "lucide-react"; import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); const { theme, setTheme } = useTheme(); const [mounted, setMounted] = useState(false); useEffect(() => setMounted(true), []);
  const navLinks = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Services", href: "/services" }, /* { name: "Projects", href: "/projects" }, */ { name: "Contact", href: "/contact" }];
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-darkbg/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-600 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-slate-800 dark:text-white flex items-center gap-2">
          <Image
            src="/Machvanta_symbol.svg"
            alt="Machvanta logo"
            width={40}
            height={40}
            className="w-10 h-10 dark:invert dark:brightness-0"
            priority
          />
          <div className="flex flex-col">
            <span className="text-2xl leading-tight">MACHVANTA</span>
            <span className="text-xs leading-tight font-semibold">मॅकवंता</span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-8">{navLinks.map(link => <Link key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-cyan-500">{link.name}</Link>)}</div>
        <div className="hidden md:flex items-center gap-4">{mounted && <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-gray-600 dark:text-gray-300 hover:text-cyan-500">{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}</button>}<Link href="/quote" className="bg-cyan-500 text-white px-5 py-2 rounded-full">Get Quote</Link></div>
        <div className="flex md:hidden items-center gap-2">{mounted && <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-gray-600 dark:text-gray-300">{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}</button>}<button onClick={() => setIsOpen(!isOpen)} className="p-2">{isOpen ? <X /> : <Menu />}</button></div>
      </div>
      <AnimatePresence>{isOpen && <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden bg-white dark:bg-darkbg overflow-hidden"><div className="px-4 py-4 space-y-2">{navLinks.map(link => <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-200">{link.name}</Link>)}</div></motion.div>}</AnimatePresence>
    </nav>
  );
}; export default Navbar;