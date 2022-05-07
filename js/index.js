let icebas = document.querySelectorAll('.iceba');
console.log(icebas);
let icebasImg = document.querySelectorAll('.revela_img');

icebas.forEach((iceba, idx) => {
    iceba.addEventListener('mousemove', (e) => {
        iceba.children[0].style.opacity = 1;
        iceba.children[0].style.transform = `translate(${e.clientX - 300}px,${e.clientY / 3}px) rotate(${e.clientX / 50}deg)`;
        icebasImg[idx].style.transform = 'scale(2, 2)';
        iceba.style.zIndex = 2
    })

    iceba.addEventListener('mouseleave', (e) => {
        iceba.children[0].style.opacity = 0;
        iceba.children[0].style.transform = `translate(${e.clientX}px, -300px)`;
        icebasImg[idx].style.transform = 'scale(0.8, 0.8)'
        iceba.style.zIndex = 0
    })
})