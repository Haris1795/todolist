"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["dom"],{

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domElements": () => (/* binding */ domElements)
/* harmony export */ });
/* harmony import */ var _projectBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectBtn */ "./src/projectBtn.js");
/* harmony import */ var _asset_resource_edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/resource/edit.png */ "./src/asset/resource/edit.png");
/* harmony import */ var _asset_resource_trash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/resource/trash.png */ "./src/asset/resource/trash.png");



function elements() {

    const rSection = document.createElement('div');
    main.appendChild(rSection);
    rSection.classList.add('r-section')

    const tasks = document.createElement('div');
    rSection.appendChild(tasks);
    tasks.classList.add('tasks')

}

const domElements = (() => {

    const body = document.querySelector('body'),
     container = document.createElement('div'),
     nav = document.createElement('nav'),
     header = document.createElement('h3'),
     navDate = document.createElement('nav'),
     navDateItemContainer = document.createElement('nav'),
     main = document.createElement('main');


     const createMainElement = () => {
        body.appendChild(container);
        container.classList.add('container');

        container.appendChild(nav);
        nav.classList.add('nav-bar');

        nav.appendChild(header);
        header.innerText = 'TO DO List'
        header.classList.add('title');

    
        container.appendChild(navDate);
        navDate.classList.add('nav-date');

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

        container.appendChild(main);
        main.classList.add('main');

     }

     const createLeftSection = () => {
        const lSection = document.createElement('div')
        main.appendChild(lSection);
        lSection.classList.add('l-section');

        const newProjectCreate = document.createElement('div')
        lSection.appendChild(newProjectCreate);
        newProjectCreate.classList.add('new-project-create');

        const input = document.createElement('input');
        newProjectCreate.appendChild(input);
        input.classList.add('input-project-name');
        input.placeholder = 'Enter the name of your project here'

        const button = document.createElement('button');
        newProjectCreate.appendChild(button);
        button.classList.add('btn');
        button.innerText = 'Submit new project'

        button.addEventListener('click', _projectBtn__WEBPACK_IMPORTED_MODULE_0__.submit);

        const projectList = document.createElement('div');
        lSection.appendChild(projectList);
        projectList.classList.add('project-list')
     }

     const createNewProject = () => {
        const input = document.querySelector('.input-project-name')
        const projectList = document.querySelector('.project-list')
        const newProject = document.createElement('div')
        const projectNameContainer = document.createElement('div')
        const iconContainer = document.createElement('div')
        const projectContainer = document.createElement('div')
        
        projectList.appendChild(projectContainer)
        projectContainer.classList.add('project-container')

        projectContainer.appendChild(projectNameContainer);
        projectNameContainer.classList.add('name-container')

        projectNameContainer.appendChild(newProject)
        newProject.classList.add('new-project');
        newProject.textContent = input.value;

        projectContainer.appendChild(iconContainer)
        iconContainer.classList.add('icon-container')

        const plus = document.createElement('div')
        plus.textContent = '+'
        iconContainer.appendChild(plus)
        plus.classList.add('icon')
        plus.classList.add('icon-plus')

        const editIcon = document.createElement('img')
        editIcon.src = _asset_resource_edit_png__WEBPACK_IMPORTED_MODULE_1__
        iconContainer.appendChild(editIcon)
        editIcon.classList.add('icon')
        editIcon.classList.add('icon-edit')

        const trashIcon = document.createElement('img')
        trashIcon.src = _asset_resource_trash_png__WEBPACK_IMPORTED_MODULE_2__
        iconContainer.appendChild(trashIcon)
        trashIcon.classList.add('icon')
        trashIcon.classList.add('tooltip')

        trashIcon.addEventListener('click', (e) => {
            projectContainer.remove()
        })

        editIcon.addEventListener('click', () => {
            const newName = prompt('Please enter a new name for your project')
            if (newName != null) {
                newProject.textContent = newName
            }
        })

     }




     const createNewProjectEntry = () => {
         const newEntryWindow = document.createElement('div')
     };


     return {
         createMainElement,
         createLeftSection,
         createNewProject,
         createNewProjectEntry
     };
})();



/***/ }),

/***/ "./src/projectBtn.js":
/*!***************************!*\
  !*** ./src/projectBtn.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submit": () => (/* binding */ submit)
/* harmony export */ });
/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMstuff */ "./src/DOMstuff.js");


const submit = () => {
    const input = document.querySelector('.input-project-name')
    if(input.value === '') {
        return
    }
    else {
        _DOMstuff__WEBPACK_IMPORTED_MODULE_0__.domElements.createNewProject()
        input.value = ''
    }
}



/***/ }),

/***/ "./src/asset/resource/edit.png":
/*!*************************************!*\
  !*** ./src/asset/resource/edit.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68a49ca563881bd204f5.png";

/***/ }),

