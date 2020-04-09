let item = document.getElementsByClassName('slide__item');

var index = 0;
var total = 100;

function autoSlide(){
    if(index >= item.length) {
        index = 0;
        total = 100;
    }
    for(let i = 0; i < item.length; i++){
        item[i].style.transform = `translateX(${total}%)`;
    }
       
    total -= 100;
    for(let i = 0; i < item.length; i++){
        item[i].style.transform = `translateX(${total}%)`;
    }
    item[index].style.transform = `translateX(${total}%)`;
    item[index].style.transition =" all 0.5s linear";
    index++; 
    setTimeout(autoSlide,5000);
}

autoSlide();

// service

const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
let control = document.getElementsByClassName('control__item');

function changeService(value) {
    if(value.id === tab1.id){
        control[0].className = 'control__item active';
        control[1].className = control[1].className.replace(' active', '');
        tab1.style.display = 'flex';
        tab2.style.display = 'none';
    } else if(value.id === tab2.id){
        control[1].className = 'control__item active';
        control[0].className = control[1].className.replace(' active', '');
        tab2.style.display = 'flex';
        tab1.style.display = 'none';

    }
}