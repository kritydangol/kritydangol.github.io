const navMenu = document.getElementById("nav-links")

const menuItems = [
    { link: "/", item: "Home" },
    { link: "/mains", item: "Mains" },
]

function renderMenu() {
    navDOM = ""
    for (let i = 0; i < menuItems.length; i++) {
        navDOM += `<li> <a href="${menuItems[i].link}">${menuItems[i].item}</a> </li>`
        navMenu.innerHTML = navDOM
    }
}
renderMenu()