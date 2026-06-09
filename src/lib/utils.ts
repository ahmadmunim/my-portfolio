export function handleNavClick(e: MouseEvent, href: string) {
  e.preventDefault();
  if (href.startsWith('#')) {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.open(href, '_blank');
  }
}

export function createObserver(
  el: HTMLElement,
  onVisible: () => void,
  threshold = 0.05
) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        onVisible();
        observer.disconnect();
      }
    },
    { threshold }
  );
  observer.observe(el);
}