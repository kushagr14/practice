const buttonEl = document.querySelector('.button');
const textArea= document.querySelector('#text');

buttonEl.addEventListener('click', () => {
    textArea.textContent = "Button is clicked";
    // making the text to go away after 2 secs
    setTimeout(() => {
        textArea.textContent = '';
    }, 2000);
});
