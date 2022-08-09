const buttons = document.querySelectorAll('.button');

function handleClick() {
    buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerHTML);
    })
})
}
