(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const email = String(window.LUDVER_SITE?.enquiryAddress || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
  document.querySelectorAll('[data-enquiry], [data-service]').forEach(item => {
    item.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(item.dataset.service ? `Ludver enquiry — ${item.dataset.service}` : 'Ludver project enquiry')}`;
    item.target = '_blank';
    item.rel = 'noopener noreferrer';
  });
})();
