// console.log("hello")


//phase 1 make html element






//Make icon(<i class=""></i> in .hamburgerManu)

const hamburgerEl = document.querySelector(".hamburgerMenu");

hamburgerEl.innerHTML = `<i class="fa-solid fa-bars"></i>`;

console.log(hamburgerEl.innerHTML)

//create an event listener for when the user click on the icon

const iconEl = document.querySelector('i');

// console.log(iconEl)

hamburgerEl.addEventListener('click', (event) => {
    if (event.target.tagName === 'I') {
        console.log("you clicked the icon")
        updateToDo(event.target)
        // updateToShow(event.target)
    }
});


// when user click on menu 

const updateToDo = (icon) => {
    // console.log('icon', icon);
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");
    icon.parentElement.nextElementSibling.classList.toggle('showFlexNav');
    console.log(icon.parentElement.nextElementSibling.classList);
}

const updateToShow = (text) => {
    // console.log('icon', icon);
    // text.parentElement.nextElementSibling.classList.toggle('showFlexNav');
    // console.log(text.parentElement.nextElementSibling.classList);
}


