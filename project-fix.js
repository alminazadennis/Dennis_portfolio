window.projectGridFix = document.querySelector('.project-grid');
window.featuredProjectFix = document.querySelector('.project.p-one');

if (window.projectGridFix && window.featuredProjectFix) {
  const oldPlaceholder = window.projectGridFix.querySelector('.project.p-two');
  if (oldPlaceholder) oldPlaceholder.remove();

  window.projectGridFix.querySelectorAll('.project-copy').forEach((copy) => {
    if (copy.textContent.includes('GINHAWA')) copy.remove();
  });

  if (!window.projectGridFix.querySelector('.project.p-two')) {
    window.projectGridFix.insertAdjacentHTML('beforeend', '<a href="https://zenflow-coral.vercel.app/" target="_blank" rel="noopener noreferrer" class="project p-two"><div class="project-art art-two"><div class="art-label">GINHAWA <span>2025</span></div><div class="object-card">TO<br><em>BREATHE</em><br>TO HEAL</div><span class="object-caption">SPA & WELLNESS SANCTUARY ↗</span></div></a><div class="project-copy"><strong>Ginhawa — Spa & Wellness Sanctuary</strong><span>Web platform · Live project</span><p>A calm, nature-inspired booking experience for a spa and wellness sanctuary in Iloilo City.</p></div>');
  }

  window.projectGridFix.querySelectorAll('.project-copy').forEach((copy, index, copies) => {
    if (copy.textContent.includes('Ginhawa') && index < copies.length - 1) copy.remove();
  });
}
