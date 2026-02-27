import { motion } from "framer-motion";
import { Cloud, TrendingDown, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
            <Cloud className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">
              Business Case — Cloud Architecture & FinOps
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Migração <span className="gradient-text">SAP</span> para{" "}
          <span className="gradient-text">AWS</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Estratégia executiva de migração de workload SAP On-Premises para a AWS,
          com foco em redução de TCO e alta disponibilidade.
        </motion.p>




        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {[
            { icon: TrendingDown, label: "TCO Otimizado", desc: "CAPEX → OPEX com Savings Plans 3 anos" },
            { icon: Shield, label: "Alta Disponibilidade", desc: "Multi-AZ com failover automático" },
            { icon: Cloud, label: "Enterprise Support", desc: "SLA 15 min para incidentes críticos" },
          ].map((item, i) => (
            <div key={i} className="glass-card-hover p-5 text-left">
              <item.icon className="w-5 h-5 text-primary mb-3" />
              <p className="font-semibold text-sm text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
            Arquiteto de Soluções
          </p>
          <p className="text-sm font-semibold text-foreground">Aldecir Santana De Andrade</p>
          <p className="text-xs text-muted-foreground mt-1">
            Instrução: The Cloud Bootcamp
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
