function applyScrollScale(selector) {
  const items = document.querySelectorAll(selector);

  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
    const maxDistance = windowHeight / 2;

    let scale = 1.2 - (distanceFromCenter / maxDistance) * 0.4;
    scale = Math.max(0.8, Math.min(1.2, scale));

    let opacity = 1 - (distanceFromCenter / maxDistance) * 0.7;
    opacity = Math.max(0.3, Math.min(1, opacity));

    item.style.transform = `scale(${scale})`;
    item.style.opacity = opacity;    
  });
}

window.addEventListener('scroll', () => {
  applyScrollScale('.elements-set');
  applyScrollScale('.project');
});

