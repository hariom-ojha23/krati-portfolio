var buttons = document.querySelectorAll('.toggler');
var sidebar = document.getElementById('sidebar');
var el = document.getElementById('content')


buttons.forEach(btn => {
    btn.addEventListener('click', _ => {
        sidebar.classList.toggle('collapsed');
        // if (sidebar.classList.contains('collapsed'))
        // {
        //     el.style.overflowY = 'auto'
        // } else {
        //     el.style.overflowY = 'hidden'
        // }
    })
});

// closing sidebar after clicking on any navitem

var navItems = document.querySelectorAll('.nav-item');
navItems.forEach(btn => {
    btn.addEventListener('click', e => {
        sidebar.classList.toggle('collapsed');
        // if (sidebar.classList.contains('collapsed'))
        // {
        //     el.style.overflowY = 'auto'
        // } else {
        //     el.style.overflowY = 'hidden'
        // }
    })
});

// changing color of navbar on scrolling

$(document).on('scroll', e => {
    var height = document.getElementById('nav').offsetHeight;
    if ($(document).scrollTop() >= height) {
        $('#nav').addClass('scroll');
    } else {
        $('#nav').removeClass('scroll');
    }
});