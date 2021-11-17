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

export {elements}