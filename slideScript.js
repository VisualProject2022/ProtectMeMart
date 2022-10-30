const imageSlider = document.querySelector('#photoSlide');


const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');


leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

let imgCnt = document.querySelector('#photoSlide').querySelectorAll('img');

console.log(imgCnt.length);

let nowIndex = 1;
let totalImg = imgCnt.length;


function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex =totalImg;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);
}



function moveRight()
{
    if(nowIndex == totalImg)
    {
        nowIndex =1;
    }
    else
    {
        nowIndex ++;
    }

    moveSlide(nowIndex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveSlide(1);
        break;
        case 2:
            moveSlide(2);
        break;
        case 3:
            moveSlide(3);
        break;
        case 4:
            moveSlide(4);
        break;
        case 5:
            moveSlide(5);
        break;
        case 6:
            moveSlide(6);
        break;
        case 7:
            moveSlide(7);
        break;
    }
}


function moveSlide(index)
{
    console.log(index);
    switch(index)
    {

        case 1:
        {
            imageSlider.style.transform = 'translate(0vmax)'
            nowIndex =1;
        }
        break;
        case 2:
        {
            imageSlider.style.transform = 'translate(-66.75vmax)'
            nowIndex =2;
        }
        break;
        case 3:
        {
            imageSlider.style.transform = 'translate(-133.5vmax)'
            nowIndex =3;
        }
        break;
        case 4:
        {
            imageSlider.style.transform = 'translate(-200.25vmax)'
            nowIndex =4;
        }
        break;
        case 5:
        {
            imageSlider.style.transform = 'translate(-267vmax)'
            nowIndex =5;
        }
        break;
        case 6:
        {
            imageSlider.style.transform = 'translate(-333.75vmax)'
            nowIndex =6;
        }
        break;
        case 7:
        {
            imageSlider.style.transform = 'translate(-400.5vmax)'
            nowIndex =7;
        }
        break;
        case 8:
        {
            imageSlider.style.transform = 'translate(-467.25vmax)'
            nowIndex =8;
        }
        break;
    }
    
}