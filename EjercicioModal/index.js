   function openModal() {
      document.getElementById('modalOverlay').classList.add('active');
    }
    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('active');
    }
    function confirmAction() {
      alert('¡Bienvenido al lado del éxito!');
      closeModal();
    }