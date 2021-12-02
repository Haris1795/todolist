import {submit} from './projectBtn'
import editImg from './asset/resource/edit.png'
import trashImg from './asset/resource/trash.png'
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

        button.addEventListener('click', submit);

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
        editIcon.src = editImg
        iconContainer.appendChild(editIcon)
        editIcon.classList.add('icon')
        editIcon.classList.add('icon-edit')

        const trashIcon = document.createElement('img')
        trashIcon.src = trashImg
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

export {domElements}