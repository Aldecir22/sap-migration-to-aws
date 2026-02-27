import { motion } from "framer-motion";
import { DollarSign, TrendingDown, Clock, BarChart3 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const kpis = [
  { icon: DollarSign, label: "Custo Mensal Total", value: "$ 39.826", sub: "USD / mês" },
  { icon: BarChart3, label: "Custo Anual Total", value: "$ 477.912", sub: "USD / ano" },
  { icon: Clock, label: "Enterprise Support", value: "$ 15.000", sub: "SLA 15 min" },
  { icon: TrendingDown, label: "Savings Plan", value: "3 anos", sub: "Compute reservado" },
];

const envData = [
  { name: "PROD", mensal: 22481.52, cor: "hsl(27, 96%, 54%)" },
  { name: "HML", mensal: 9718.97, cor: "hsl(210, 80%, 55%)" },
  { name: "DEV", mensal: 7625.13, cor: "hsl(152, 60%, 45%)" },
];

const pieData = envData.map(d => ({ name: d.name, value: d.mensal }));
const pieColors = envData.map(d => d.cor);

const barData = [
  { name: "PROD", Mensal: 22481.52, Anual: 269778.24 },
  { name: "HML", Mensal: 9718.97, Anual: 116627.64 },
  { name: "DEV", Mensal: 7625.13, Anual: 91501.56 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card p-3 text-xs">
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }}>
          {p.name}: ${p.value.toLocaleString("en-US")}
        </p>
      ))}
    </div>
  );
};

const FinOpsDashboard = () => {
  return (
    <section id="finops" className="section-fade py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dashboard <span className="gradient-text">FinOps</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Análise financeira extraída da AWS Pricing Calculator com Compute Savings Plans de 3 anos.
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <kpi.icon className="w-5 h-5 text-primary mb-3" />
              <p className="text-2xl md:text-3xl font-bold font-mono gradient-text">{kpi.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{kpi.sub}</p>
              <p className="text-xs font-medium text-foreground mt-2">{kpi.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Pie chart */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-sm mb-4">Distribuição por Ambiente</h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={pieColors[i]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-2">
              {envData.map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.cor }} />
                  <span className="text-muted-foreground">{d.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bar chart */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-sm mb-4">Custo Mensal vs. Anual (USD)</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 20%, 18%)" />
                <XAxis dataKey="name" tick={{ fill: "hsl(215, 18%, 55%)", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(215, 18%, 55%)", fontSize: 11 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Mensal" fill="hsl(27, 96%, 54%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Anual" fill="hsl(210, 80%, 55%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-muted-foreground">Mensal</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-chart-blue" />
                <span className="text-muted-foreground">Anual</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cost breakdown table */}
        <motion.div
          className="glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-sm mb-4">Detalhamento por Ambiente</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Ambiente</th>
                  <th className="text-right py-2 px-3 text-muted-foreground font-medium">Mensal (USD)</th>
                  <th className="text-right py-2 px-3 text-muted-foreground font-medium">Anual (USD)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { env: "PROD", mensal: "$22.481,52", anual: "$269.778,24", badge: "bg-primary/15 text-primary" },
                  { env: "HML", mensal: "$9.718,97", anual: "$116.627,64", badge: "bg-chart-blue/15 text-chart-blue" },
                  { env: "DEV", mensal: "$7.625,13", anual: "$91.501,56", badge: "bg-success/15 text-success" },
                  { env: "Enterprise Support", mensal: "$15.000,00", anual: "$180.000,00", badge: "bg-chart-amber/15 text-chart-amber" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-3 px-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${row.badge}`}>
                        {row.env}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono text-xs">{row.mensal}</td>
                    <td className="py-3 px-3 text-right font-mono text-xs">{row.anual}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-primary/30">
                  <td className="py-3 px-3 font-bold text-sm">TOTAL</td>
                  <td className="py-3 px-3 text-right font-mono font-bold text-sm gradient-text">$54.825,62</td>
                  <td className="py-3 px-3 text-right font-mono font-bold text-sm gradient-text">$657.907,44</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinOpsDashboard;
