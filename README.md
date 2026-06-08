```markdown
# 🌾 Portal Oficial Agrinho 2026 — Educação e Sustentabilidade

Bem-vindo ao repositório do **Portal Agrinho 2026**, uma plataforma web responsiva e interativa desenvolvida para promover as ações, pilares e concursos do Programa Agrinho — a maior iniciativa de responsabilidade social do Sistema FAEP/SENAR-PR, focada em conectar educação, cidadania e inovação sustentável entre o campo e a cidade.

---

## 📌 Índice
- [Visão Geral do Projeto](#-visão-geral-do-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Detalhamento Técnico dos Componentes](#-detalhamento-técnico-dos-componentes)
- [Práticas de Desenvolvimento Aplicadas](#-práticas-de-desenvolvimento-aplicadas)

---

## 👁️ Visão Geral do Projeto

O portal foi construído seguindo rigorosos padrões de semântica estrutural (HTML5), estilização centralizada e modularizada (CSS3) com design adaptável, e injeção dinâmica de dados via Manipulação da Árvore DOM (JavaScript). O objetivo é oferecer uma experiência fluida para professores, alunos e gestores escolares que buscam conhecer o regulamento dos concursos e interagir com dados reais sobre o agronegócio moderno.

---

## 🚀 Funcionalidades Principais

* **Página Inicial (`index.html`):** Apresenta o manifesto conceitual do programa, os três pilares fundamentais (Sustentabilidade, Cidadania e Inovação) e um player de vídeo institucional integrado de forma responsiva.
* **Espaço Interativo "Conhecimento Agro":** Um motor lógico baseado em eventos JavaScript que sorteia e renderiza fatos reais sobre sustentabilidade agrícola na tela com efeitos de transição visual (`opacity`), mitigando repetições adjacentes através de validação por laços.
* **Página de Concursos (`projetos.html`):** Tabela semântica detalhada contendo o público-alvo e a abordagem pedagógica de cada categoria (Desenho, Redação, Robótica e Relato Pedagógico).
* **Formulário de Inscrição Automatizado:** Área estruturada com validações nativas para captação de dados de educadores e emissão de feedback assíncrono visual (Alerta de Sucesso estruturado no DOM).

---

## 📂 Estrutura de Arquivos

O projeto adota uma arquitetura limpa de diretório raiz unificado:

```bash
├── index.html        # Página principal (Home do Portal)
├── projetos.html     # Página de listagem de concursos e formulário
├── style.css         # Folha de estilo global com variáveis nativas (:root)
└── script.js         # Motor de lógica, banco de dados e controle do DOM
