const submit = () => {
    const input = document.querySelector('.input-project-name')
    console.log('hello')

    if(input.value === '') {
        return
    }
    else {
        const projectList = document.querySelector('.project-list')
        const newProject = document.createElement('div')
        projectList.appendChild(newProject);
        newProject.classList.add('new-project');
        newProject.textContent = input.value;
    }
}

export {submit}