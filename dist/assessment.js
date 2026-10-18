(function (root) {
  'use strict';
  const optionCategory = {
    A: 'Prática relatada como estruturada',
    B: 'Prática parcialmente estruturada',
    C: 'Dependência ou informalidade relatada',
    D: 'Informação a esclarecer'
  };
  const microcopy = {
    has_B_or_C: 'Suas respostas apontam práticas que merecem ser aprofundadas para compreender como o conhecimento circula na empresa.',
    has_D_only_or_mixed_A_D: 'Algumas informações ainda precisam ser esclarecidas com a gestão e as lideranças.',
    all_A: 'Você relata práticas estruturadas nas quatro frentes. Uma avaliação posterior poderá examinar sua consistência e aplicação.'
  };
  const questions = [
    { id: 'Q1', axis: 'Conhecimento institucional', question: 'Quando um supervisor experiente se ausenta, como seu conhecimento continua acessível à equipe?', lnt_question: 'Quando uma liderança experiente não está presente, quais referências a equipe consegue consultar e aplicar sem depender dela?', options: [
      { code: 'A', text: 'Existem referências compartilhadas e utilizadas por outros líderes.', feedback: 'Você relata referências compartilhadas. Vale verificar como são utilizadas por diferentes lideranças.' },
      { code: 'B', text: 'Há documentos e orientações, mas parte do conhecimento depende de conversas.', feedback: 'Há uma base de conhecimento. Seria útil identificar quais orientações ainda dependem de conversas.' },
      { code: 'C', text: 'A transmissão depende principalmente da experiência de algumas pessoas.', feedback: 'Seu relato sugere concentração de conhecimento em algumas pessoas. Vale investigar quais atividades dependem mais delas.' },
      { code: 'D', text: 'Não tenho informações suficientes para avaliar.', feedback: 'Não há informação suficiente para avaliar esta frente. O primeiro passo seria ouvir as lideranças.' }
    ]},
    { id: 'Q2', axis: 'Lideranças multiplicadoras', question: 'Como seus líderes transmitem os critérios de atuação da empresa às equipes?', lnt_question: 'Como diferentes supervisores ensinam e verificam os critérios de atuação da prestadora?', options: [
      { code: 'A', text: 'Há referências comuns, orientação e acompanhamento da aplicação.', feedback: 'Você relata uma prática estruturada de transmissão pelas lideranças. Seria útil observar sua consistência nos diferentes postos.' },
      { code: 'B', text: 'Existe orientação, mas a forma de transmitir varia entre líderes.', feedback: 'A orientação já acontece, mas seu relato indica variações entre líderes que merecem compreensão.' },
      { code: 'C', text: 'Cada líder orienta principalmente com base na própria experiência.', feedback: 'A transmissão parece depender da experiência individual de cada líder. Vale compreender os critérios que todos compartilham.' },
      { code: 'D', text: 'Não tenho informações suficientes para avaliar.', feedback: 'A forma de transmissão não está clara para você. Uma conversa com os supervisores ajudaria a compreendê-la.' }
    ]},
    { id: 'Q3', axis: 'Transmissão aos postos', question: 'Quando um profissional assume um posto, como aprende a representar o padrão da sua empresa?', lnt_question: 'O que cada novo integrante aprende sobre a identidade da prestadora, além das instruções específicas do posto?', options: [
      { code: 'A', text: 'Recebe integração sobre a identidade e os critérios da empresa, além das orientações do posto.', feedback: 'Você relata uma integração que contempla o padrão institucional e as particularidades do posto. Vale verificar sua aplicação.' },
      { code: 'B', text: 'Há integração, mas ela enfatiza principalmente as rotinas do posto.', feedback: 'Há integração. Seria útil compreender quanto da identidade e dos critérios da prestadora é transmitido nela.' },
      { code: 'C', text: 'As orientações dependem bastante de quem recebe o profissional.', feedback: 'Seu relato indica que a integração pode variar conforme quem recebe o profissional. Vale investigar como preservar referências comuns.' },
      { code: 'D', text: 'Não tenho informações suficientes para avaliar.', feedback: 'Não há visibilidade suficiente sobre a integração. A empresa pode verificar como ocorre nos diferentes contratos.' }
    ]},
    { id: 'Q4', axis: 'Aprendizado e aperfeiçoamento', question: 'Quando um posto produz um aprendizado relevante, como isso chega à gestão e pode beneficiar outros postos?', lnt_question: 'Que caminho um aprendizado relevante percorre até a análise, a validação e a comunicação a outras equipes?', options: [
      { code: 'A', text: 'Existe um fluxo para encaminhar, analisar, validar e compartilhar aprendizados.', feedback: 'Você relata um processo de aprendizado organizacional. Vale verificar como as lições chegam às referências institucionais.' },
      { code: 'B', text: 'Os aprendizados circulam entre líderes, mas sem um fluxo definido.', feedback: 'Existe troca de experiências. O aprofundamento pode examinar como a gestão as analisa e valida.' },
      { code: 'C', text: 'Geralmente permanecem no posto ou com quem viveu a situação.', feedback: 'Seu relato sugere que parte dos aprendizados permanece local. Vale investigar como aproveitá-los institucionalmente.' },
      { code: 'D', text: 'Não tenho informações suficientes para avaliar.', feedback: 'O caminho dos aprendizados não está claro. Vale investigar como chegam à gestão e são aproveitados.' }
    ]}
  ];
  const config = { optionCategory, questions, questionOrder: ['Q1', 'Q2', 'Q3', 'Q4'], resultRules: { microcopy } };
  function buildAssessmentSummary(answers, source) {
    const data = source || config;
    const order = data.questionOrder;
    const observations = order.map(function (id) {
      const question = data.questions.find(function (item) { return item.id === id; });
      const code = answers[id];
      const option = question.options.find(function (item) { return item.code === code; });
      return { id: id, axis: question.axis, code: code, category: data.optionCategory[code], feedback: option.feedback, text: option.text };
    });
    const codes = observations.map(function (item) { return item.code; });
    let general = data.resultRules.microcopy.all_A;
    if (codes.some(function (code) { return code === 'B' || code === 'C'; })) general = data.resultRules.microcopy.has_B_or_C;
    else if (codes.some(function (code) { return code === 'D'; })) general = data.resultRules.microcopy.has_D_only_or_mixed_A_D;
    let focusId = null;
    ['C', 'B', 'D'].some(function (priority) {
      focusId = order.find(function (id) { return answers[id] === priority; }) || null;
      return Boolean(focusId);
    });
    if (!focusId) focusId = 'Q1';
    const focusQuestion = data.questions.find(function (item) { return item.id === focusId; });
    return { observations: observations, general: general, focus: { id: focusId, axis: focusQuestion.axis, lnt_question: focusQuestion.lnt_question } };
  }
  root.ATIV_ASSESSMENT = config;
  root.buildAssessmentSummary = buildAssessmentSummary;
})(typeof globalThis !== 'undefined' ? globalThis : this);
