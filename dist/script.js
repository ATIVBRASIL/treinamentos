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
const topic=document.getElementById('contact-topic');
const contact=document.getElementById('contact-whatsapp');
const messages={"doutrina":"Olá, quero conhecer o Programa de Doutrina Operacional da ATIV para a minha empresa.","padrao":"Olá, quero conhecer o Programa de Doutrina Operacional da ATIV. Temos orientações diferentes e desvios recorrentes na nossa operação.","lideranca":"Olá, quero conhecer o Programa de Doutrina Operacional da ATIV, com atenção ao desenvolvimento das lideranças operacionais da minha empresa.","integracao":"Olá, quero conhecer o Programa de Doutrina Operacional da ATIV, com atenção à integração de novos profissionais na minha empresa.","conversa":"Olá, quero conversar sobre o Programa de Doutrina Operacional da ATIV e explicar a realidade da minha empresa."};
function updateContact(){if(topic&&contact)contact.href='https://wa.me/5519974010028?text='+encodeURIComponent(messages[topic.value]||messages.conversa);}
if(topic){topic.addEventListener('change',updateContact);updateContact();}
document.querySelectorAll('[data-interest]').forEach(link=>link.addEventListener('click',()=>{if(topic){topic.value=link.dataset.interest;updateContact();}}));
const floating=document.querySelector('.mobile-contact');
const contactSection=document.getElementById('contato');
if(floating&&contactSection&&'IntersectionObserver' in window){new IntersectionObserver(entries=>{floating.classList.toggle('hidden',entries[0].isIntersecting);},{threshold:0}).observe(contactSection);}
