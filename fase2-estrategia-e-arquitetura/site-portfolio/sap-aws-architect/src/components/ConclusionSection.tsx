import { motion } from "framer-motion";
import { Rocket, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  "Aprovação do orçamento provisionado",
  "Deploy do ambiente de Desenvolvimento (DEV) para validação técnica",
  "Migração progressiva HML → PROD com janelas de mudança planejadas",
  "Ativação de monitoramento com CloudWatch e Cost Explorer",
];

const ConclusionSection = () => {
  return (
    <section id="conclusao" className="section-fade py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Rocket className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Próximos <span className="gradient-text">Passos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            A migração entrega um ambiente elástico que acompanha o crescimento da empresa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 text-left mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-5 flex items-start gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{step}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glow-line w-32 mx-auto mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            Acesse os links no cabeçalho para conectar-se via LinkedIn ou ver o código no GitHub.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSection;
