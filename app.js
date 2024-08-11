const btn = document.querySelector('#btn');
const h1 = document.querySelector('#tittle');
const tittleHead = document.querySelector('#tittleHead');

btn.addEventListener('click', () => {
    const newColor = generateNewColor();

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    tittleHead.innerText = newColor;
})

function generateNewColor () {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const newColor = `rgb(${r}, ${g}, ${b})`;

    return newColor;
}