document.addEventListener('DOMContentLoaded', function () {

  // === MAP TOWN DIALOG ===
  var dialog = document.getElementById('town-dialog');
  var towns = document.querySelectorAll('.town');

  towns.forEach(function (town) {
    town.addEventListener('click', function () {
      dialog.querySelector('.dialog-company').textContent = this.dataset.company;
      dialog.querySelector('.dialog-job-title').textContent = this.dataset.title;
      dialog.querySelector('.dialog-period').textContent = this.dataset.period;
      dialog.querySelector('.dialog-desc').textContent = this.dataset.desc;
      dialog.style.display = 'block';
      dialog.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  var closeBtn = document.getElementById('dialog-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      dialog.style.display = 'none';
    });
  }

});
