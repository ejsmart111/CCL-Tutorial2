function toggleMode() {
  var body = document.body;
  var sunIcon=document.getElementById('fa-sun')
  var moonIcon=document.getElementById('fa-moon')
  body.classList.toggle("dark-mode");
  sunIcon.classList.toggle('fa-sun-o')
  moonIcon.classList.toggle('fa-moon-show')
}