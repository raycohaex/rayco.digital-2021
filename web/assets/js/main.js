window.addEventListener('DOMContentLoaded', (event) => {
    /* --------------**
    ** Menu controls **
    **-------------- */

   // change state of first found anchor
    let menuTrigger = () => {
        if(menuAnchor = document.querySelector('[data-menu-anchor]')) {
            menuAnchor.classList.contains('active') ? menuAnchor.classList.remove('active') : menuAnchor.classList.add('active');
        } else {
            console.log('No menu anchor found (<div data-menu-anchor>');
        }
    }
    
    // asign all triggers with event listener
    let triggerList = document.querySelectorAll("[data-menu-trigger]");
    for (const [index, el] of triggerList.entries()) {
        el.addEventListener("click", menuTrigger);
    }
});