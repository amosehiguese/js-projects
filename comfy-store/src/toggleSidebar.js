import { getElement } from "./utils";

const toggleNav = getElement(".toggle-nav")
const sidebarOverlay = getElement(".sidebar-overlay")
const clostBtn = getElement(".sidebar-close")

toggleNav.addEventListener("click", () => {
    sidebarOverlay.classList.add("show")
})

toggleNav.addEventListener("click", () => {
    sidebarOverlay.classList.remove("show")
})