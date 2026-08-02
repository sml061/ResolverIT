const btn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

// Evento de clique para alternar a classe 'ativo'
btn.addEventListener('click', () => {
  sidebar.classList.toggle('ativo');
});
