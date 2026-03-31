
    // Cursor
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    function animRing() {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    }
    animRing();
    document.querySelectorAll('a,button,.project-card,.skill-card').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.width='56px'; ring.style.height='56px'; dot.style.transform='translate(-50%,-50%) scale(1.6)'; });
      el.addEventListener('mouseleave', () => { ring.style.width='36px'; ring.style.height='36px'; dot.style.transform='translate(-50%,-50%) scale(1)'; });
    });

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
 