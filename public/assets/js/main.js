window.addEventListener('DOMContentLoaded', (event) => {
    /* ---------------**
    ** Menu controls  **
    ** Custom written **
    **--------------- */

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

    /* ---------------- **
    ** Three.js 3d  🤘  **
    **----------------- */
    if(typeof SpeRuntime != 'undefined'){
        const app = new SpeRuntime.Application();
        if( window.innerWidth <= 800 ){
            app.start('/assets/js/scene-mobile.json');
        } else {
            app.start('/assets/js/scene.json');
        }
    }
});