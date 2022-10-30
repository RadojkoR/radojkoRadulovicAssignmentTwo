// HAMBURGER MENU *************************************************

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


// COMMENTS CONTACT FORM *****************************************

//Listen for when form submits.
//On submit, get the value that the user has typed into their input.
//display user input as a pharagraph in the div container on the page- adding it as a child of the div container.

// Stire form elemetn in a variable
const formEl = document.querySelector('form');

const inputNameEl = document.querySelector('#name');
const inputEmailEl = document.querySelector('#email');
const textareaEl = document.querySelector('#message');

//add event listener to the form element
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(inputNameEl.value, inputEmailEl.value, textareaEl.value);

    //Store the values from form Elements in an variables
    const taskName = inputNameEl.value; 
    const taskEmail = inputEmailEl.value;
    const taskTextarea =  textareaEl.value;

    const date = new Date();
    

     //  if tasks has content inside of it, it will evaluate to true and run some code
     if ( taskName, taskEmail, taskTextarea ) {
        console.log('you entered the task');
        console.log(taskName, taskEmail, taskTextarea);


        // need to make:
        // <div class="commentThree"><div class="textcomentContainer"><p>Info</p><p>Comment</p></div></div>

        //create div with class commentThree
        const commentsEl = document.createElement('div')
        commentsEl.className = 'commentThree'

        //create div with class commentContainer
        const commentContainer = document.createElement('div');
        commentContainer.className = "comentsContainer";

        // append .commentContainer as achild to the .commentThree element
        commentsEl.appendChild(commentContainer);

        //create div with class imgcomentsContainer
         const imgContainerEl = document.createElement('div');
         imgContainerEl.className = "imgcomentsContainer";

         // append .txtcomentContainer as achild to the .commentThree element
        commentContainer.appendChild(imgContainerEl); 

                // create the img element      
                 imgContainerEl.innerHTML = `<img src="./assets/comment-1.jpg" alt="Ali's picture">`;

                 // append img as achild to the .imgcommentsContainer element
                // imgContainerEl.appendChild(imgEl);





        //create div with class txtcomentsContainer
        const newComment = document.createElement('div');
        newComment.className = "txtcomentsContainer";

        // append .txtcomentContainer as achild to the .commentThree element
        commentContainer.appendChild(newComment)  

        //create info paragraph
        const infoPara = document.createElement('p');

        newComment.appendChild(infoPara);

        infoPara.textContent = date;



        // create the p and add the user's task's to it      
        const paragraphEl = document.createElement('p');

        // assign the text content property's value to the user'a task
        paragraphEl.textContent = taskTextarea;

        paragraphEl.textContent = taskTextarea;

        // append paragraph as achild to the .txtcomentContainer element
        newComment.appendChild(paragraphEl);

        //create a variable to store the div element that exists in our html
        const wrapper = document.querySelector('.comentsFlex');

        wrapper.appendChild(commentsEl);




        console.log(commentsEl);

        // console.log(newComment);
        console.log(paragraphEl);



        //Clear the input value back to an empty string
    inputNameEl.value = "";
    inputEmailEl.value = "";
    textareaEl.value = "";
    //  console.log(inputNameEl, inputEmailEl, textareaEl);
        
     };

    

   
    


});//End submit event listener




