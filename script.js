const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');

menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\n${data.get('message')}`
  );
  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
});
const featuredProject = document.querySelector('.project.p-one');
featuredProject.href = 'https://github.com/alminazadennis/AwesomeTodos1';
featuredProject.target = '_blank';
featuredProject.rel = 'noopener noreferrer';
featuredProject.querySelector('.art-label').innerHTML = 'AWESOMETODOS1 <span>2025</span>';
featuredProject.querySelector('.art-headline').innerHTML = 'Organize your<br><em>day better.</em>';
featuredProject.querySelector('.art-button').textContent = 'VIEW ON GITHUB ↗';
featuredProject.querySelector('.project-info > span').textContent = '01 / WEB APP';
featuredProject.querySelector('.project-info h3').innerHTML = 'AwesomeTodos1 — Simple task management <b>↗</b>';
const workHeading = document.querySelector('.work h2');
workHeading.innerHTML = 'A few things I’ve<br><em>been working on.</em>';
document.querySelector('.work .section-title-row > .view-all').outerHTML = '<p class="work-intro">A selection of collaborative and personal work.<br>Good ideas grow better together.</p>';
const secondProject = document.querySelector('.project.p-two');
secondProject.querySelector('.art-label').innerHTML = 'GINHAWA <span>2025</span>';
secondProject.querySelector('.project-info > span').textContent = '02 / WEB PLATFORM · IN PROGRESS';
secondProject.querySelector('.project-info h3').innerHTML = 'GINHAWA Spa & Wellness <b>↗</b>';
secondProject.insertAdjacentHTML('afterend', '<div class="project-copy"><strong>GINHAWA Spa & Wellness</strong><span>Web platform · In progress</span><p>A calm, nature-inspired booking experience for a spa and wellness sanctuary in Iloilo City.</p></div>');
featuredProject.insertAdjacentHTML('afterend', '<div class="project-copy"><strong>Awesome Todos</strong><span>Web app · Live project</span><p>A warm, minimal to-do app for adding, editing, and organizing daily tasks.</p></div>');
document.querySelector('.project.p-three').style.display = 'none';
secondProject.style.display = 'none';
secondProject.nextElementSibling.style.display = 'none';
featuredProject.href = 'https://github.com/alminazadennis/AwesomeTodos';
featuredProject.querySelector('.art-label').innerHTML = 'AWESOME TODOS <span>2025</span>';
featuredProject.querySelector('.project-info h3').innerHTML = 'Awesome Todos — Task management app <b>↗</b>';
document.querySelectorAll('.project.p-two, .project-copy').forEach((element) => {
  if (element !== featuredProject.nextElementSibling) element.style.display = 'none';
});
document.querySelector('.project.p-two')?.remove();
document.querySelectorAll('.project-copy').forEach((element) => {
  if (element.textContent.includes('GINHAWA')) element.remove();
});
featuredProject.href = 'https://awesometodos1.vercel.app/';
featuredProject.querySelector('.art-button').textContent = 'OPEN LIVE PROJECT ↗';
featuredProject.querySelector('.project-art').innerHTML = '<div class="todo-preview"><h3>Awesome Todos</h3><div class="todo-form"><span>Enter a new todo...</span><b>Create</b></div><div class="todo-row">This is my first todo <i>□</i><i>⌫</i></div><div class="todo-row">This my second to do <i>□</i><i>⌫</i></div><div class="todo-row">This is my third to do <i>□</i><i>⌫</i></div></div>';
const projectGrid = document.querySelector('.project-grid');
if (projectGrid && !projectGrid.querySelector('.project.p-two')) {
  projectGrid.insertAdjacentHTML('beforeend', '<a href="https://zenflow-coral.vercel.app/" target="_blank" rel="noopener noreferrer" class="project p-two"><div class="project-art art-two"><div class="art-label">GINHAWA <span>2025</span></div><div class="object-card">TO<br><em>BREATHE</em><br>TO HEAL</div><span class="object-caption">SPA & WELLNESS SANCTUARY ↗</span></div></a><div class="project-copy"><strong>Ginhawa — Spa & Wellness Sanctuary</strong><span>Web platform · Live project</span><p>A calm, nature-inspired booking experience for a spa and wellness sanctuary in Iloilo City.</p></div>');
}
setTimeout(() => {
  const grid = document.querySelector('.project-grid');
  if (!grid || grid.querySelector('.project.p-two')) return;
  grid.insertAdjacentHTML('beforeend', '<a href="https://zenflow-coral.vercel.app/" target="_blank" rel="noopener noreferrer" class="project p-two"><div class="project-art art-two"><div class="art-label">GINHAWA <span>2025</span></div><div class="object-card">TO<br><em>BREATHE</em><br>TO HEAL</div><span class="object-caption">SPA & WELLNESS SANCTUARY ↗</span></div></a><div class="project-copy"><strong>Ginhawa — Spa & Wellness Sanctuary</strong><span>Web platform · Live project</span><p>A calm, nature-inspired booking experience for a spa and wellness sanctuary in Iloilo City.</p></div>');
}, 0);
