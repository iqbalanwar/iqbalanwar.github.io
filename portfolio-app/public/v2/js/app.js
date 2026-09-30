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

const modal_1 = document.querySelector("#modal-1");
const modal_2 = document.querySelector("#modal-2");
const modal_3 = document.querySelector("#modal-3");
const modal_4 = document.querySelector("#modal-4");
const modal_5 = document.querySelector("#modal-5");
const modal_6 = document.querySelector("#modal-6");

const trigger = document.querySelectorAll(".projectBox");
const closeButton = document.querySelectorAll(".close-button");

function toggleModal(targetModal) {
    targetModal.classList.toggle("show-modal");
}

// Bad solution, not DRY:
function windowOnClick(event) {
    if (event.target === modal_1) {
        toggleModal(modal_1);
    }
    else if (event.target === modal_2) {
        toggleModal(modal_2);
    }
    else if (event.target === modal_3) {
        toggleModal(modal_3);
    }
    else if (event.target === modal_4) {
        toggleModal(modal_4);
    }
    else if (event.target === modal_5) {
        toggleModal(modal_5);
    }
    else if (event.target === modal_6) {
        toggleModal(modal_6);
    }
}

// pass the targetModal into toggleModal function
for (let i = 0; i < trigger.length; i++) {
    let targetModal = document.querySelector(`#modal-${i + 1}`);
    trigger[i].addEventListener("click", toggleModal.bind(null, targetModal), false);
    closeButton[i].addEventListener("click", toggleModal.bind(null, targetModal), false);
}

window.addEventListener("click", windowOnClick);