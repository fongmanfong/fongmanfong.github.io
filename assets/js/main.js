document.addEventListener('DOMContentLoaded', function () {

  // === QUEST LOG ACCORDION ===
  document.querySelectorAll('.quest-header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var entry = this.closest('.quest-entry');
      var isOpen = entry.classList.contains('open');

      // Close all entries
      document.querySelectorAll('.quest-entry').forEach(function (e) {
        e.classList.remove('open');
        var body = e.querySelector('.quest-body');
        if (body) body.hidden = true;
      });

      // Open the clicked entry if it was closed
      if (!isOpen) {
        entry.classList.add('open');
        var body = entry.querySelector('.quest-body');
        if (body) body.hidden = false;
      }
    });
  });

});
