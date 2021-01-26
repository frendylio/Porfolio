
// Crate a variable. 
// document.querySelector target your class
const menuBtn = document.querySelector('.button1');
let menuOpen = false;

// On click event
// menuBtn.addEventListener('click', ()=> {
//     if(!menuOpen){
//         menuBtn.classList.add('open');
//         menuOpen =  true;
//     }

//     else{
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });

// ================
// Scroll Function
// ================
window.addEventListener('scroll', () => {
    
    // This is the height of current browser
    const projectsHeight = document.getElementById('projects').getBoundingClientRect().height;
    const currentHeight = window.scrollY;
    
    // If you are in about me
    if(currentHeight >= 0 - 5 && currentHeight <= projectsHeight*0.35){
        document.querySelector('.aboutMe').classList.add('highlight');

        document.querySelector('.projects').classList.remove('highlight');
        document.querySelector('.skills').classList.remove('highlight');
        document.querySelector('.contactMe').classList.remove('highlight');  
    }

    // Projects
    else if(currentHeight >= projectsHeight - 5 && currentHeight <= projectsHeight*1.35){
        document.querySelector('.projects').classList.add('highlight');

        document.querySelector('.aboutMe').classList.remove('highlight');
        document.querySelector('.skills').classList.remove('highlight');
        document.querySelector('.contactMe').classList.remove('highlight');    
    }

    // Skills
    else if(currentHeight >= projectsHeight*2 - 5 && currentHeight <= projectsHeight*2.35){
        document.querySelector('.skills').classList.add('highlight');

        document.querySelector('.aboutMe').classList.remove('highlight');
        document.querySelector('.projects').classList.remove('highlight');
        document.querySelector('.contactMe').classList.remove('highlight');   
    }    

    // Contact me
    else if(currentHeight >= projectsHeight*3 - 5 && currentHeight <= projectsHeight*3.35){
        document.querySelector('.contactMe').classList.add('highlight');

        document.querySelector('.aboutMe').classList.remove('highlight');
        document.querySelector('.projects').classList.remove('highlight');
        document.querySelector('.skills').classList.remove('highlight');
    }     

    // console.log(currentHeight)
});