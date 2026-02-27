import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

import img02 from "@/assets/evidencias/02-calculadora-aws.png";
import img03 from "@/assets/evidencias/03-estimativa-calculadora-aws.png";
import img04 from "@/assets/evidencias/04-config-regiao-e-add-ec2.png";
import img05 from "@/assets/evidencias/05-ec2-producao.png";
import img06 from "@/assets/evidencias/06-ebs-400g-ec2.png";
import img07 from "@/assets/evidencias/07-load-balance-prod-hml-dev.png";
import img08 from "@/assets/evidencias/08-cinco-ec2-hml-dev.png";
import img09 from "@/assets/evidencias/09-dois-banco-dados-prod.png";
import img10 from "@/assets/evidencias/10-dois-banco-dados-hml.png";
import img11 from "@/assets/evidencias/11-suporte-24h.png";
import img12 from "@/assets/evidencias/12-custo-total.png";
import img13 from "@/assets/evidencias/13-efs-prod-hml-dev.png";
import img14 from "@/assets/evidencias/14-suporte-enterprise.png";
import img15 from "@/assets/evidencias/15-custo-total.png";
import img16 from "@/assets/evidencias/16-custo-detalhado.png";

const evidences = [
  { src: img02, title: "AWS Pricing Calculator" },
  { src: img03, title: "Estimativa na Calculadora AWS" },
  { src: img04, title: "Configuração de Região e EC2" },
  { src: img05, title: "EC2 — Ambiente de Produção" },
  { src: img06, title: "EBS 400 GB — Storage EC2" },
  { src: img07, title: "Load Balancer — PRD / HML / DEV" },
  { src: img08, title: "5 Instâncias EC2 — HML e DEV" },
  { src: img09, title: "Banco de Dados RDS — Produção" },
  { src: img10, title: "Banco de Dados RDS — Homologação" },
  { src: img11, title: "Suporte 24 h" },
  { src: img12, title: "Custo Total (Resumo)" },
  { src: img13, title: "EFS — PRD / HML / DEV" },
  { src: img14, title: "Suporte Enterprise" },
  { src: img15, title: "Custo Total (Consolidado)" },
  { src: img16, title: "Custo Detalhado" },
];

const EvidenceGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + evidences.length) % evidences.length);
  };

  return (
    <section id="evidencias" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Evidências <span className="gradient-text">Técnicas</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Prints reais da AWS Pricing Calculator e configurações do ambiente — proof of work completo.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {evidences.map((ev, i) => (
            <motion.button
              key={i}
              className="glass-card-hover group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              onClick={() => setSelected(i)}
            >
              <img
                src={ev.src}
                alt={ev.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 p-2">
                <ZoomIn className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-semibold text-foreground text-center leading-tight">
                  {ev.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              aria-label="Próxima"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              key={selected}
              className="max-w-5xl w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={evidences[selected].src}
                alt={evidences[selected].title}
                className="w-full rounded-lg shadow-2xl"
              />
              <p className="text-center text-sm font-semibold text-foreground mt-4">
                {selected + 1}/{evidences.length} — {evidences[selected].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EvidenceGallery;
