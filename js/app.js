// for navbar:
// if header can't be seen (height: 0vh?)
// make navbar position fixed

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

for(let i=0; i < trigger.length; i++) {
    trigger[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);