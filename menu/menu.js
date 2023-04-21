// Rendering NAV
const navEl = document.getElementById("nav")

function navRender() {
    let navLit = `
    <a href="/mains" class="logo">
        <img src="../images/logo-short.png" alt="Logo">
        <h2>Krity Dangol</h2>
        <p>Front-end Developer</p>
    </a>

    <label>
        <input type="checkbox">
        <span class="menu"> <span class="hamburger"></span> </span>
        <ul id="nav-links"> </ul>
    </label>
    `
    navEl.innerHTML = navLit
}

navRender()


// Rendering nav MENU
const navMenu = document.getElementById("nav-links")

const menuItems = [
    { link: "/", item: "Home" },
    { link: "/mains", item: "Mains" },
]
function renderMenu() {
    let navDOM = ""
    for (let i = 0; i < menuItems.length; i++) {
        navDOM += `<li> <a href="${menuItems[i].link}">${menuItems[i].item}</a> </li>`
        navMenu.innerHTML = navDOM
    }
}

renderMenu()