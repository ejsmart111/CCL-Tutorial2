function toggleMode() {
  var body = document.body;
  var sunIcon=document.getElementById('fa-sun')
  var moonIcon=document.getElementById('fa-moon')
  body.classList.toggle("dark-mode");
  if(body.classList.toggle){

    moonIcon.classList.toggle('fa-moon-hide')
    sunIcon.classList.toggle('fa-sun-show')
  }
}