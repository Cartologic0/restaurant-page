const contactPage = (() => {
    const contentContainer = document.querySelector("#content");
    const contactSection = document.createElement("section");

    contactSection.setAttribute("id", "contact");
    contactSection.innerHTML = `
    <section id="contact">
    <div class="background-overlay"></div>
    <div class="contact-us">
        <form action="" class="order-form">
            <h1>Place Your Order!</h1>
            <p>Craving our delicious pizzas? Simply give us a call at <a href="tel:+15127882029">(512) 788-2029</a>
            to place your order for swift delivery straight to your door!<br/>Or make a booking request by filling out the form:</p>
            <div class="input-wrapper">
                <input class="input-field"type="text" name="name" autocomplete="off" value="" placeholder="Full Name" required>
            </div>
            <div class="input-wrapper">
                <input class="input-field" type="tel" name="number" autocomplete="off" value="" placeholder="Number"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
            </div>
            <div class="input-wrapper">
                <select class="input-field" name="pizza" required>
                    <option  value="siciliana">Siciliana</option>
                    <option  value="neapolitan">Neapolitan</option>
                    <option  value="parmigiana">Parmigiana</option>
                    <option  value="margherita">Margherita</option>
                    <option  value="capricciosa">Capricciosa</option>
                    <option  value="al-taglio">Al taglio</option>
                </select>
            </div>
            <div class="input-wrapper">
                <textarea class="input-field" name="message" placeholder="Please enter any additional information about your order here." autocomplete="off" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" class="submit-order">Confirm Order</button>
        </form>
        <div class="contact-div">
            <h1>Contact us</h1>
            <div class="address">
                <img id="icon" src="location_on.svg" alt="">
                <p><strong>Address:</strong> 838 W 6Th St Los Angeles CA 90017.</p>
            </div>
            <div class="phone">
                <img id="icon" src="phone.svg" alt="">
                <p><strong>Phone:</strong> + 1512 7882 029</p>
            </div>
            <div class="email">
                <img id="icon" src="at.svg" alt="">
                <p><strong>Email:</strong> info@javys.com</p>
            </div>
            <div class="email">
                <img id="icon" src="alarm_on.svg" alt="">
                <p><strong>Start:</strong> Mon-Thurs:10am-23pm
                </br>Fri-Sun:9am-1am</p>
            </div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.748159014361!2d-118.25827419999999!3d34.050330699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b3d901536d%3A0xf16b09d01d537f51!2s838%20W%206th%20St%2C%20Los%20Angeles%2C%20CA%2090017%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sma!4v1711646863762!5m2!1sfr!2sma" width="400px" height="300px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    `;

    contentContainer.appendChild(contactSection);
})();

export {contactPage};