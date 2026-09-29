# Validação da V4 — 29/09/2026

## Concluído

- Sintaxe JavaScript verificada com `npm run check`.
- Build de revisão e build de produção executados com sucesso.
- Seis páginas HTML verificadas: principal, índice de conteúdos, dois artigos, privacidade e 404.
- Links internos, âncoras, imagens e arquivos referenciados encontrados.
- Um H1 por página, identificadores sem duplicação e linguagem pt-BR.
- Descrições, canonical, Open Graph, Twitter e dados estruturados conferidos entre si.
- Um único serviço nos dados estruturados da página principal: Programa de Doutrina Operacional.
- Cinco URLs no sitemap, correspondentes às páginas com canonical.
- `noindex` e robots restritivos na revisão; indexação permitida no build de produção; página 404 sempre com `noindex`.
- As opções de contato descrevem desafios da empresa e todas as mensagens do WhatsApp se referem ao mesmo programa.
- Os dois blocos de entregas descrevem partes complementares da solução; ambos encaminham ao mesmo contato.
- FAQ e artigos alinhados ao programa integrado, com treinamento, lideranças, Comitê de Doutrina, integração e evolução permanente.
- Caderno, fotografia e logo preservados byte a byte em relação ao V3. A regra CSS que mostra a capa inteira foi mantida.
- Rota do antigo artigo substituída nos links internos e no sitemap; redirecionamento permanente configurado em `vercel.json`.
- Conteúdo público conferido para não expor os nomes ou os instrumentos internos da metodologia e não apresentar a AL2 como caso de sucesso.

## Pendente no projeto do Cursor

A conferência visual e os testes de interação em navegador não foram concluídos: o ambiente não disponibilizou um navegador local utilizável e o navegador remoto bloqueou o acesso à prévia local. Não houve medição de Lighthouse ou validação visual em dispositivos reais.

Depois da integração, conferir a página em computador e celular, especialmente a nova abertura, as duas frentes de entrega, o menu, a leitura da capa, a FAQ e as mensagens do WhatsApp. Testar teclado, ampliação do texto e ausência de rolagem horizontal.

## Depois da publicação

Confirmar redirecionamentos e cabeçalhos na hospedagem real, status HTTP, HTTPS, robots, canonical e sitemap. A indexação, as métricas de audiência, a conversão e a descoberta por IA não foram confirmadas nesta entrega de código.

Nenhum commit, push, deploy ou alteração de domínio foi realizado.
