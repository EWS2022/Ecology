let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
let navLinksA = document.querySelectorAll('a');
hamburger.onclick = function(){
	hamburger.classList.toggle('hamburger_active');
    nav.classList.toggle('nav_active');
}

for(let i = 0; i < navLinksA.length;i++){
    navLinksA[i].onclick = function(){
        hamburger.classList.remove('hamburger_active');
        nav.classList.remove('nav_active');
    }
}

let formIframe = document.querySelector('iframe');
let formWrapper = document.querySelector('.form__wrapper');
formIframe.onload = function(){
    formWrapper.classList.add('form__wrapper_active');
    setTimeout(()=> {
        document.forms.order.reset();
        formWrapper.classList.remove('form__wrapper_active');
    }, 3000);
}