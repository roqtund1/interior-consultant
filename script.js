// navBtn
const navBtn = document.querySelector('.nav-btn');
// closeBtn
const closeBtn = document.querySelector('.close-btn');

// sidebar
const sidebar = document.querySelector('.sidebar');

navBtn.addEventListener('click', ()=> {
    sidebar.classList.toggle('show-sidebar')

})

closeBtn.addEventListener('click', ()=> {
    sidebar.classList.toggle('show-sidebar')

})

