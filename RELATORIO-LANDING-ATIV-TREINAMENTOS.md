# Relatório completo — Landing ATIV Treinamentos

**Uso:** documento de contexto para o projeto Claude **ATIV TREINAMENTO** (criação de páginas, treinamentos e conteúdos da Formação Ethos).  
**Fonte canônica:** repositório `ATIVBRASIL/treinamentos` · arquivo único `index.html` + pasta `images/`.  
**URL de produção:** https://treinamentos.ativbrasil.com.br  
**Domínio (CNAME):** `treinamentos.ativbrasil.com.br`  
**Data deste relatório:** 29/07/2026  

---

## 1. O que é esta landing (papel no ecossistema ATIV)

A landing **ATIV Treinamentos** é a página de aquisição comercial de **capacitação corporativa comportamental** (Formação Ethos e formatos correlatos) para empresas de segurança privada e facilities.

Ela **não** é a plataforma operacional ATIV (gestão de CNV, reciclagem, etc.). Ela vende o **serviço de treinamento in-company**, com ênfase em:

1. **Problema:** conduta no posto (não só “papel em dia”).
2. **Oferta de entrada:** Levantamento de Necessidades de Treinamento (LNT) **sem custo**.
3. **Produto:** três formatos (Imersão, Treinamento no Posto, Parceria Anual).
4. **Prova:** evidências documentais + **credencial pública Formação Ethos**.
5. **Autoridade:** instrutor Alex Andreoli Dantas, credenciamento PF nº 89/2026.

### Relação com Formação Ethos

- **Formação Ethos** = capacitação complementar em competências comportamentais (discernimento, conduta, convivência).
- Cada empresa pode ter **página pública de formação**; cada profissional recebe **credencial verificável** (código tipo `ETH-XXXX-XXXX` / CPF).
- A landing **promove** Ethos e mostra o mock da credencial; a emissão/verificação real fica no produto/plataforma ATIV (fora deste HTML).
- **Disclaimer obrigatório (repetido na seção Ethos e no footer):** Ethos **não substitui** formação, extensão e reciclagem da Portaria PF nº 16/2024, exclusivas de escolas credenciadas.

### Público-alvo da página

- Gestores, donos e supervisores de empresas de segurança privada / facilities.
- Região-base: **Indaiatuba** e entorno (Salto, Itu, Cabreúva, Itupeva, Monte Mor, Elias Fausto, Capivari, Hortolândia); outras praças sob consulta.
- Tom: B2B operacional, direto, sem “palestra motivacional”; prova > adjetivo.

---

## 2. Formato técnico e arquitetura

| Aspecto | Detalhe |
|--------|---------|
| Tipo | Site estático **single-page** (SPA visual, âncoras) |
| Arquivo principal | `index.html` (~1358 linhas) — HTML + CSS embutido + JS embutido |
| Framework | Nenhum (vanilla) |
| Build | Nenhum |
| Deploy | Hosting estático (histórico com Vercel no `.gitignore`; domínio via CNAME) |
| Repo | https://github.com/ATIVBRASIL/treinamentos |
| Idioma | `pt-BR` |
| Assets | `images/` (logo, favicons, foto do instrutor) |

### Por que isso importa para o projeto Claude

Ao criar novas páginas ou variantes:

- Reutilizar o **mesmo contrato visual** (tokens CSS, tipografia, tom).
- Manter o **mesmo funil**: CTA → `#contato` → LNT sem custo.
- Manter o **mesmo pipeline de lead** (`submit-lead` + `origem` distinta por página).
- Respeitar disclaimers legais PF / Ethos.

---

## 3. Identidade visual e design system

### Tipografia

| Papel | Família | Uso |
|-------|---------|-----|
| Corpo | **Barlow** 400/600 | Texto corrido, formulário |
| Display | **Barlow Condensed** 600/700 | H1–H3, botões, nomes |
| Mono / UI | **JetBrains Mono** 400/500/600 | Eyebrows, tags, topbar, metas, formulário legal |

