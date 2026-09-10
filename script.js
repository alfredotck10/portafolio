  document.querySelectorAll('.nav-links a[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sec = link.getAttribute('data-section');
      const target = document.getElementById(sec);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const modal = document.getElementById('modal');
  const closeModalBtn = document.querySelector('.close-modal');
  document.querySelectorAll('.dashboard-placeholder').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  });
  closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
