const lampadaClick = document.getElementById('lampadaClick');
const lampadaOver = document.getElementById('lampadaOver');
let statuClick = 'lampada'
let statuOver = 'lampada'

lampadaClick.addEventListener('click',()=>{
    statuClick = statuClick === 'lampada' ? 'lampada-on': 'lampada';
    lampadaClick.src = `../assets/images/${statuClick}.jpg`;
});

lampadaOver.addEventListener('mouseover', () =>{
    statuOver = statuOver === 'lampada' ? 'lampada-on': 'lampada';
    lampadaOver.src = `../assets/images/${statuOver}.jpg`;
})