Características: títulos em **uppercase**, letter-spacing apertado no display; sensação “dossiê / operacional”, não startup genérica.

### Tokens de cor (tema escuro padrão)

Definidos em `:root` / `html[data-theme="dark"]` e espelhados em `html[data-theme="light"]`.

| Token | Escuro (aprox.) | Papel |
|-------|-----------------|-------|
| `--ink` | `#0c0f12` | Fundo da página |
| `--panel` / `--panel-2` | `#12161b` / `#171c22` | Cards, painéis |
| `--text` / `--muted` / `--dim` | creme / cinza | Hierarquia tipográfica |
| `--brand` | `#e85d1f` | Laranja ATIV (CTA, destaques) |
| `--ok` | `#3fb27f` | Status válido / sucesso |
| `--wa` | `#1f7a4d` | Verde WhatsApp (classe `.btn-wa` existe; CTA principal é brand) |

**Marca visual:** laranja `#e85d1f` sobre fundo escuro grafite; grid sutil de linhas no fundo; bordas `--line`; radius 14px / 22px.

### Tema claro/escuro

- Preferência salva em `localStorage` chave `ativ-theme` (`light` | `dark`).
- Fallback: `prefers-color-scheme`.
- Script no `<head>` aplica tema **antes do paint** (evita flash).
- Toggle na nav (`#theme-toggle`), ícones sol/lua.

### Layout

- Largura máx. `--max: 1160px`, gutters 24px (16px mobile).
- Nav sticky 72px; `scroll-margin-top: 88px` nas seções.
- Breakpoints principais: ~1080 (esconde links nav), 940, 880, 640, 480, 380.

### Motion

- Reveal on scroll (`.reveal` + IntersectionObserver).
- Contadores animados no hero (`data-count`).
- Animação “carimbo” na pasta de evidências (`.stamp`).
- Respeita `prefers-reduced-motion: reduce` (desliga animações).

---

## 4. Estrutura da página (ordem das seções)

```
1. Topbar (faixa legal/credenciamento)
2. Nav sticky (logo, links, tema, CTA)
3. Hero (#top) + card dossiê do instrutor + stats
4. Contexto / Por que agora (#contexto)
5. Formatos / Programas (#programas)
6. Evidências / Pasta do gestor (#evidencias)
7. Credencial Ethos (#ethos)
8. Instrutor / Diferencial (#instrutor)
9. Processo / Como funciona (#processo)
10. FAQ (#faq)
11. Contato / Levantamento (#contato) ← formulário
12. Footer (marca + disclaimer PF)
```

### Âncoras da navegação

| Label | Href |
|-------|------|
| Por que agora | `#contexto` |
| Formatos | `#programas` |
| Evidências | `#evidencias` |
| Credencial | `#ethos` |
| Dúvidas | `#faq` |
| CTA nav | `#contato` — “Quero o levantamento” |

`#instrutor` e `#processo` **existem** mas **não** aparecem na nav (só scroll interno / SEO de estrutura).

---

## 5. Copy completa por seção (mensagem e CTAs)

### 5.1 Topbar

> NOVO MARCO DA SEGURANÇA PRIVADA. LEI 14.967/24 · CREDENCIAMENTO PF Nº 89/2026

### 5.2 Hero

- **Badge:** Credenciamento PF nº 89/2026 · Válido até 2031  
- **H1:** Sua equipe sabe o que fazer. Então por que não faz quando mais *importa?*  
- **Lead:** Técnica sem mentalidade não muda comportamento. ATIV forma o profissional por trás do procedimento: discernimento, conduta e convivência. No posto quem decide é ele; quem responde é você.  
- **Apoio (itálico):** O padrão da operação é o que a equipe faz quando ninguém olha. Formamos isso e entregamos evidências.  
- **CTA primário:** Quero elevar o padrão da minha equipe → `#contato`  
- **CTA secundário:** Ver os formatos → `#programas`  
- **Nota:** Levantamento sem custo · Documento assinado em 48h úteis · Treinamento in-company, no seu posto  

