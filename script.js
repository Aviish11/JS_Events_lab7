const container = document.getElementById('container');
const message = document.getElementById('message');

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