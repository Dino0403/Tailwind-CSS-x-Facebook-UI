import "./index.css";

const btn = document.getElementById('bth')
const content = document.getElementById('text')
const box = document.getElementById('box')

btn.addEventListener('click', function () {
  content.classList.remove('text-fb')

  box.innerHTML = '<p class="text-fb">test</p>'
})