**Card dossiê (instrutor):**

- Nome: Alex Andreoli Dantas  
- Role: Tenente PMESP (Veterano) · Instrutor credenciado PF  
- Tags: Força Aérea Brasileira · Formação em Filosofia · Analista comportamental · Neurociência aplicada  
- Citação-chave: 26 anos de rua; o que falta não é técnica, é caráter; o vigilante faz no posto o que fez primeiro dentro de si.

**Stats:**

| Número | Label |
|--------|-------|
| 26 | Anos de PMESP |
| 18 | Anos de Força Tática |
| 13 | Disciplinas credenciadas PF |
| 2031 | Credenciamento válido até |

### 5.3 Contexto (#contexto)

- **Eyebrow:** Por que agora  
- **H2:** A multa da PF tem tabela. O contrato perdido, não.  
- **Lead:** Papel evita multa; contrato cai por conduta.  
- **3 cards:** Responsabilidade civil · Contrato (contratante também responde) · Atrito diário (expectativa desalinhada)  
- **Bridge:** Treinar onde o incidente nasce (decisão) e documentar para resposta assinada/datada.

### 5.4 Programas (#programas)

- **Eyebrow:** Formatos de treinamento  
- **H2:** Treinar não pode custar um posto descoberto.  
- **Três planos:**

| Plano | Flag | Para quem | Destaques | CTA / data-interesse |
|-------|------|-----------|-----------|----------------------|
| **Imersão In-Company** | Ponto de entrada | Dor específica rápida | 4h ou 8h; turma mista; 1 disciplina; material + certificados; relatório RH | Quero o levantamento → `Imersão In-Company` |
| **Treinamento no Posto** | **Mais contratado** | Efetivo inteiro sem desfalque | Blocos 2h; zero desfalque; repetição espaçada; 12x36 nas duas alas; follow-up 60 dias | Quero o levantamento → `Treinamento no Posto` |
| **Parceria Anual** | Recorrência | 50+ colaboradores | Calendário anual; mensal/trimestral; líderes; relatórios; integração plataforma ATIV | Falar com o instrutor → `Parceria Anual` |

- **Bridge:** Conteúdo montado com o gestor a partir do levantamento (casos reais do posto).

**Comportamento:** cliques com `data-interesse` pré-selecionam o select `#sel-interesse` no formulário e destacam a borda brand por ~1,8s.

### 5.5 Evidências (#evidencias)

- **H2:** Ninguém pede comprovação num dia bom.  
- Distinção: certificado da escola = **pode** trabalhar; certificado ATIV = **foi além** (discernimento, conduta, convivência + avaliação + verificação 60 dias).  
- Entregáveis por turma: certificados individuais, grade, lista de presença, avaliação/eficácia, fotos/vídeos.  
- Visual “pasta” com docs mock (agentes, horas, competências, turmas, verificação pública) + animação de carimbo OK.  
- Selo: Credenciamento PF nº 89/2026 · válido até **21/01/2031**.

### 5.6 Ethos (#ethos)

- **Eyebrow:** Formação Ethos  
- **H2:** Você não precisa estar na sala para a prova funcionar.  
- Mock da credencial pública (nome genérico, curso “Virtudes do Guardião”, skills comportamentais, código ETH-XXXX-XXXX).  
- Pontos: página por empresa; só entra quem concluiu; próxima turma aparece; credencial é do profissional.  
- Nota legal complementar (não substitui Portaria 16/2024).

### 5.7 Instrutor (#instrutor)

- Narrativa: 2h da manhã no posto; decisão em 3 segundos; quatro virtudes (coragem, temperança, justiça, prudência).  
- Trajetória: 26 anos PMESP, 18 Força Tática; filosofia, análise comportamental, neurociência.  
- Card PF: 13 disciplinas; nº 89/2026; válido até 21/01/2031.

### 5.8 Processo (#processo) — 5 passos

