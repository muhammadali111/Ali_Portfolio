document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', () => topBtn.classList.toggle('show', window.scrollY > 400));
  topBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

  document.querySelectorAll('.navbar-nav a').forEach(link => link.addEventListener('click', () => {
    const nav = document.getElementById('nav');
    if (nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  }));

  // Demo only: connect this form to a backend or form service to receive real messages.
  document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    document.getElementById('formMessage').textContent =
      `Thanks, ${name}! This demo form is ready to connect to an email service.`;
    event.target.reset();
  });
});
