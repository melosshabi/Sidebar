const sidebarBtn = document.querySelector('.sidebar-btn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('#close-btn');

sidebarBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
});
closeBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
})