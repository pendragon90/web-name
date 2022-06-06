var logobar = document.querySelector('#logo');
var sidebar = document.querySelector('#sidenav');
var close = document.querySelector('#close');

logobar.addEventListener('click', function(){
    sidebar.classList.add('active');
});

close.addEventListener('click', function() {
    sidebar.classList.remove('active');
});