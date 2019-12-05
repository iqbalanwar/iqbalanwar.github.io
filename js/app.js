window.onload(alert(`My website is a work in progress. Please excuse the appearance.\nThank you!`));
/* =============== RESPONSIVE NAV: =============== */

function responsiveNav() {
    let x = document.querySelector("#topNav");
    if (x.className === "navbar") {
      x.className = "responsive";
    } else if (x.className === "responsive"){
      x.className = "navbar";
    }
}
// document.querySelector(".icon").addEventListener("click", responsiveNav);

/* =============== TYPE 'Skills' TITLE: =============== */
const blink = () => {
    const cursorLine = document.querySelector('.cursorLine').style;
    cursorLine.marginLeft = '1%';
    cursorLine.width = '10px';
    
    if (cursorLine.backgroundColor === 'black') {
        cursorLine.backgroundColor = 'transparent';
    } else {
        cursorLine.backgroundColor = 'black';
    }
    setTimeout(blink, 500);
};
const typed = () => {
    let skillsTitle = `  Skills`;
    let i = 0;
    const typing = () => {
        document.querySelector('.skillsTitle').innerHTML += skillsTitle[i];
    }
    const typeTheString = () => {
        if (i < skillsTitle.length) {
            typing();
            i++;
            setTimeout(typeTheString, 150);
        } else { 
            return blink(); 
        }
    }
    return typeTheString();
};
typed();


/* =============== CLICK MODALS IN PROJECTS SECTION: =============== */

var modal = document.querySelector(".modal");
var trigger = document.querySelectorAll(".projectBox");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

// Opening dummy modals for all my projects
// each project needs to be targetted individually
// and load up their own content...
// How? Idk yet lol
for(let i=0; i < trigger.length; i++) {
    trigger[i].addEventListener("click", toggleModal);
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);