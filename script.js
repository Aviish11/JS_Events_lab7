const container = document.getElementById('container');
const message = document.getElementById('message');
const input = document.getElementById('nameInput');
const form = document.getElementById('myForm');

container.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'BUTTON') {
        message.textContent = ('Hovering over button: ' + event.target.textContent);
    }
});

container.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'BUTTON') {
        message.textContent = ('Stopped hovering over button: ' + event.target.textContent);
    }
});

input.addEventListener('keyup', (event) => {
    message.textContent = ('Key released: ' + event.key);
})

form.addEventListener('submit', function(event) {
    console.log('Form submitted');
    event.preventDefault();
    message.textContent = ('Form Submitted')
});