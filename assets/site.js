(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const email = String(window.LUDVER_SITE?.enquiryAddress || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
  const subject = String(window.LUDVER_SITE?.enquirySubject || '[LUDVER] Custom Packaging Inquiry');
  document.querySelectorAll('[data-enquiry]').forEach(item => {
    item.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
    item.target = '_blank';
    item.rel = 'noopener noreferrer';
  });
})();
