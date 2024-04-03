import {nav} from "./nav"
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

const home = document.querySelector(".nav-home");
const homeSection = document.querySelector("#home");
const menu = document.querySelector(".nav-menu");
const menuSection = document.querySelector("#menu");
const contact = document.querySelector(".nav-contact");
const contactSection = document.querySelector("#contact");

home.addEventListener("click", () => {  
    homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

menu.addEventListener("click", () => {
    menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

contact.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

// reveal scroll effect //

const sr = ScrollReveal({
    origin:"top",
    distance: "85px",
    duration: 2500,
    reset: true
})


const content = document.querySelector(".content");
sr.reveal(content, {delay:300});
const menuHeading = document.querySelector("#menu-heading");
sr.reveal(menuHeading, {delay:300});
const menuContainer = document.querySelector(".menu-container");
sr.reveal(menuContainer, {delay: 400});
const contactForm = document.querySelector(".contact-us");
sr.reveal(contactForm, {delay: 400});

// redirect order-btn to contact section //

const orderBtn = document.querySelector("#order-btn");
orderBtn.addEventListener("click", () => {
    window.location.href = contact;
});


// add confirm order output //
const submitOrderBtn = document.querySelector(".submit-order");

const confirmOrderOutput = (e) => {

    e.preventDefault();

    const numberInput = document.querySelector("input[type='tel']");
    const orderForm = document.querySelector(".order-form");
    if (e.target === submitOrderBtn && numberInput.value.trim() !== '') {
        const output = document.createElement("div");
        let code = `
        <div class = "output">
            <p> Your order has been processed! You're going to receive a call at ${numberInput.value} to confirm your order. Have a nice day!
        </div>
        `
        output.innerHTML = code;
        orderForm.appendChild(output);

    }

}

submitOrderBtn.addEventListener("click", confirmOrderOutput, {once:true});

//  add focus effect on nav bar elements

const addFocus = (event) => {
    event.preventDefault();
    const navElement = event.target;
    if(window.location.href === navElement) {
     navElement.style.color = "black";
    }
}

menu.addEventListener("click", addFocus);
home.addEventListener("click", addFocus);
contact.addEventListener("click", addFocus);
