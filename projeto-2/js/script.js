AOS.init();
document.querySelector('.search-bar').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    const searchQuery = event.target.search.value.trim();
    if (searchQuery) {
      alert(`Você pesquisou por: ${searchQuery}`);
    } else {
      alert('Por favor, insira algo para pesquisar.');
    }
  });
  
  document.querySelector('.filtro-produtos select').addEventListener('change', (event) => {
    const filterOption = event.target.value;
    alert(`Você selecionou o filtro: ${filterOption}`);
  });
  document.querySelectorAll('.btn-carrinho').forEach((button) => {
    button.addEventListener('click', () => {
      const modal = new bootstrap.Modal(document.getElementById('productModal'));
      modal.show();
    });
  });
  