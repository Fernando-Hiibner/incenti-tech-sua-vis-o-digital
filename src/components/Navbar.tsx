import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight">
          <img src={logo} alt="Incenti Tech" className="h-8 w-8" />
          <span>
            <span className="text-primary">Incenti</span>
            <span className="text-foreground"> Tech</span>
          </span>
        </a>

        <button
          onClick={() => handleClick("#contato")}
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Fale conosco
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
