// ========
// Get media screen
// ========
const isPhoneView = window.matchMedia( "(min-width: 1024px)" );


// ================
// Kebab Function
// ================
const menuBtn = document.querySelector('.kebab-Btn');
const menuBackground = document.querySelector('.kebab-Background');
let menuOpen = false;

// On click event
menuBtn.addEventListener('click', ()=> {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuBackground.classList.add('open');
        menuOpen =  true;
    }

    else{
        menuBtn.classList.remove('open');
        menuBackground.classList.remove('open');
        menuOpen = false;
    }
});

menuBackground.addEventListener('click', ()=> {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuBackground.classList.add('open');
        menuOpen =  true;
    }

    else{
        menuBtn.classList.remove('open');
        menuBackground.classList.remove('open');
        menuOpen = false;
    }
});

// ================
// Scroll Function
// ================
window.addEventListener('scroll', () => {
    
    // This is the height of current browser
    const projectsHeight = document.getElementById('projects').getBoundingClientRect().height;
    // const moveToLeftNavigation = document.getElementById('moveToLeftNavigation').getBoundingClientRect().height;
    
    const currentHeight = window.scrollY;

    // ==============
    // Get Variables
    // ==============
    const aboutMeAll = document.querySelectorAll("a.aboutMe");
    const projectsAll = document.querySelectorAll('a.projects');
    const skillsAll = document.querySelectorAll('a.skills');
    const contactMeAll = document.querySelectorAll('a.contactMe');
    const horizontalNavigation = document.querySelector('.horizontalNavigation');
    let aboutMe = null;
    let projects = null;
    let skills = null;
    let contactMe = null;    


    if (isPhoneView.matches === true){
        aboutMe = aboutMeAll[0];
        projects = projectsAll[0];
        skills = skillsAll[0];
        contactMe = contactMeAll[0];
    }        
    else{
        aboutMe = aboutMeAll[1];
        projects = projectsAll[1];
        skills = skillsAll[1];
        contactMe = contactMeAll[1];  
    }



    // If you are in about me
    if(currentHeight >= 0 - 5 && currentHeight <= projectsHeight*0.35){
        aboutMe.classList.add('highlight');

        projects.classList.remove('highlight');
        skills.classList.remove('highlight');
        contactMe.classList.remove('highlight');
        horizontalNavigation.classList.remove('open');
    }
    

    // Projects
    else if(currentHeight >= projectsHeight - 5 && currentHeight <= projectsHeight*1.35){
        projects.classList.add('highlight');
        horizontalNavigation.classList.add('open');
        // document.querySelector('#moveToLeftNavigation').classList.add('move');

        aboutMe.classList.remove('highlight');
        skills.classList.remove('highlight');
        contactMe.classList.remove('highlight');    
    }

    // Skills
    else if(currentHeight >= projectsHeight*2 - 5 && currentHeight <= projectsHeight*2.35){
        skills.classList.add('highlight');
        horizontalNavigation.classList.add('open');
        // document.querySelector('#moveToLeftNavigation').classList.add('move');

        aboutMe.classList.remove('highlight');
        projects.classList.remove('highlight');
        contactMe.classList.remove('highlight');   
    }    

    // Contact me
    else if(currentHeight >= projectsHeight*3 - 5 && currentHeight <= projectsHeight*3.35){
        contactMe.classList.add('highlight');
        horizontalNavigation.classList.add('open');
        // document.querySelector('#moveToLeftNavigation').classList.add('move');
        
        aboutMe.classList.remove('highlight');
        projects.classList.remove('highlight');
        skills.classList.remove('highlight');
    }     

    // IconTransitions
    // if(currentHeight >= projectsHeight*0.75){
    //     document.querySelector('#moveToLeftNavigation').classList.add('move');
    // }
    // else if (currentHeight <= projectsHeight*1.25){
    //     if($("#moveToLeftNavigation").hasClass("move")){
    //         $("#moveToLeftNavigation").removeClass( "move" ).addClass( "unmove" );
    //     }    }

    // console.log(currentHeight)
});

// ================
// First Time Log In
// ================
// const firstTime = localStorage.getItem("first_time");
// console.log(firstTime);
// if(!firstTime) {
//     // first time loaded!
//     document.querySelector('.aboutMe').classList.add('highlight');
// }