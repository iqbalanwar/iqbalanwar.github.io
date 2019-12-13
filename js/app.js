alert(`My website is a work in progress. Please excuse the appearance.\nThank you!`);
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

// unused now:
var modal = document.querySelector(".modal");

var modal1 = document.querySelector("#modal-1");
var modal2 = document.querySelector("#modal-2");

var trigger = document.querySelectorAll(".projectBox");
var closeButton = document.querySelector(".close-button");

// Bad solution, not DRY:
// possibly pass param name into toggleModal?

function toggleModal1() {
    modal1.classList.toggle("show-modal");
}
function toggleModal2() {
    modal2.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal1) {
        toggleModal1();
    }
    else if (event.target === modal2) {
        toggleModal2();
    }
}

// what I want to do
// target all the modals in the modal
// loop through and attach their respective modals?

// pass into toggleModal the chosen modal?
// for(let i=0; i < trigger.length; i++) {
//     trigger[i].addEventListener("click", toggleModal);
// }

trigger[0].addEventListener("click", toggleModal1);
trigger[1].addEventListener("click", toggleModal2);


closeButton.addEventListener("click", toggleModal1);
closeButton.addEventListener("click", toggleModal2);




window.addEventListener("click", windowOnClick);