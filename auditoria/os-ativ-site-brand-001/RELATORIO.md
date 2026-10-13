# Relatório — OS ATIV-SITE-BRAND-001

Data: 13/10/2026. Branch: `os/escopo-personalizado-v1`. Sem merge e sem deploy.

## Repositório

- Correto: `C:\treinamentos`, remoto `ATIVBRASIL/treinamentos`, domínio `treinamentos.ativbrasil.com.br`.
- Fora de escopo: `C:\ativ-landing-seguranca` (ATIV Conformidade). Não foi alterado.
- Base: `main` em `99ca9c4`, árvore limpa antes da branch.
- A página pública conferida antes da edição coincidia com `dist/index.html` da `main`.

## Arquivos alterados

| Arquivo | Objetivo |
|---|---|
| `dist/index.html` | Escopo e prazo personalizados no hero, abordagem, oferta, processo, doutrina, Ethos, aplicação, FAQ, contato e CTA mobile. Metadados e Schema `Service` deixam de descrever um pacote com todas as frentes. |
| `dist/script.js` | Mensagem WhatsApp `revisao`. A barra mobile some enquanto o CTA do hero está visível, para não cobri-lo. |
| `dist/style.css` | Apoio visual do texto de flexibilidade e do bloco editorial, com tokens existentes. Espaçamento mobile para manter o H1 e o CTA legíveis. |
| `dist/sitemap.xml` | `lastmod` da home para 2026-10-13. URLs preservadas. |

Não houve alteração de Vercel, Supabase, DNS, credenciais, número de WhatsApp ou e-mail.

## Testes

- `npm run check`: sintaxe de `dist/script.js` ok.
- `npm run build`: revisão `noindex` ok.
- `VERCEL_ENV=production node scripts/build-vercel.mjs`: site indexável ok. A saída local voltou em seguida para revisão `noindex`.
- H1 idêntico, inclusive “O padrão da sua empresa vive nas pessoas.”
- Overflow horizontal 0 em 360, 390, 768, 1024, 1366 e 1920.
- Hero e barra mobile apontam para `#contato`. A opção `revisao` só prepara o link; nada é enviado automaticamente.
- Menu mobile abre e fecha com Escape. Foco no seletor ok.
- Rotas `/conteudos/`, artigos e `/privacidade/` respondem 200.
- Imagem do Caderno carregada (1536×1024), logo e alt preservados.
- A única ocorrência de “12 meses” é a pergunta da FAQ, respondida com “Não.”

## Medição

Não há Analytics, Pixel, Hotjar nem outro rastreador no HTML ou no JavaScript. Não foi instalado nenhum. Uma medição futura (clique no CTA e opção do seletor) precisa de consentimento, atualização da página de privacidade e revisão da Content-Security-Policy antes de qualquer script externo.

## Aprovação humana pendente

- A frase da plataforma Formação Ethos foi mantida. A existência e o alcance do registro precisam de validação da ATIV antes de qualquer correção.
- Alcance do que permanece com a empresa e comunicação regulatória dos cursos de vigilantes.
- Não existe `og:image`. Sugestão: usar arte já aprovada. Nenhum ativo novo foi produzido.
- Artigos em `/conteudos/` foram preservados e ainda narram o programa integrado. Vale uma revisão editorial posterior para não contradizer o escopo personalizado.
- As marcas do rodapé e da faixa do hero continuam citando lideranças e Formação Ethos como identidade, sem apresentá-las como contrato obrigatório.

## Fechamento do QA

Revalidação em 13/10/2026, no commit `046a4e8`, sem merge e sem deploy.

- `node --check dist/script.js`: sintaxe ok.
- Build com `VERCEL_ENV=production`: `public-site` fica indexável e o `dist` permanece `noindex, nofollow`.
- Preview do commit pronto e com `noindex`. A produção continua em `99ca9c4`.
- Overflow horizontal 0 em 360, 390, 768, 1024, 1366 e 1920.
- No mobile, a barra some com o CTA do hero visível, volta no meio da página e some de novo em `#contato`.
- Menu abre e fecha com Escape. A opção `revisao` só prepara o link do WhatsApp.
- Caderno em 1536×1024. Rotas da home, conteúdos, artigos, privacidade, logo e caderno respondem 200.
- Uma ocorrência de “12 meses”, na pergunta da FAQ. A resposta começa com “Não.”
- E-mail, WhatsApp e ausência de rastreadores preservados.

Resultado: aprovado para merge e deploy. As pendências humanas abaixo não bloqueiam a home.

## Publicação

Autorizado em 13/10/2026 para merge na `main` e deploy em produção.
