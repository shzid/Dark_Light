let button = document.querySelector(`.switch`);

let body = document.querySelector('body');

let sunIcon = document.querySelector(`.switch .sun`);

let heading = document.querySelector(`.switching h1`);

function darkmodeToggler(){
    body.classList.toggle('dark')
    console.log(body.classList.contains('dark'))
    if(body.classList.contains("dark") == true){
        sunIcon.style.marginTop = `-40px`
        heading.innerHTML = `Dark Mode`
    }
    else{
        sunIcon.style.marginTop = `0px`
        heading.innerHTML = `Light Mode`
    }
};

button.addEventListener('click', darkmodeToggler);