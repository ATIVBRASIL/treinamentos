# Relatório — OS ATIV-SITE-FOCO-DOUTRINA-002, QA final

Data: 13/10/2026. Branch: `os/ativ-site-foco-doutrina-002`. Base analisada: `a66b782`. Sem merge e sem deploy em produção.

## Fotografia em Quem Conduz

Diagnóstico: limitação das capturas anteriores. Não há defeito de arquivo, CSS ou carregamento.

As capturas da transição Doutrina → Aplicação → Quem Conduz foram feitas com recorte além da viewport, sem trazer a seção para a área visível. O retrato usa `loading="lazy"` e o contêiner tem fundo `#252c21`. Enquanto a imagem não entra na viewport, `naturalWidth` permanece 0 e só o fundo escuro aparece.

No preview do commit `a66b782`, com a seção de fato na tela:

| Largura | Antes de rolar | Depois de entrar na viewport | Caixa renderizada |
|---|---|---|---|
| 1366 | `naturalWidth` 0, `loading="lazy"` | 720×720, opacidade 1, `object-fit: cover` | 430×472 |
| 390 | a imagem já estava decodificada na mesma sessão | 720×720, visível | 342×392 |

A variação de luminosidade do bitmap foi 169, o que confirma fotografia e não um retângulo chapado. O enquadramento original, a borda dourada e o arquivo `assets/alex-dantas.webp` foram preservados. Nenhum código foi alterado por causa da foto.

Provas: `auditoria/os-ativ-site-foco-doutrina-002/foto/quem-conduz-1366.png` e `quem-conduz-390.png`.

## Artigo de doutrina operacional

Arquivo: `dist/conteudos/doutrina-operacional/index.html`.

A home, o FAQ e a seção “Da doutrina à prática” já condicionam as frentes ao escopo. O artigo ainda apresentava formação, comitê, integração, Evolução Profissional Permanente e caderno como partes fixas. A redação nova mantém a estrutura e a linguagem institucional.

### Introdução

Antes: “Na ATIV, lideranças, integração e formação permanente fazem parte de um mesmo programa.”

Depois: “Na ATIV, lideranças, integração e formação permanente podem compor o mesmo programa, conforme as necessidades identificadas.”

### Formação

Antes, título: “O treinamento faz parte da implantação”. O texto tratava os treinamentos como necessários ao programa e o acompanhamento como passo seguinte.

Depois, título: “A formação, quando a implantação pede”. A formação só é descrita quando integra o projeto, e a preparação de quem acompanha a aplicação fica explícita como “quando previsto”.

### Frentes

Antes, título: “Quatro frentes que se conectam”. Fechamento: “Essas frentes integram uma única solução.”

Depois, título: “Frentes que podem compor o projeto”. Fechamento: “Conforme as necessidades identificadas, o projeto pode envolver formação de lideranças, integração de profissionais, governança das referências e Evolução Profissional Permanente, isoladamente ou de forma combinada.” A frase sobre duração, frequência, participantes e entregas na proposta personalizada foi mantida.

### Caderno

Antes, título: “O caderno dá forma à identidade da empresa”. O caderno aparecia como organização padrão do programa.

Depois, título: “O caderno, quando previsto no escopo”. Os dois parágrafos condicionam o caderno à entrega contratada.

A descrição social e o dado estruturado do artigo deixaram de listar lideranças, integração e formação permanente como um pacote único. Passaram a dizer que o diagnóstico define quais frentes, entregas e prazos entram na proposta.

## O que não mudou

H1, navegação, CTAs, WhatsApp, caderno do hero, seção “Da doutrina à prática”, remoção da Formação Ethos e a fotografia de Quem Conduz. SaaS, Supabase e DNS não foram tocados.

## Testes

- `npm run check`: sintaxe de `dist/script.js` ok.
- Build de revisão: `noindex, nofollow` na home e a nova frase do artigo presente.
- Build de produção: `index, follow, max-image-preview:large` e `robots.txt` com `Allow: /`. A fonte em `dist/` permanece `noindex`.
- Nenhuma ocorrência de “ethos” nas HTML, CSS, JS e XML de `dist/` nem na saída `public-site`.
- A nova redação não reintroduz “única solução” nem “fazem parte de um mesmo programa”. A home continua dizendo que nem toda empresa precisa de todas as frentes.
