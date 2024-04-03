const homePage = (() => {
    const contentContainer = document.querySelector("#content");

    const homeSection = document.createElement("section");
    homeSection.setAttribute("id", "home");
    homeSection.innerHTML = `
        <div class="bg"></div>
        <div class="overlay">
            <div class="content">
                <h1>Crafted Since 1959</h1>
                <p>At Javy's, each pizza is a masterpiece of tradition and flavor, a journey through the rich culinary heritage of Italy, crafted with care since 1959.</p>
                <button id="order-btn">Get your order!</button>
            </div>
        </div>
    `;
    contentContainer.appendChild(homeSection);
})();

export {homePage};