| # | Etapa | Promessa | Timing |
|---|-------|----------|--------|
| 01 | Levantamento | LNT por posto/função; documento do cliente | Sem custo · 48h úteis |
| 02 | Desenho conjunto | Casos do posto; proposta sai daí | Só depois do documento |
| 03 | Execução | Posto/sede/local | Sem desfalcar escala |
| 04 | Evidências | Certificados, relatório, recomendações | Dossiê completo |
| 05 | Retorno | Medir o que se sustentou | Após 60 dias |

### 5.9 FAQ (#faq) — 11 perguntas (acordeão)

1. O que é o levantamento? (LNT / ISO 10015 / ISO 18788; documento em 48h; é do cliente)  
2. Substitui formação de vigilante? (**Não**)  
3. Evita multa da PF? (Multa = documentação; treinamento = incidente/contrato)  
4. Por que agora o comportamento mudaria? (método + medição + retorno 60 dias)  
5. Como treinar sem desfalcar? (Treinamento no Posto / 2h / 12x36)  
6. Treinamento igual para todas? (Doutrina igual; aplicação customizada)  
7. O que a empresa recebe além do treinamento? (Evidências + registro consolidado público/PDF)  
8. Supervisores ou só operacional? (Os dois; começar pela liderança)  
9. Porteiro/zelador/limpeza? (Sim; turmas mistas)  
10. Acontece na empresa? (Sim; lista de cidades; viabilidade no LNT)  
11. Quanto custa? (Só após levantamento; LNT sem custo)

### 5.10 Contato (#contato)

- **H2:** Levantamento de Necessidades de Treinamento. Sem custo.  
- Promessa: 1h estruturada; documento em 48h úteis; documento é do cliente mesmo sem fechar.  
- CTA botão: **Quero meu levantamento**  
- Lateral: WhatsApp direto, prazo (retorno 24h úteis / doc 48h), quem participa, região, garantia de leitura honesta.  
- Link WA pré-preenchido:  
  `https://wa.me/5519974010028?text=Olá, quero o levantamento de necessidades de treinamento da minha operação`

### 5.11 Footer

- Marca: ATIV. Treinamentos · Capacitação corporativa em segurança privada · Indaiatuba/SP  
- Linha mono: CREDENCIAMENTO PF Nº 89/2026 · VÁLIDO ATÉ 21/01/2031 · LEI 14.967/24 · ISO 18788 · ISO 10015  
- Disclaimer Ethos / Portaria 16/2024 (igual à seção Ethos).

---

## 6. Vocabulário e posicionamento (para o Claude não diluir)

### Pilares de mensagem (não negociar)

1. **Comportamento > papel** — multa tem tabela; contrato perdido não.  
2. **Quem responde é a empresa** — ato do empregado, conta no empregador.  
3. **Treinar sem desfalcar** — formato “no posto” é o herói comercial.  
4. **Prova verificável** — evidências + página pública Ethos, não adjetivo.  
5. **LNT como porta de entrada** — sem custo, documento em 48h, proposta só depois.  
6. **Complementar, não substituto** — nunca prometer substituir escola PF.

### Palavras-chave de marca

- Formação Ethos  
- discernimento, conduta, convivência  
- levantamento / LNT  
- evidências / dossiê / registro consolidado  
- credenciamento PF nº 89/2026  
- Lei 14.967/24  
- in-company / no posto / 12x36  
- retorno em 60 dias  

### Tom

- Direto, adulto, gestor-a-gestor.  
- Frases curtas; metáforas de posto/rua, não de “jornada do herói”.  
- Evitar: hype genérico, emoji, purple-gradient SaaS, promessa de “evitar multa da PF” como benefício principal do treinamento.

### CTA canônico

Preferir variações de **“Quero o levantamento”** / **“Quero meu levantamento”** em vez de “Fale conosco” genérico. A Parceria Anual usa “Falar com o instrutor” (ainda leva ao form com interesse pré-selecionado).

---

## 7. Formulário de lead — campos e validação

**Elemento:** `<form id="lead-form" novalidate>`  
**Seção:** `#contato`

