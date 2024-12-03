var text = document.querySelector(".text");
var role = ["Web Developer","Web Designer", "YouTuber"];

i = 0
j = 0
setInterval(() => {
  text.textContent += role[i][j];
  j++;
  if (text.textContent == role[i]) {
    setTimeout(() => {
      text.textContent = "";
      i++;
      j = 0;
      if (i == role.length) {
        i = 0;
      }
    }, 150)
  }
}, 300)

var year = new Date().getFullYear();
document.getElementById('year').textContent = year;