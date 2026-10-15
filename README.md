# ATIV Treinamentos — V5.1 (revisão, sem publicação)

**Produção atual:** V5, publicada mediante autorização do proprietário em 15/10/2026.  
**Branch de consolidação:** `os/v5.1-consolidacao`. Não realizar merge nem deploy sem nova autorização.

A V5 preserva a abertura centralizada e a navegação por blocos (problema, transformação, frentes, método, Caderno, condução, FAQ e conversa), em verde profundo e ouro. A V5.1 prepara melhorias pontuais: conexão entre headline e problema, exemplo ilustrativo da diferença entre registro e inspeção, reforço da missão humana, imagem Open Graph do Caderno e ajuste da CSP para permitir as fontes Inter/Manrope do Google Fonts.

**Pendências de revisão:** confirmação do prazo pontual aproximado de um mês; confirmação do tempo de experiência do instrutor; testes visuais finais em navegador. A imagem de reunião operacional foi incorporada na V5.3 como ilustração original aprovada pelo proprietário. O fato de a folha de estilos estar autorizada na CSP não prova que as fontes carregaram no navegador: a verificação deve ser feita em preview/produção com Network e Console.

**Escopo comercial:** doutrina organizacional personalizada; partes e materiais dependem da proposta. Não há clientes/cases divulgáveis, certificações do programa, resultados garantidos ou pacote de contratação obrigatório. A capacitação é complementar, não substitui formação/reciclagem regulamentadas.

## Arquitetura e arquivos
- `dist/`: conteúdo-fonte editável; o HTML local contém `noindex`.
- `scripts/build-vercel.mjs`: gera `public-site/` e somente libera indexação quando `VERCEL_ENV=production`.
- `vercel.json`: build, redirecionamentos e cabeçalhos de segurança; Google Fonts estritamente autorizadas em `style-src` e `font-src`.
- `dist/assets/reuniao-operacional.webp`: imagem ilustrativa original aprovada e integrada ao fundo do painel visual da seção **O problema**, com enquadramento desktop/mobile e legenda discreta.
- `OS_V5_1_STATUS.md`: verificações e pendências da versão.

### Verificação técnica recomendada
Executar `npm run check` e `npm run build`, verificar também a variante `VERCEL_ENV=production npm run build` em ambiente isolado e inspecionar os cabeçalhos reais do deployment. Os comandos não substituem testes visuais e funcionais em navegador (320, 360, 390, 768, 1024, 1366 e 1440px).

---

## Histórico — documentação da V4

Atualização do V3 com o Programa de Doutrina Operacional como oferta única para empresas de segurança privada. Mantém o visual, as seções, a fotografia e o caderno personalizado.

## Posicionamento

Treinamento, desenvolvimento de lideranças operacionais, Comitê de Doutrina, integração de novos profissionais e Evolução Profissional Permanente são frentes conectadas do mesmo programa. A Formação Ethos atravessa o trabalho como fundamento humano. A proposta personaliza a execução, a duração, a frequência e as entregas para cada empresa.

O programa parte das referências que a empresa já utiliza. As lideranças desenvolvem a capacidade de compreender as necessidades dos clientes e orientar suas equipes. A preparação específica de cada contrato é conduzida pela empresa de segurança, com suas próprias lideranças.

## O que mudou

- Abertura e chamadas apresentam diretamente a Doutrina Operacional.
- Os dois blocos de entregas mostram partes complementares do programa, sem ofertas separadas.
- FAQ, rodapés e mensagens do WhatsApp seguem o mesmo posicionamento.
- O seletor de contato pergunta pelo desafio da empresa, não pelo serviço a contratar.
- O artigo de escolha entre treinamento e doutrina foi substituído por uma explicação da solução integrada.
- Os dados estruturados da página principal apresentam um único serviço.
- A metodologia interna permanece reservada em todo o conteúdo distribuído.

## Estrutura e uso no Cursor

- `dist/`: fonte editável e completa do site, com HTML, CSS, JavaScript e imagens. Tem proteção `noindex` para revisão.
- `scripts/build-vercel.mjs`: copia `dist/` para `public-site/` e libera indexação somente quando `VERCEL_ENV=production`.
- `public-site/`: saída gerada; não editar diretamente. A cópia entregue é de revisão.
- `vercel.json`: configuração estática, cabeçalhos e redirecionamentos. Mesclar com regras existentes quando necessário.
- `INSTRUCAO_CURSOR.txt`: instrução para integrar os arquivos ao projeto atual.

Use os arquivos de `dist/` como fonte. Se o projeto existente utiliza outro framework, o Cursor deve adaptar esses arquivos à sua estrutura, mantendo os textos, as imagens, o comportamento e os metadados. Os arquivos binários das imagens acompanham o ZIP; o TXT de código não substitui as imagens.

## Execução local

Não há dependências de aplicação a instalar. Use Node.js 20 ou superior.

```sh
npm run check
npm run build
python3 -m http.server 8080 --directory public-site
```

Abra http://localhost:8080/. Use um servidor local: as rotas de conteúdo utilizam caminhos a partir da raiz do site.

`npm run build` cria uma revisão com `noindex`. O build em contexto de produção da Vercel libera a indexação. A página 404 permanece com `noindex` em qualquer contexto.

## Integração com a Vercel existente

A configuração fornecida utiliza Framework Other, comando `node scripts/build-vercel.mjs` e Output Directory `public-site`. Para outros frameworks, adapte às regras do projeto. Preserve o projeto e o domínio existentes; não substitua o repositório do SaaS e não altere DNS sem necessidade.

A rota `/conteudos/treinamento-ou-doutrina/` redireciona permanentemente para `/conteudos/doutrina-operacional/`. Os links internos e o sitemap já apontam para a nova rota. O redirecionamento é aplicado pela hospedagem; um servidor HTTP local simples não interpreta `vercel.json`.

## Busca, privacidade e medição

Canonical e sitemap utilizam https://treinamentos.ativbrasil.com.br/. Depois da publicação, é necessário verificar HTTPS, status HTTP, redirecionamentos, cabeçalhos, robots, canonical e sitemap no domínio. A verificação e a indexação no Google Search Console dependem do proprietário da conta e da publicação.

Esta versão não ativa Analytics nem envia eventos ou mensagens automaticamente. A página de privacidade descreve esse funcionamento. Uma integração de métricas futura precisa atualizar a privacidade e a política de segurança conforme o provedor escolhido.

## Conteúdo e imagens

O caderno e os exemplos são ilustrativos. A capa contém espaços identificados para o logo e o nome da empresa, com assinatura menor da ATIV. Não há clientes, depoimentos, estatísticas ou resultados inventados. Não há promessa de preparação individual de todos os postos pela ATIV. A abrangência e a logística são acordadas na proposta.

## Validação

O resultado das verificações desta entrega está em `VALIDACAO_V4.md`. Preparação técnica e revisão local não equivalem a métricas de conversão, indexação confirmada, indicação por IA ou auditoria de segurança da hospedagem.
