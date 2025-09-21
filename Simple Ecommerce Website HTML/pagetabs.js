// Script to simplify making pages and buttons linking them

// get all elements with page-name and page-button element
const pages = document.querySelectorAll("[page-name]");
const page_buttons = document.querySelectorAll("[page-button]");

// set all pages to none
let current_page = ""
pages.forEach((element) => {
    element.style.display = "none";
})

// set all default pages to block and set it as current page
document.querySelectorAll("[default-page]").forEach((element) => {
    element.style.display = "block"
    current_page = element.attributes["page-name"].value
})

// make all page-button act like actual buttons
page_buttons.forEach((element) => {
    const target = element.attributes["page-button"].value
    element.addEventListener("click", () => swap_page(target))
    element.style.cursor = "pointer"
})

/**
 * Sets the current page to the target
 * @param {String} target the name of the page
 */
function swap_page(target) {
    document
        .querySelectorAll(`[page-name="${current_page}"]`)
        .forEach((element) => {
            element.style.display = "none"
        });
    document
        .querySelectorAll(`[page-name="${target}"]`)
        .forEach((element) => {
            element.style.display = "block"
        });
    current_page = target;
}
