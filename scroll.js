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





function handleScrollForElements(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

    if (isVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}



window.addEventListener('scroll', () => {
  handleScrollForElements('.abt-bg');
  handleScrollForElements('.me');
  handleScrollForElements('.elements-set');
  handleScrollForElements('.skill');
  handleScrollForElements('.hire');
  handleScrollForElements('.project');
});

window.addEventListener('load', () => {
  handleScrollForElements('.me');
  handleScrollForElements('.abt-bg');
  handleScrollForElements('.elements-set');
  handleScrollForElements('.skill');
  handleScrollForElements('.project');
  handleScrollForElements('.hire');
});