| name (HTML) | Label / placeholder | Obrigatório | Tipo |
|-------------|---------------------|-------------|------|
| `nome` | Seu nome | sim | text |
| `cargo` | Cargo | sim | text |
| `empresa` | Empresa | sim | text |
| `email` | E-mail corporativo | sim | email |
| `whatsapp` | WhatsApp (com DDD) | sim | tel |
| `efetivo` | Tamanho total do efetivo | sim | select |
| `composicao` | Composição predominante | sim | select `#sel-composicao` |
| `interesse` | Formato de interesse | sim | select `#sel-interesse` |

### Opções `efetivo`

- Até 20  
- 20 a 100  
- 100 a 300  
- 300 a 600  
- +600  

### Opções `composicao`

- Maioria vigilante (armado ou desarmado)  
- Maioria portaria e controle de acesso  
- Maioria limpeza, zeladoria e facilities  
- Equilibrado entre segurança e facilities  
- Prefiro detalhar na conversa  

### Opções `interesse`

- Imersão In-Company  
- Treinamento no Posto  
- Parceria Anual  
- Ainda não sei. Quero o levantamento  

### UX pós-envio

- Botão: “Enviando...” + `disabled`  
- Sucesso: form é **substituído** por `.form-success` — “✓ RECEBIDO / Recebido. Retorno em até 24h úteis para agendar o levantamento.”  
- Erro: mensagem + link de fallback para WhatsApp  
- Texto legal sob o form: dados só para contato e elaboração do levantamento; sem lista / sem disparo em massa.

---

## 8. Para onde vai o lead (pipeline técnico)

### Configuração embutida (`CONFIG` no JS)

```js
WHATSAPP: "5519974010028"
SUPABASE_URL: "https://dbbzehyummpjyedxmsme.supabase.co"
SUPABASE_ANON_KEY: "<anon JWT — mesma base da landing de segurança>"
```

Comentário no código: **CRM SaaS** — Edge Function `submit-lead` (insert + e-mail via **Resend**). Mesma base da landing de segurança.

### Fluxo principal (quando Supabase está configurado)

1. Usuário submete o form.  
2. Front valida campos obrigatórios no cliente.  
3. `POST` para:  
   `{SUPABASE_URL}/functions/v1/submit-lead`  
4. Headers:  
   - `Content-Type: application/json`  
   - `apikey: ANON_KEY`  
   - `Authorization: Bearer ANON_KEY`  

### Contrato do body enviado (mapeamento)

O formulário da landing **não** envia os nomes HTML crus. Remapeia para o contrato da Edge Function:

| Campo API (`submit-lead`) | Origem no form | Observação |
|---------------------------|----------------|------------|
| `nome` | `nome` | direto |
| `cargo` | `cargo` | direto |
| `empresa` | `empresa` | direto |
| `telefone` | `whatsapp` | renomeado |
| `num_colaboradores` | `efetivo` | renomeado |
| `tipo_contrato` | `interesse` | formato de interesse |
| `desafio` | composto | ver abaixo |
| `origem` | fixo | **`"landing-treinamentos"`** |

**Campo `desafio` (texto multilinha concatenado):**

```
E-mail: {email}
Formato: {interesse}
Composição do efetivo: {composicao}
```

Ou seja: e-mail, formato e composição **não** têm colunas próprias no payload; vão dentro de `desafio` para caber no contrato compartilhado com outras landings.

### Identificação da origem

Sempre: `origem: "landing-treinamentos"`  
Isso permite filtrar no CRM/banco leads desta landing vs. outras (ex.: landing de segurança).

### Efeito colateral esperado no backend

Conforme comentário do código: a Edge Function faz **insert** na base (CRM) **e** dispara **e-mail** (Resend). Detalhes da tabela, destinatários do e-mail e templates **não estão neste repositório** — vivem no projeto Supabase / CRM SaaS ATIV.

### Fallback (se `SUPABASE_URL` ou `ANON_KEY` estiverem vazios)

1. Abre WhatsApp em nova aba com mensagem formatada contendo todos os campos.  
2. Mesmo assim mostra tela de sucesso na página.

