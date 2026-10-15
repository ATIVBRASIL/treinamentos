# OS V5.1 — Registro da revisão

Status: **branch de desenvolvimento; ainda não publicada**.

## Alterações na branch
- Abertura, subtítulo e CTAs aprovados **inalterados**.
- Na seção "O problema", adicionada uma ligação específica entre conhecimento concentrado e capacidade de transmitir o padrão.
- Na dimensão "Nas pessoas", referência explícita à responsabilidade de proteger, à finalidade dos procedimentos e aos limites da função.
- Na seção de transformação, incluído exemplo operacional **ilustrativo** de ronda com registro por QR Code. O registro isolado não comprova presença física nem inspeção. O texto reconhece regras aplicáveis e condições reais de execução.
- Criado estilo responsivo para os dois blocos adicionais.
- Adicionados `og:image`, `og:image:alt` e Twitter Card de imagem grande usando o Caderno **ilustrativo já existente**.
- CSP ajustada com domínios específicos de fontes: `fonts.googleapis.com` (folhas de estilo) e `fonts.gstatic.com` (fontes). Solução de alteração mínima; auto-hospedagem não realizada para evitar inclusão de binários/impacto adicional nesta revisão.
- README atualizado para documentar V5/V5.1 sem apagar o histórico V4.

## Pendências editoriais — confirmar com a ATIV
- **Prazo aproximado de um mês** mencionado no FAQ: autorização comercial vigente? Não alterado.
- **Experiência de 26 anos** declarada na página do instrutor: confirmar contagem e fonte atual. Não alterada.
- Exemplo de ronda e texto de ligação: revisar tom e adequação antes de aprovar a publicação.
- Imagem original/licenciada de reunião operacional **não integrada**; componente permanece com fallback sem fotografia. Não confundir imagem conceitual com treinamento realmente executado.

## Verificações técnicas pendentes
- Executar `npm run check`, `npm run build` e verificação de indexação conforme ambiente.
- Confirmar cabeçalhos CSP efetivos e carregamento das fontes com Network/Console em navegador de prévia.
- Inspecionar responsividade, menu, âncoras, WhatsApp, contraste e ausência de rolagem horizontal.
- Não foram instalados Analytics, Meta Pixel nem coleta adicional de dados.

## Medição futura — proposta, sem implantação
Após aprovação de privacidade e escolha da solução, medir visitas totais, origem da visita quando disponível e cliques nos botões de conversa/WhatsApp; distinguir clique de conversa iniciada e de lead qualificado. Não inferir conversão real a partir dos cliques.

## Publicação
**Não realizar merge, deploy ou alteração do domínio de produção sem autorização expressa.**


## V5.2 — Lideranças multiplicadoras (15/10/2026)

Por escolha editorial explícita do proprietário, a seção de transformação passa a destacar a narrativa **“Uma equipe pode obedecer a um líder excepcional. Mas continuará preparada quando ele sair?”**. A versão anterior sobre registro de ronda por QR Code foi retirada do site (não permanece como exemplo destacado). O fechamento incorpora **“O uniforme identifica a empresa. A conduta revela sua doutrina.”**

A nova peça apresenta o multiplicador como líder que desenvolve compreensão da missão, discernimento, respeito às regras e capacidade de transmitir e acompanhar o padrão. A análise e validação de referências permanecem sob a governança da empresa. Não são prometidos resultados universais, nem vendidos módulos obrigatórios.

Arquivos desta alteração: `dist/index.html`, `dist/style.css` e este registro.

Observação: a fotografia de reunião operacional continua pendente; dados de prazo e experiência profissional não foram modificados. Publicação V5.2 explicitamente autorizada pelo proprietário, condicionada à checagem de commit e build.
