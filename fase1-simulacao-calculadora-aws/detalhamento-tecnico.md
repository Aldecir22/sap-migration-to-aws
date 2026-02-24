# DOCUMENTAÇÃO TÉCNICA: SIMULAÇÃO DE CUSTOS SAP

## 1. Calculadora de preços da AWS

Acesso a ["Calculadora de preços da AWS"](https://calculator.aws/#/)

## 2. Configuração da Região e Premissas

**Região: South America (São Paulo)** - Escolhida para garantir a menor latência para usuários no Brasil, apesar do custo levemente superior a US-East-1.

**Modelo de Compra:** Compute Savings Plans (3 anos).

**Estratégia:** Compromisso de longo prazo para redução de até 60% em relação ao On-Demand.

## 3. Dimensionamento do Compute (EC2)

Aqui detalhamos a escolha da família t3a (instâncias baseadas em AMD EPYC), que oferece um equilíbrio ideal entre performance e custo para servidores de aplicação SAP.

**Produção (PROD):** 5 instâncias t3a.2xlarge (8 vCPU / 32GB RAM).

Uso: 100% constante.

Storage: 400 GB gp2 por nó.

![PRINT DAS EC2 PROD](/fase1-simulacao-calculadora-aws/evidencias/05-ec2-producao.png)

**HML & DEV:** 5 instâncias t3a.xlarge (4 vCPU / 16GB RAM).

**Storage:** 300 GB gp2 por nó.

![PRINT DAS EC2 HML/DEV](/fase1-simulacao-calculadora-aws/evidencias/08-cinco-ec2-hml-dev.png)

### 3. Camada de Banco de Dados (RDS Oracle)

A parte mais crítica da migração. O Oracle exige alta performance de IOPS e disponibilidade.

**PROD:** db.m4.10xlarge em modo Multi-AZ. Essencial para tolerância a falhas e SLA de produção.

![PRINT DO RDS PROD COM MULTI-AZ ATIVADO](/fase1-simulacao-calculadora-aws/evidencias/09-dois-banco-dados-prod.png)

![PRINT DO RDS PROD COM Single-AZ ATIVADO](/fase1-simulacao-calculadora-aws/evidencias/10-dois-banco-dados-hml.png)

HML: db.m4.4xlarge (Multi-AZ).

DEV: db.m3.2xlarge (Single-AZ) - Otimização de custos para ambiente de teste.

### 4. Armazenamento Compartilhado (EFS)

Para o diretório /sapmnt e arquivos de transporte, utilizamos o EFS pela facilidade de montagem NFS em múltiplos nós.

Capacidade: 1750 GB Standard Storage.

![PRINT DO EFS Elastic File System](/fase1-simulacao-calculadora-aws/evidencias/13-efs-prod-hml-dev.png)

### 5. Camada de Rede (Load Balancer)

3 Application Load Balancers (ALB) para distribuir o tráfego entre os servidores de aplicação nos três ambientes.

![PRINT ALB Amazon Load Balance](/fase1-simulacao-calculadora-aws/evidencias/07-load-balance-prod-hml-dev.png)

### 6. Suporte Enterprise

Garante que, em caso de indisponibilidade do SAP, temos um engenheiro da AWS em até 15 minutos.

![PRINT Suporte Enterprise](/fase1-simulacao-calculadora-aws/evidencias/14-suporte-enterprise.png)

### 📊 Resumo de Custos Final (A Evidência de Ouro)

Total Mensal: $39.826,03

Total Anual: $477.912,36

Total em 3 Anos: $1.433.737,08

![PRINT Estimativa Completa](/fase1-simulacao-calculadora-aws/evidencias/15-custo-total.png)
