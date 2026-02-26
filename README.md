# ☁️ Portfólio Executivo: Migração SAP On-Premises para AWS com foco em FinOps

**Arquiteto de Soluções:** Aldecir Santana De Andrade  
**Foco:** Cloud Architecture, FinOps, DevOps Culture e Alta Disponibilidade.  
**Instrução e Metodologia:** Projeto prático guiado pela **The Cloud Bootcamp**.

---

## 🎯 Visão Geral do Projeto (Business Case)

Este projeto simula um cenário corporativo real e complexo: a migração de um workload de missão crítica (SAP) de um Data Center On-Premises tradicional para a infraestrutura global da AWS.

O objetivo principal não é apenas o provisionamento técnico (Lift-and-Shift), mas a elaboração de uma **Estratégia Executiva (C-Level)** focada em:

1. **Redução de TCO (Total Cost of Ownership):** Transição de um modelo de alto CAPEX (compra de hardware) para um OPEX otimizado.
2. **Alta Disponibilidade e Resiliência:** Arquitetura Multi-AZ para o Banco de Dados Oracle.
3. **Previsibilidade Financeira:** Aplicação rigorosa de FinOps utilizando *Compute Savings Plans* de 3 anos.

---

## 🏗️ Arquitetura da Solução

O ambiente foi segregado em três camadas lógicas (Produção, Homologação e Desenvolvimento), garantindo isolamento e otimização de custos específicos para cada workload.

* **Compute (Camada de Aplicação SAP):** * Utilização de instâncias Amazon EC2 da família `t3a` (processadores AMD EPYC), entregando a melhor relação custo-benefício.
  * PROD: 5x `t3a.2xlarge` (8 vCPU / 32GB RAM).
  * HML/DEV: 5x `t3a.xlarge` (4 vCPU / 16GB RAM).
* **Database (Oracle):** * Amazon RDS for Oracle `db.m4.10xlarge`.
  * Configuração **Multi-AZ** no ambiente de Produção para Disaster Recovery nativo e RTO/RPO agressivos.
* **Storage Compartilhado:** * Amazon EFS (Elastic File System) provisionado com 1750 GB para compartilhamento dinâmico do diretório `/sapmnt`.
* **Networking:** * Application Load Balancers (ALB) distribuindo o tráfego de forma resiliente em todos os ambientes.

---

## 💰 Análise Financeira (Dashboard FinOps)

Os cálculos foram extraídos oficialmente da AWS Pricing Calculator, simulando o compromisso de longo prazo (*Compute Savings Plans - 3yr*) em conjunto com o **AWS Enterprise Support** (SLA de resposta de 15 minutos).

### Resumo Executivo de Custos

| Métrica Estratégica | Valor Projetado (USD) |
| :--- | :--- |
| **Custo Mensal Total** | $ 39.826,03 |
| **Custo Anual Total** | $ 477.912,36 |
| **Suporte Enterprise (Mensal)** | $ 15.000,00 |

### Distribuição por Ambiente

* **Produção (PROD):** $ 22.481,52 / mês
* **Homologação (HML):** $ 9.718,97 / mês
* **Desenvolvimento (DEV):** $ 7.625,13 / mês

---

## 📂 Estrutura do Repositório

O projeto foi construído em fases para demonstrar a evolução lógica do planejamento:

* 📁 **`/fase1-simulacao-calculadora-aws`**: Contém o detalhamento técnico, as evidências visuais da AWS Calculator e os relatórios financeiros (`.csv` e `.xlsx`) consolidados.
* 📁 **`/fase2-estrategia-e-arquitetura`**: Contém o diagrama da arquitetura proposta, o roteiro da apresentação executiva e o link para o portfólio web.

---

## 🌐 Showcase Interativo

Para uma visualização de alto nível direcionada a executivos e recrutadores, todo este escopo técnico foi transformado em uma Landing Page interativa.
👉 **Acesse a Apresentação Web aqui:** [Link da Lovable a ser inserido]
