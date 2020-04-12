function openMenu() {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('menu-gamburger').classList.toggle('active');
  document.getElementById('line').style.background = '#000';
  document.querySelectorAll('span.line').classList.toggle('bgc');
}