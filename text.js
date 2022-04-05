const mobileMenu = document.getElementById('mobileMenu');
const openBtn = document.getElementById('barsBtn');
const closeBtn = document.getElementById('closeBtn');
const link = document.querySelectorAll('.link');
function openModal() {
  mobileMenu.style.display = 'block';
}
function closeModal() {
  mobileMenu.style.display = 'none';
}
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
link.forEach((link) => {
  link.addEventListener('click', closeModal);
});
