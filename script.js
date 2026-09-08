document.querySelectorAll('.view-btn').forEach(button => {
  button.addEventListener('click', () => {
    const codeBox = document.getElementById(button.dataset.target);
    const isHidden = codeBox.classList.contains('hidden');

    document.querySelectorAll('.code-box').forEach(box => box.classList.add('hidden'));
    document.querySelectorAll('.view-btn').forEach(btn => btn.textContent = 'View Programs');

    if (isHidden) {
      codeBox.classList.remove('hidden');
      button.textContent = 'Hide Programs';
      codeBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});

document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const code = document.getElementById(button.dataset.copy).innerText;

    try {
      await navigator.clipboard.writeText(code);
      const original = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => button.textContent = original, 1500);
    } catch (error) {
      button.textContent = 'Copy Failed';
      setTimeout(() => button.textContent = 'Copy Code', 1500);
    }
  });
});
