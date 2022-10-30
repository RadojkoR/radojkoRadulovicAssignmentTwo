

//Make icon(<i class=""></i> in .hamburgerManu)

const hamburgerEl = document.querySelector(".hamburgerMenu");

hamburgerEl.innerHTML = `<i class="fa-solid fa-bars"></i>`;

// console.log(hamburgerEl.innerHTML)

//create an event listener for when the user click on the icon

const iconEl = document.querySelector('i');

// console.log(iconEl)

hamburgerEl.addEventListener('click', (event) => {
    if (event.target.tagName === 'I') {
        // console.log("you clicked the icon")
        updateIcon(event.target)
        
    }
});


// when user click on menu 

const updateIcon = (icon) => {
    // console.log('icon', icon);
    // When users click on icon they change it
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");

    // Call .showFlexNav and hide .flexNav
    icon.parentElement.nextElementSibling.classList.toggle('showFlexNav');
    
    // console.log(icon.parentElement.nextElementSibling.classList);
}



