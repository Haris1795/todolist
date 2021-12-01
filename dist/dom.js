"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["dom"],{

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elements": () => (/* binding */ elements)
/* harmony export */ });
function elements() {
        
    const body = document.querySelector('body');




    const container = document.createElement('div');
    body.appendChild(container);
    container.classList.add('container');



    
    const nav = document.createElement('nav');
    container.appendChild(nav);
    nav.classList.add('nav-bar');

    const header = document.createElement('h3');
    nav.appendChild(header);
    header.innerText = 'TO DO List'
    header.classList.add('title');

    const navDate = document.createElement('nav');
    container.appendChild(navDate);
    navDate.classList.add('nav-date');

    const navDateItemContainer = document.createElement('nav');
    navDate.appendChild(navDateItemContainer);
    navDateItemContainer.classList.add('nav-date-item-container');

    let navSpaces = [];
    for(let i = 0; i < 10; i++) {
        navSpaces.push('')
    }

    navSpaces.forEach((e)=>{
        const navDateItem = document.createElement('div');
        const textElement = document.createElement('p')
        navDateItemContainer.appendChild(navDateItem);
        navDateItem.classList.add('nav-date-item')
    })




    const main = document.createElement('main');
    container.appendChild(main);
    main.classList.add('main');




    const lSection = document.createElement('div')
    main.appendChild(lSection);
    lSection.classList.add('l-section');

    const newProject = document.createElement('div')
    lSection.appendChild(newProject);
    newProject.classList.add('new-project');

    const input = document.createElement('input');
    newProject.appendChild(input);
    input.classList.add('input-project-name');
    input.placeholder = 'Enter the name of your project here'

    const button = document.createElement('button');
    newProject.appendChild(button);
    button.classList.add('btn');
    button.innerText = 'Submit new project'

    const projectList = document.createElement('div');
    lSection.appendChild(projectList);
    projectList.classList.add('project-list')




    const rSection = document.createElement('div');
    main.appendChild(rSection);
    rSection.classList.add('r-section')

    const tasks = document.createElement('div');
    rSection.appendChild(tasks);
    tasks.classList.add('tasks')

};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOMstuff.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7Ozs7O0FBS0w7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET01zdHVmZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBlbGVtZW50cygpIHtcbiAgICAgICAgXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXG5cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cblxuXG4gICAgXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdUTyBETyBMaXN0J1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgY29uc3QgbmF2RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZEYXRlKTtcbiAgICBuYXZEYXRlLmNsYXNzTGlzdC5hZGQoJ25hdi1kYXRlJyk7XG5cbiAgICBjb25zdCBuYXZEYXRlSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdkRhdGUuYXBwZW5kQ2hpbGQobmF2RGF0ZUl0ZW1Db250YWluZXIpO1xuICAgIG5hdkRhdGVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1kYXRlLWl0ZW0tY29udGFpbmVyJyk7XG5cbiAgICBsZXQgbmF2U3BhY2VzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgbmF2U3BhY2VzLnB1c2goJycpXG4gICAgfVxuXG4gICAgbmF2U3BhY2VzLmZvckVhY2goKGUpPT57XG4gICAgICAgIGNvbnN0IG5hdkRhdGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIG5hdkRhdGVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkRhdGVJdGVtKTtcbiAgICAgICAgbmF2RGF0ZUl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWRhdGUtaXRlbScpXG4gICAgfSlcblxuXG5cblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG5cblxuXG4gICAgY29uc3QgbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobFNlY3Rpb24pO1xuICAgIGxTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2wtc2VjdGlvbicpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbFNlY3Rpb24uYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdCcpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXByb2plY3QtbmFtZScpO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIHRoZSBuYW1lIG9mIHlvdXIgcHJvamVjdCBoZXJlJ1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ1N1Ym1pdCBuZXcgcHJvamVjdCdcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdCcpXG5cblxuXG5cbiAgICBjb25zdCByU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoclNlY3Rpb24pO1xuICAgIHJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Itc2VjdGlvbicpXG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCd0YXNrcycpXG5cbn07XG5cbmV4cG9ydCB7ZWxlbWVudHN9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9