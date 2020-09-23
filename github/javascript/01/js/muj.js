/*alert('toto pochází z externího souboru');*/
// var nadpis- starší delklarace proměnné v js
// proměná v nových verzích js
let nadpis = document.getElementById('nadpis');
let img = document. querySelector('img');

img.addEventListener('mouseover', function(){
img.src = 'krysa.jpg'
})

img.addEventListener('mouseout', function(){
    img.src = 'spekacek.jpg'
    })

nadpis.addEventListener('click', function(){

nadpis.innerHTML = 'Ahoj <i>Karle</i>! <b>VOLE</b>';
nadpis.style.color = 'blue';
nadpis.style.fontFamily = 'serif';
nadpis.classList.add('display-3');
nadpis.classList.add('text-info');
nadpis.classList.remove('text-uppercase');
});

let slon = document.getElementById('slon');
slon.addEventListener('mouseover', function(){
slon.style.color = 'red';
slon.classList.add('text-uppercase');
})
let footer = document.getElementById('footer');
footer.addEventListener('mouseleave', function(){
footer.innerHTML ='<li>BAF</li>';

})