/***/ "./src/asset/resource/trash.png":
/*!**************************************!*\
  !*** ./src/asset/resource/trash.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f67d029775a6fe4aef84.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOMstuff.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDWTtBQUNFO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsK0NBQU07O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixxREFBTztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0RBQVE7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SnVDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUE0QjtBQUNwQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET01zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0QnRuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3VibWl0fSBmcm9tICcuL3Byb2plY3RCdG4nXG5pbXBvcnQgZWRpdEltZyBmcm9tICcuL2Fzc2V0L3Jlc291cmNlL2VkaXQucG5nJ1xuaW1wb3J0IHRyYXNoSW1nIGZyb20gJy4vYXNzZXQvcmVzb3VyY2UvdHJhc2gucG5nJ1xuZnVuY3Rpb24gZWxlbWVudHMoKSB7XG5cbiAgICBjb25zdCByU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoclNlY3Rpb24pO1xuICAgIHJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Itc2VjdGlvbicpXG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCd0YXNrcycpXG5cbn1cblxuY29uc3QgZG9tRWxlbWVudHMgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbiAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgIG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpLFxuICAgICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpLFxuICAgICBuYXZEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JyksXG4gICAgIG5hdkRhdGVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JyksXG4gICAgIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cblxuICAgICBjb25zdCBjcmVhdGVNYWluRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG5cbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSAnVE8gRE8gTGlzdCdcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkRhdGUpO1xuICAgICAgICBuYXZEYXRlLmNsYXNzTGlzdC5hZGQoJ25hdi1kYXRlJyk7XG5cbiAgICAgICAgbmF2RGF0ZS5hcHBlbmRDaGlsZChuYXZEYXRlSXRlbUNvbnRhaW5lcik7XG4gICAgICAgIG5hdkRhdGVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1kYXRlLWl0ZW0tY29udGFpbmVyJyk7XG4gICAgXG4gICAgICAgIGxldCBuYXZTcGFjZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIG5hdlNwYWNlcy5wdXNoKCcnKVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIG5hdlNwYWNlcy5mb3JFYWNoKChlKT0+e1xuICAgICAgICAgICAgY29uc3QgbmF2RGF0ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBuYXZEYXRlSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZEYXRlSXRlbSk7XG4gICAgICAgICAgICBuYXZEYXRlSXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtZGF0ZS1pdGVtJylcbiAgICAgICAgfSlcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgIH1cblxuICAgICBjb25zdCBjcmVhdGVMZWZ0U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGxTZWN0aW9uKTtcbiAgICAgICAgbFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbC1zZWN0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxTZWN0aW9uLmFwcGVuZENoaWxkKG5ld1Byb2plY3RDcmVhdGUpO1xuICAgICAgICBuZXdQcm9qZWN0Q3JlYXRlLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWNyZWF0ZScpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmV3UHJvamVjdENyZWF0ZS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXByb2plY3QtbmFtZScpO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3QgaGVyZSdcblxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3UHJvamVjdENyZWF0ZS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnU3VibWl0IG5ldyBwcm9qZWN0J1xuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKVxuICAgICB9XG5cbiAgICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtcHJvamVjdC1uYW1lJylcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JylcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpXG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hbWUtY29udGFpbmVyJylcblxuICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KVxuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0Jyk7XG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpXG4gICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaWNvbi1jb250YWluZXInKVxuXG4gICAgICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwbHVzLnRleHRDb250ZW50ID0gJysnXG4gICAgICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQocGx1cylcbiAgICAgICAgcGx1cy5jbGFzc0xpc3QuYWRkKCdpY29uJylcbiAgICAgICAgcGx1cy5jbGFzc0xpc3QuYWRkKCdpY29uLXBsdXMnKVxuXG4gICAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgZWRpdEljb24uc3JjID0gZWRpdEltZ1xuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRJY29uKVxuICAgICAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJylcbiAgICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnaWNvbi1lZGl0JylcblxuICAgICAgICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICB0cmFzaEljb24uc3JjID0gdHJhc2hJbWdcbiAgICAgICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmFzaEljb24pXG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJylcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKVxuXG4gICAgICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgYSBuZXcgbmFtZSBmb3IgeW91ciBwcm9qZWN0JylcbiAgICAgICAgICAgIGlmIChuZXdOYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gbmV3TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgIH1cblxuXG5cblxuICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0RW50cnkgPSAoKSA9PiB7XG4gICAgICAgICBjb25zdCBuZXdFbnRyeVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgIH07XG5cblxuICAgICByZXR1cm4ge1xuICAgICAgICAgY3JlYXRlTWFpbkVsZW1lbnQsXG4gICAgICAgICBjcmVhdGVMZWZ0U2VjdGlvbixcbiAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QsXG4gICAgICAgICBjcmVhdGVOZXdQcm9qZWN0RW50cnlcbiAgICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7ZG9tRWxlbWVudHN9IiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tIFwiLi9ET01zdHVmZlwiXG5cbmNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1wcm9qZWN0LW5hbWUnKVxuICAgIGlmKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLmNyZWF0ZU5ld1Byb2plY3QoKVxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgfVxufVxuXG5leHBvcnQge3N1Ym1pdH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=