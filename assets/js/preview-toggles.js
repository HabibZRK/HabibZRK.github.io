(function(){
  function initToggle(selector){
    document.querySelectorAll(selector).forEach(function(btn){
      btn.addEventListener('click', function(){
        var id = btn.getAttribute('data-target');
        var box = document.getElementById(id);
        if(!box) return;
        var open = box.style.display !== 'none';
        box.style.display = open ? 'none' : 'block';
        btn.classList.toggle('is-active', !open);
        btn.querySelector('i')?.classList.toggle('fa-eye');
        btn.querySelector('i')?.classList.toggle('fa-eye-slash');
      });
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
    initToggle('.js-cert-preview-toggle');
    initToggle('.js-preview-toggle');
  });
})();
