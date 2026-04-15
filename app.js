document.querySelectorAll('[data-tab-group]').forEach(group => {
  const buttons = group.querySelectorAll('.tab-btn');
  const panels = group.parentElement.querySelectorAll('.tab-panel');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = group.parentElement.querySelector(`#${btn.dataset.target}`);
      if (target) target.classList.add('active');
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.animate([
        {opacity:0, transform:'translateY(18px)'},
        {opacity:1, transform:'translateY(0)'}
      ], {duration:550, fill:'forwards', easing:'ease-out'});
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.card,.timeline-item,.feature,.stat,.quote,.source-card,.panel').forEach(el=>{
  el.style.opacity = 0;
  observer.observe(el);
});
