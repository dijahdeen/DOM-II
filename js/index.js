// Your code goes here
const funbus = document.querySelector('.logo-heading');
//console.log(funbus);

// animate mouse click on Fun Bus
funbus.addEventListener('click', () => {
    funbus.style.transform = 'rotateY(-180deg)';
    funbus.style.transition = 'all 0.3s'

})
//animate mouse leave
funbus.addEventListener('mouseleave', () => {
    funbus.style.transform = 'rotateY(0deg)';
    funbus.style.transition = 'all 0.3s'
})

// animate mouseover on main image
const featuredImg = document.querySelector(".intro img");

featuredImg.addEventListener('mouseover', () => {
    featuredImg.style.filter = "grayscale(100%)";
    featuredImg.style.transition = 'all 0.3s';
})

featuredImg.addEventListener('mouseleave', () => {
    featuredImg.style.filter = "grayscale(0%)";
    featuredImg.style.transition = 'all 0.3s';
})

// animate keydown
const page = document.querySelector("body");

page.addEventListener('keydown', event => {
    if (event.keyCode === 65) { // PRESS only key A to see effect
        page.style.backgroundColor = 'red';
        page.style.transition = 'all 1s';
    }

})

// reset keydown event with keyup
page.addEventListener('keyup', () => {
    page.style.backgroundColor = 'white';
    page.style.transition = 'all 0.3s';
})


// animate scroll
window.addEventListener('scroll', () => {
    let y = 255 * (window.scrollY) / 2000
    // console.log(window.scrollY)
    const [r, g, b] = [255 - y, 255 - y, 255]
    page.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    page.style.transition = 'all 0.3s ease'
})

// animate double click
const img_res = document.querySelector('.content-section img')
//console.log(img_res)
img_res.addEventListener("dblclick", () => {
    img_res.style.transform = 'scale(1.3)'
    img_res.style.transition = 'all 0.3s'
})
img_res.addEventListener("mouseleave", () => {
    img_res.style.transform = 'scale(1)';
    img_res.style.transition = 'all 0.3s'
})

// animate browser going offline
window.addEventListener('offline', () => {
    alert("The network connection has been lost.");
});

// animate drag
document.addEventListener("dragstart", () => {
    page.style.backgroundColor = 'cyan';
    page.style.transition = 'all 0.3s'
});
// reset after dragend
document.addEventListener("dragend", () => {
    page.style.backgroundColor = 'white';
    page.style.transition = 'all 0.3s'
});

// animate focus
const nav_ = document.querySelector(".nav-link");
// console.log(nav_)
nav_.addEventListener('focus', () => {
    nav_.style.background = 'cyan';
});

nav_.addEventListener('blur', () => {
    nav_.style.background = '';
});

