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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7OztBQUtMO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9Nc3R1ZmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZWxlbWVudHMoKSB7XG4gICAgICAgIFxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cblxuXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG5cblxuICAgIFxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnVE8gRE8gTGlzdCdcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgIGNvbnN0IG5hdkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2RGF0ZSk7XG4gICAgbmF2RGF0ZS5jbGFzc0xpc3QuYWRkKCduYXYtZGF0ZScpO1xuXG4gICAgY29uc3QgbmF2RGF0ZUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXZEYXRlLmFwcGVuZENoaWxkKG5hdkRhdGVJdGVtQ29udGFpbmVyKTtcbiAgICBuYXZEYXRlSXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXYtZGF0ZS1pdGVtLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IG5hdlNwYWNlcyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIG5hdlNwYWNlcy5wdXNoKCcnKVxuICAgIH1cblxuICAgIG5hdlNwYWNlcy5mb3JFYWNoKChlKT0+e1xuICAgICAgICBjb25zdCBuYXZEYXRlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYXZEYXRlSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZEYXRlSXRlbSk7XG4gICAgICAgIG5hdkRhdGVJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1kYXRlLWl0ZW0nKVxuICAgIH0pXG5cblxuXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuXG5cblxuICAgIGNvbnN0IGxTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluLmFwcGVuZENoaWxkKGxTZWN0aW9uKTtcbiAgICBsU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdsLXNlY3Rpb24nKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxTZWN0aW9uLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdCcpXG5cblxuXG5cbiAgICBjb25zdCByU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoclNlY3Rpb24pO1xuICAgIHJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Itc2VjdGlvbicpXG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCd0YXNrcycpXG5cbn07XG5cbmV4cG9ydCB7ZWxlbWVudHN9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9