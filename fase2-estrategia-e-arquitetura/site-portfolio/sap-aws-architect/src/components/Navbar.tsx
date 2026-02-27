import { motion } from "framer-motion";
import { Cloud, Linkedin, Github } from "lucide-react";

const links = [
  { label: "Arquitetura", href: "#arquitetura" },
  { label: "FinOps", href: "#finops" },
  { label: "Evidências", href: "#evidencias" },
  { label: "Próximos Passos", href: "#conclusao" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{ background: "hsla(222, 47%, 6%, 0.85)", backdropFilter: "blur(12px)" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cloud className="w-5 h-5 text-primary" />
          <span className="font-bold text-sm">SAP → AWS</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/aldecir-santana-66b960187/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#0A66C2" }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://github.com/Aldecir22/sap-migration-to-aws"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#333" }}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
