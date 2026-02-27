import { motion } from "framer-motion";
import { Server, Database, HardDrive, Network } from "lucide-react";
import arquiteturaImg from "@/assets/arquitetura.png";

const tiers = [
  {
    title: "App Tier — Compute (EC2)",
    icon: Server,
    rows: [
      { env: "PROD", spec: "5× t3a.2xlarge (8 vCPU / 32 GB)", storage: "2 TB EBS · 1 TB EFS" },
      { env: "HML", spec: "3× t3a.xlarge (4 vCPU / 16 GB)", storage: "1 TB EBS · 500 GB EFS" },
      { env: "DEV", spec: "2× t3a.xlarge (4 vCPU / 16 GB)", storage: "500 GB EBS · 250 GB EFS" },
    ],
  },
  {
    title: "DB Tier — Oracle RDS",
    icon: Database,
    rows: [
      { env: "PROD", spec: "2× db.m4.10xlarge (38 vCPU / 156 GB) Multi-AZ", storage: "3 TB" },
      { env: "HML", spec: "2× db.m4.4xlarge (16 vCPU / 64 GB)", storage: "3 TB" },
      { env: "DEV", spec: "2× db.m4.4xlarge (8 vCPU / 30 GB)", storage: "1 TB" },
    ],
  },
];

const pillars = [
  { icon: Server, label: "EC2 t3a (AMD EPYC)", desc: "Melhor custo-benefício para SAP" },
  { icon: Database, label: "RDS Oracle Multi-AZ", desc: "Failover automático em PROD" },
  { icon: HardDrive, label: "EFS 1750 GB", desc: "Compartilhamento /sapmnt" },
  { icon: Network, label: "ALB por ambiente", desc: "Distribuição resiliente de tráfego" },
];

const ArchitectureSection = () => {
  return (
    <section id="arquitetura" className="section-fade py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Arquitetura da <span className="gradient-text">Solução</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Infraestrutura segregada em PROD, HML e DEV seguindo o AWS Well-Architected Framework.
          </p>
        </motion.div>

        {/* Architecture image */}
        <motion.div
          className="glass-card p-2 mb-12 overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={arquiteturaImg}
            alt="Diagrama de Arquitetura SAP na AWS com App Tier e DB Tier distribuídos em Produção, Homologação e Desenvolvimento"
            className="w-full rounded-lg"
          />
        </motion.div>

        {/* Pillar cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="font-semibold text-xs text-foreground">{p.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Spec tables */}
        {tiers.map((tier, ti) => (
          <motion.div
            key={ti}
            className="glass-card p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ti * 0.15 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <tier.icon className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">{tier.title}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 text-muted-foreground font-medium">Ambiente</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-medium">Especificação</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-medium">Storage</th>
                  </tr>
                </thead>
                <tbody>
                  {tier.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-border/50 last:border-0">
                      <td className="py-3 px-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                          row.env === "PROD" ? "bg-primary/15 text-primary" :
                          row.env === "HML" ? "bg-chart-blue/15 text-chart-blue" :
                          "bg-success/15 text-success"
                        }`}>
                          {row.env}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-mono text-xs">{row.spec}</td>
                      <td className="py-3 px-3 text-muted-foreground">{row.storage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ArchitectureSection;
