// closing and opening sidebar

let buttons = document.querySelectorAll('.toggler');
let sidebar = document.getElementById('sidebar');
let el = document.getElementById('content')


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

let navItems = document.querySelectorAll('.nav-item');
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
    let height = document.getElementById('nav').offsetHeight;
    if ($(document).scrollTop() >= height) {
        $('#nav').addClass('scroll');
    } else {
        $('#nav').removeClass('scroll');
    }
});

// showing portfolio image on click

const imgURL = [
    'gallery1.png',
    'gallery2a.jpg',
    'gallery3a.png',
    'gallery4.jpg',
    'gallery5a.jpg',
    'gallery6a.jpg'
]

const imgClass = document.getElementsByClassName('p-img')
const imgArr = [...imgClass];

imgArr.forEach(el => {
    el.addEventListener('click', _ => {
        let index = el.getAttribute('alt') - 1;
        document.getElementById('modal-img').setAttribute(
            'src', `./images/${imgURL[index]}`
        );
        console.log(document.getElementById('modal-img'))
    })
});

// send message from form

const resetForm = () => {
    const name = document.getElementById('name').value = '';
    const email = document.getElementById('email').value = '';
    const subject = document.getElementById('subject').value = '';
    const message = document.getElementById('message').value = '';
}

const sendEmail = (name, email, subject, message) => {

    const msgParams = {
        name,
        email,
        subject,
        message
    };

    emailjs.send('service_6mh7gpi', 'template_7kly3jl', msgParams)
    .then(res => {
        console.log(res.status);
        resetForm();
        alert('message sent successfully !!')
    })
    .catch(err => {
        console.log(err)
        alert("Message cannot be sent. Please try again later")
    })

}

document.getElementById('send').addEventListener('click', (e) => {
    e.preventDefault()

    const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!valid.test(email)) {
        alert('Email is not valid !');
        return;
    }

    if (subject === '') {
        alert('Plesae enter a subject...');
        return;
    }

    if (name !== '' && message !== '') {
        sendEmail(name, email, subject, message);
    } else {
        if (name === '') {
            alert('Plesae enter your name :)')
            return;
        } else {
            alert('The message field is empty !!')
            return;
        }
    }

});