### WhatsApp comercial

- Número: **+55 19 97401-0028** (`5519974010028`)  
- Usado no link lateral, no erro do form e no fallback.

---

## 9. SEO, social e dados estruturados

### Meta

- **Title:** Treinamento para Segurança Privada em Indaiatuba \| ATIV  
- **Description:** Treinamento comportamental para segurança privada, no próprio posto e sem desfalcar a escala. Instrutor credenciado pela PF. Indaiatuba, Salto, Itu e região.  
- **OG:** title/description/type/url/locale/image (`logo-ativ.png`)  
- **URL canônica OG:** https://treinamentos.ativbrasil.com.br  

### JSON-LD (`ProfessionalService`)

- name: ATIV Treinamentos  
- areaServed: Indaiatuba, Salto, Itu, Cabreúva, Itupeva, Monte Mor, Elias Fausto, Capivari, Hortolândia  
- founder: Alex Andreoli Dantas  
- logo/url apontando para o domínio de produção  

### Favicons / ícones

- `images/favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png`  
- Logos: `logo-ativ.png` (OG), `logo-ativ-nav.png` (nav/footer)  
- Foto: `images/instrutor.png` (fallback iniciais “AD” se falhar)

---

## 10. Funcionalidades JS (checklist)

| Feature | Como |
|---------|------|
| Tema claro/escuro | `localStorage` + `data-theme` + toggle |
| Pré-seleção de formato | `data-interesse` nos CTAs dos planos |
| Reveal scroll | IntersectionObserver em `.reveal` |
| Carimbo pasta | Observer em `#pasta-visual` |
| Contadores hero | `data-count` + rAF easing |
| FAQ accordion | um item aberto por vez; `aria-expanded` |
| Submit lead | fetch Edge Function ou WA fallback |
| Reduced motion | desliga animações / deixa revelado |

Não há analytics embutido visível no HTML (GA/Pixel etc.) — se existir, está fora deste arquivo (hosting/tag manager).

---

## 11. Fatos operacionais e jurídicos que a copy amarra

| Fato | Onde aparece |
|------|----------------|
| Credenciamento PF **nº 89/2026** | topbar, badge, evidências, instrutor, footer |
| Validade até **21/01/2031** (ou “2031” no hero) | evidências, instrutor, footer, stats |
| Lei **14.967/24** | topbar, FAQ, footer |
| Portaria PF **nº 16/2024** | Ethos note, footer, FAQ |
| ISO **10015** e **18788** | FAQ levantamento, footer |
| 13 disciplinas credenciadas | stats, card instrutor |
| Base Indaiatuba + 8 cidades | schema, FAQ, contato |
| WhatsApp instrutor | contato |
| LNT sem custo / doc 48h / retorno 24h | hero, processo, FAQ, contato |

---

## 12. O que costuma passar despercebido (atenção do projeto Claude)

1. **Single file:** CSS e JS vivem dentro do `index.html`; não há componentes React/Next neste repo.  
2. **Contrato de lead compartilhado:** campos ricos do form são “espremidos” em `desafio` + `tipo_contrato`; ao criar nova landing, manter o contrato da Edge Function e variar só `origem`.  
3. **`origem` fixa:** `landing-treinamentos` — novas páginas precisam de string própria se quiserem rastreio separado.  
4. **E-mail do lead não tem campo API próprio** — vai dentro de `desafio`.  
5. **CTA comercial real é o LNT**, não “comprar treinamento” direto; preço só após levantamento.  
6. **Nav omite** Instrutor e Processo — seções existem para narrativa/SEO.  
7. **Ethos é produto de prova pública** referido na landing; a página pública real da empresa/agente **não** é este HTML.  
8. **Plataforma ATIV** (documentação/CNV) é mencionada como irmã (“a plataforma ATIV cuida disso” na FAQ de multa) — não confundir com esta landing.  
9. **Anon key no front** é intencional para chamar Edge Function; RLS/validações devem estar no backend.  
10. **Encoding UTF-8:** regra do repo — nunca gravar configs em UTF-16 via PowerShell sem `-Encoding utf8`.  
11. **Classe `.btn-wa`** existe no CSS mas o CTA principal de conversão no form é brand; WA é canal paralelo.  
12. **Parceria Anual** menciona “Integração com a plataforma ATIV (evidências digitais)” — ponte produto SaaS ↔ treinamento.  
13. **Turmas mistas** (segurança + facilities) são argumento comercial explícito — útil em copy de novas páginas Ethos.  
14. **Follow-up 60 dias** é parte da promessa de eficácia, não opcional na narrativa.  
15. **Disclaimer PF** deve seguir em qualquer página Ethos / treinamento gerada pelo projeto.

