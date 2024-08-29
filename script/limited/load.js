document.addEventListener("DOMContentLoaded", function() {
  fetch('/../comm/limited/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('foot').innerHTML = data;
      });
});


document.addEventListener("DOMContentLoaded", function() {
  fetch('/../comm/limited/header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('head').innerHTML = data;
          const hamburger = document.querySelector('.hamburger');
          hamburger.addEventListener("click",function(){
            this.classList.toggle("close");
        })
      });
});

