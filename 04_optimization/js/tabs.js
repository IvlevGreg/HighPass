document.querySelectorAll('.work-list__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;


  document.querySelectorAll('.work-list__btn').forEach(function(btn){
btn.classList.remove('work-list__btn--active')});
  e.currentTarget.classList.add('work-list__btn--active');

  document.querySelectorAll('.step').forEach(function(tabsBtn){
tabsBtn.classList.remove('step--active')});

document.querySelector(`[data-target="${path}"]`).classList.add('step--active');
  });
});
