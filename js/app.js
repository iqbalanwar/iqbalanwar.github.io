// for navbar:
// if header can't be seen (height: 0vh?)
// make navbar position fixed

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

const ttyl = () => {
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
            // document.querySelector('.skillsTitle').innerHTML = "Skills";
            return blink(); 
        }
    }
    return typeTheString();
};

ttyl();