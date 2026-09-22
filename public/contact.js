(function () {
      var modal = document.getElementById('payModal');
      var payNowBtn = document.getElementById('payNowBtn');
      var modalClose = document.getElementById('modalClose');
      var paneSelect = document.getElementById('paneSelect');
      var paneMpesa = document.getElementById('paneMpesa');
      var paneCard = document.getElementById('paneCard');
      var panes = [paneSelect, paneMpesa, paneCard];

      function showPane(pane) {
        panes.forEach(function (p) { p.hidden = (p !== pane); });
      }

      function openModal() {
        modal.hidden = false;
        showPane(paneSelect);
      }

      function closeModal() {
        modal.hidden = true;
      }

      payNowBtn.addEventListener('click', openModal);
      modalClose.addEventListener('click', closeModal);

      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
      });

      document.getElementById('selectMpesa').addEventListener('click', function () {
        showPane(paneMpesa);
      });

      document.getElementById('selectCard').addEventListener('click', function () {
        showPane(paneCard);
      });

      document.getElementById('cardUseMpesa').addEventListener('click', function () {
        showPane(paneMpesa);
      });

      document.querySelectorAll('[data-back]').forEach(function (btn) {
        btn.addEventListener('click', function () { showPane(paneSelect); });
      });

      var copyBtn = document.getElementById('copyBtn');
      var number = document.getElementById('mpesaNumber');
      copyBtn.addEventListener('click', function () {
        var text = number.textContent.trim();
        function done() {
          copyBtn.textContent = 'Copied!';
          setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1600);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done);
        } else {
          var ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          done();
        }
      });

      var mpesaName = document.getElementById('mpesaName');
      var mpesaCode = document.getElementById('mpesaCode');
      var sendMpesaWhatsapp = document.getElementById('sendMpesaWhatsapp');

      function updateSendState() {
        sendMpesaWhatsapp.disabled = !(mpesaName.value.trim() && mpesaCode.value.trim());
      }
      mpesaName.addEventListener('input', updateSendState);
      mpesaCode.addEventListener('input', updateSendState);

      sendMpesaWhatsapp.addEventListener('click', function () {
        var name = mpesaName.value.trim();
        var code = mpesaCode.value.trim();
        if (!name || !code) return;
        var message =
          'Hi Gedion, I have paid KES 2,000 ($15) via M-Pesa for a 1:1 consulting session.\n' +
          'M-Pesa name: ' + name + '\n' +
          'M-Pesa code: ' + code;
        window.open('https://wa.me/254707119392?text=' + encodeURIComponent(message), '_blank');
      });
    })();
