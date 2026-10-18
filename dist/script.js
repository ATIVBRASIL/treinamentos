'use strict';
const toggle=document.getElementById('menu-toggle');
const menu=document.getElementById('menu');
function closeMenu(restoreFocus=false){if(!menu||!toggle)return;menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');if(restoreFocus)toggle.focus();}
if(toggle&&menu){
 toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open'))closeMenu(true);});
 document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!toggle.contains(e.target))closeMenu();});
 window.matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
}
const assessment=document.getElementById('assessment');
const assessmentResult=document.getElementById('assessment-result');
const assessmentConfig=window.ATIV_ASSESSMENT;
const answers={};
let step=0;
function questionAt(index){return assessmentConfig.questions[index];}
function renderStep(){
  const question=questionAt(step);
  const legend=document.getElementById('assessment-legend');
  const options=document.getElementById('assessment-options');
  const progress=document.getElementById('assessment-progress');
  const next=document.getElementById('assessment-next');
  const prev=document.getElementById('assessment-prev');
  legend.textContent=question.question;
  progress.textContent=(step+1)+' de 4';
  document.querySelectorAll('.assessment-segments span').forEach((item,index)=>{item.classList.toggle('is-complete',index<=step);});
  options.replaceChildren();
  question.options.forEach(option=>{
    const id='assessment-'+question.id+'-'+option.code;
    const label=document.createElement('label');
    const input=document.createElement('input');
    input.type='radio';
    input.name='assessment-answer';
    input.value=option.code;
    input.id=id;
    input.checked=answers[question.id]===option.code;
    const span=document.createElement('span');
    span.textContent=option.text;
    label.append(input,span);
    options.append(label);
  });
  prev.hidden=step===0;
  next.disabled=!answers[question.id];
  next.textContent=step===3?'Ver minha síntese':'Próxima pergunta';
  document.getElementById('assessment-hint').hidden=true;
  legend.focus();
}
function selectedCode(){const input=document.querySelector('#assessment-options input:checked');return input?input.value:'';}
function showSummary(){
  const summary=buildAssessmentSummary(answers,assessmentConfig);
  document.getElementById('assessment-general').textContent=summary.general;
  const list=document.getElementById('assessment-observations');
  list.replaceChildren();
  summary.observations.forEach(item=>{
    const line=document.createElement('li');
    const title=document.createElement('strong');
    title.textContent=item.axis+' — '+item.category;
    const text=document.createElement('span');
    text.textContent=item.feedback;
    line.append(title,text);
    list.append(line);
  });
  document.getElementById('assessment-focus').textContent=summary.focus.axis+': '+summary.focus.lnt_question;
  const lines=['Olá, ATIV. Fiz o Autodiagnóstico Inicial de Continuidade Operacional e gostaria de conversar sobre minhas respostas.','','Respostas declaradas:'];
  summary.observations.forEach(item=>lines.push(item.axis+' — '+item.text));
  lines.push('','Tema para aprofundar: '+summary.focus.axis+'.','','Se fizer sentido, gostaria de saber como funciona a conversa inicial.');
  const share=document.getElementById('assessment-share');
  share.href='https://wa.me/5519974010028?text='+encodeURIComponent(lines.join('\n'));
  assessment.hidden=true;
  assessmentResult.hidden=false;
  assessmentResult.querySelector('h3').focus();
}
const start=document.getElementById('assessment-start');
if(start&&assessment&&assessmentConfig){
  start.addEventListener('click',()=>{assessment.hidden=false;assessmentResult.hidden=true;step=0;renderStep();assessment.scrollIntoView({block:'start'});});
  document.getElementById('assessment-options').addEventListener('change',()=>{document.getElementById('assessment-next').disabled=false;document.getElementById('assessment-hint').hidden=true;});
  document.getElementById('assessment-prev').addEventListener('click',()=>{if(step>0){step-=1;renderStep();}});
  document.getElementById('assessment-next').addEventListener('click',()=>{
    const code=selectedCode();
    if(!code){document.getElementById('assessment-hint').hidden=false;return;}
    answers[questionAt(step).id]=code;
    if(step<3){step+=1;renderStep();}else showSummary();
  });
  document.getElementById('assessment-reset').addEventListener('click',()=>{Object.keys(answers).forEach(key=>delete answers[key]);step=0;assessmentResult.hidden=true;assessment.hidden=false;renderStep();});
  document.getElementById('assessment-copy').addEventListener('click',async()=>{
    const summary=buildAssessmentSummary(answers,assessmentConfig);
    const text=[summary.general,''].concat(summary.observations.map(item=>item.axis+' — '+item.category+'\n'+item.feedback)).concat(['','Pergunta para aprofundar','',summary.focus.axis+': '+summary.focus.lnt_question,'','Esta síntese é uma reflexão preliminar baseada nas suas respostas, não uma auditoria, certificação ou substituição do LNT.']).join('\n');
    const status=document.getElementById('assessment-copy-status');
    try{await navigator.clipboard.writeText(text);status.textContent='Síntese copiada. Você pode colar onde quiser.';}
    catch{status.textContent='Não foi possível copiar automaticamente. Selecione o texto da síntese e copie manualmente.';}
  });
}
const floating=document.querySelector('.mobile-contact');
const contactSection=document.getElementById('contato');
const heroActions=document.querySelector('#inicio .actions');
if(floating&&'IntersectionObserver' in window){
 if(heroActions){new IntersectionObserver(entries=>{floating.classList.toggle('hero-visible',entries[0].isIntersecting);},{threshold:0}).observe(heroActions);}
 if(contactSection){new IntersectionObserver(entries=>{floating.classList.toggle('hidden',entries[0].isIntersecting);},{threshold:0}).observe(contactSection);}
}
