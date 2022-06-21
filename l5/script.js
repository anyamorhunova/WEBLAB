//task 1
const h2 = document.getElementById('h2');

const p = document.querySelector('.p-text');

//для h2
const changeColor = (el) => {
    el.style.color = 'white';
    el.style.backgroundColor='blue';
};
h2.addEventListener('click', () => changeColor(h2));

//для p
const changeColor2 = (el) => {
        el.style.color = 'white';
        el.style.backgroundColor='green';
};

p.addEventListener('click', () => changeColor2(p));


//task 2
const img = document.getElementById('img');
const b1_Img = document.getElementById('b1');
const b2_Img = document.getElementById('b2');
const b3_Img = document.getElementById('b3');
const b4_Img = document.getElementById('b4');

b1_Img.addEventListener('click', function(){
    img.style.width =  '25%'
    }
)

b2_Img.addEventListener('click', function(){
        img.style.width = '15%'
    }
)

b3_Img.addEventListener('click', function(){
    document.querySelector('.container').appendChild(img)

    }
)

b4_Img.addEventListener('click', function(){
    img.parentNode.removeChild(img);
    }
)
