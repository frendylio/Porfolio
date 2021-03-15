// ================
// Hamburger
// ================
const menuBtn = document.querySelector('hamburger');
const menuBackground = document.querySelector('.gridNavContainer');
const body = document.querySelectorAll('.body');
const realBody = document.querySelector('body');
const realHtml = document.querySelector('html');
const navMobile = document.querySelector('navMobile');

let menuOpen = false;

// On click event
menuBtn.addEventListener('click', ()=> {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuBackground.classList.add('open');

        body.forEach(function(i) {
            i.classList.add('open');
        });

        navMobile.classList.add('open');
        realBody.style.setProperty('overflow', 'hidden');
        realHtml.style.setProperty('overflow', 'hidden');
        menuOpen =  true;
    }

    else{
        menuBtn.classList.remove('open');
        menuBackground.classList.remove('open');

        body.forEach(function(i) {
            i.classList.remove('open');
        });

        navMobile.classList.remove('open');

        menuOpen = false;
        realBody.style.setProperty('overflow', 'auto');
        realHtml.style.setProperty('overflow', 'auto');
    }
});

menuBackground.addEventListener('click', ()=> {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuBackground.classList.add('open');

        body.forEach(function(i) {
            i.classList.add('open');
        });
        
        navMobile.classList.add('open');

        menuOpen =  true;
        realBody.style.setProperty('overflow', 'hidden');
        realHtml.style.setProperty('overflow', 'hidden');
    }

    else{
        menuBtn.classList.remove('open');
        menuBackground.classList.remove('open');

        body.forEach(function(i) {
            i.classList.remove('open');
        });
        
        navMobile.classList.remove('open');

        menuOpen = false;
        realBody.style.setProperty('overflow', 'auto');
        realHtml.style.setProperty('overflow', 'auto');
    }
});
