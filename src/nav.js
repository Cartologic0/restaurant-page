const nav = (() => {
    const contentContainer = document.querySelector("#content");
    const headerSection = document.createElement("section");
    headerSection.classList.add("header");
    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
    <div class="logo">
        <img src="logo-pi.png" alt="">
    </div>
    <ul>
        <li><a href="#home" class="nav-home">Home</a></li>
        <li><a href="#menu" class="nav-menu">Menu</a></li>
        <li><a href="#contact" class="nav-contact">Contact</a></li>
    </ul>
    <img src="shop.svg" alt="cart" class="cart-icon">
 </nav>
    `;

    headerSection.appendChild(header);
    contentContainer.appendChild(headerSection);
})();

export {nav};