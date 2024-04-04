const menuPage = (() => {
    const contentContainer = document.querySelector("#content");
    const menuSection = document.createElement("section");
    menuSection.setAttribute("id", "menu");
    menuSection.innerHTML = `
    <h1 id="menu-heading">Our Pizzas <span><img src="./assets/pizza.svg" alt=""></span></h1>
    <div class="menu-container">
        <div class="pizza" id="siciliana">
            <img src="./assets/siciliana.png" alt="">
            <div>
                <h2>Siciliana</h2>
                <p>Tomato sauce, Anchovies, Onions, Oregano, Sheep's milk cheese, Breadcrumbs</p>
                <h6>$7.97</h6>
            </div>
        </div>
        <div class="pizza" id="margherita">
            <img src="./assets/margherita.png" alt="">
            <div>
                <h2>Margherita</h2>
                <p>Tomato sauce, White Mozzarella, Fresh green basil</p>
                <h6>$13.34</h6>
            </div>
        </div>
        <div class="pizza" id="neopolitan">
            <img src="./assets/neapolitan.png" alt="">
            <div>
                <h2>Neapolitan</h2>
                <p>Basic dough, Raw tomatoes, Fresh Mozzarella cheese, Fresh basil, Olive Oil</p>
                <h6>$9.95</h6>
            </div>
        </div>
        <div class="pizza" id="capricciosa">
            <img src="./assets/capricciosa.png" alt="">
            <div>
                <h2>Capricciosa</h2>
                <p>Mozzarella cheese, Italian baked ham, Mushroom, Artichoke, Tomatoes</p>
                <h6>$12.00</h6>
            </div>
        </div>
        <div class="pizza" id="parmigiana">
            <img src="./assets/parmigiana.png" alt="">
            <div>
                <h2>Parmigiana</h2>
                <p>Ricotta cheese, Mozzarella, Parmesan, Tomato sauce, Meatballs, Oregano, Vegetable shorting</p>
                <h6>$13.90</h6>
            </div>
        </div>
        <div class="pizza" id="al-taglio">
            <img src="./assets/al-taglio.png" alt="">
            <div>
                <h2>Al taglio</h2>
                <p>Tomato sauce, Mozzarella, Chicken breast, Mushroom, Oregano, Basil</p>
                <h6>$11.00</h6>
            </div>
        </div>
    </div>
    `;

    contentContainer.appendChild(menuSection);
})();

export {menuPage};