---

## 13. Briefs prontos para o projeto ATIV TREINAMENTO (Claude)

### Ao criar uma nova landing / página de captura

- Manter funil LNT → formulário → `submit-lead` com `origem` nova.  
- Reusar tipografia Barlow / Barlow Condensed / JetBrains Mono e laranja brand.  
- CTA canônico centrado em levantamento, não em preço.  
- Incluir disclaimer Portaria 16/2024 se falar de Ethos ou vigilante.

### Ao criar conteúdo de Formação Ethos (curso / módulo)

- Competências de exemplo na landing: comunicação assertiva, escuta ativa, atendimento ao público, gestão de conflitos, controle emocional sob pressão.  
- Curso mock mostrado: **Virtudes do Guardião** (4h).  
- Tríade pedagógica: **discernimento · conduta · convivência**.  
- Virtudes narrativas do instrutor: coragem, temperança, justiça, prudência.  
- Sempre deixar claro: complementar à formação PF, não substituto.

### Ao criar materiais para o gestor (pós-turma)

Espelhar o pacote prometido:

1. Certificados individuais (identificação, conteúdo, CH, responsável técnico)  
2. Grade / conteúdo programático  
3. Lista de presença assinada  
4. Avaliação da turma + registro de eficácia  
5. Fotos/vídeos in-company  
6. Retorno de 60 dias  
7. Registro consolidado (PDF + link público)

### Ao falar com o lead (script alinhado à página)

1. Agradecer / confirmar recebimento (promessa: retorno em 24h úteis).  
2. Agendar 1h de LNT com quem conhece o posto.  
3. Entregar documento assinado em até 48h úteis.  
4. Só então desenhar proposta e formato.  
5. Não precificar antes do levantamento.

---

## 14. Inventário de arquivos do repositório

```
treinamentos/
├── index.html                          ← página inteira
├── CNAME                               ← treinamentos.ativbrasil.com.br
├── .gitignore
├── RELATORIO-LANDING-ATIV-TREINAMENTOS.md  ← este arquivo
└── images/
    ├── logo-ativ.png
    ├── logo-ativ-nav.png
    ├── instrutor.png
    ├── favicon-32.png
    ├── favicon-48.png
    └── apple-touch-icon.png
```

---

## 15. Resumo executivo (1 parágrafo)

A landing ATIV Treinamentos é uma página estática única em português que vende **capacitação comportamental in-company** (Formação Ethos e formatos Imersão / No Posto / Parceria Anual) para gestores de segurança e facilities na região de Indaiatuba, com autoridade de instrutor credenciado PF 89/2026. O funil converte para um **Levantamento de Necessidades de Treinamento sem custo**; o formulário envia o lead à Edge Function Supabase `submit-lead` (insert CRM + e-mail Resend) com `origem: "landing-treinamentos"`, mapeando WhatsApp→telefone, efetivo→num_colaboradores, interesse→tipo_contrato e empacotando e-mail/formato/composição em `desafio`, com fallback WhatsApp. A narrativa central é: conduta no posto, treinamento sem desfalcar escala, evidências e credencial Ethos verificável — **sempre** como complemento, nunca como substituto da formação obrigatória PF.

---

*Fim do relatório. Atualizar este documento quando copy, formatos, pipeline de lead ou domínio mudarem.*
