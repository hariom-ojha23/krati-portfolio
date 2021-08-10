const buttons = document.querySelectorAll('.toggler');
const sidebar = document.getElementById('sidebar');
const el = document.getElementById('content')


buttons.forEach(btn => 
    btn.addEventListener('click', _ => {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed'))
        {
            el.style.overflowY = 'auto'
        } else {
            el.style.overflowY = 'hidden'
        }
    })
);

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(btn => 
    btn.addEventListener('click', e => {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed'))
        {
            el.style.overflowY = 'auto'
        } else {
            el.style.overflowY = 'hidden'
        }
    })
);

