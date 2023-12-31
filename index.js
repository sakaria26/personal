// function to remove focused class from call nav links
const removeFocus = () => {
    let navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].className = navLinks[i].className.replace("focused", "");
    }
};

// function to add and remove visible and hidden classes
const changeVisibility = (targetID) => {
    let elementToShow = document.getElementById(targetID);
    let current = document.getElementsByClassName("visible");

    current[0].className = current[0].className.replace("visible", "hidden");
    elementToShow.className = elementToShow.className.replace(
        "hidden",
        "visible"
    );
};

const showHide = (targetID, navID) => {
    let nav = document.getElementById(navID);

    // remove focused class from all nav links
    removeFocus();

    // add focused class to current nav link
    nav.className += " focused";

    // change visibility of elements
    changeVisibility(targetID);
};

const showContactMe = () => {
    // remove focused class from all nav links
    removeFocus();
    // change visibility of elements
    changeVisibility("contact-me");
    // change the button text
    let button = document.getElementById("btn-text");
    button.innerHTML = "Back";
};

//emailjs function

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_djb92iq";
    const templateID = "template_e999vhz";

    emailjs.init("KoisirjdUap4tMQHh")

    emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
            changeVisibility("success-message");
        },
        (error) => {
            console.log("FAILED...", error);
            alert("Your message was not sent. Please try again.");
        }
    );
});

