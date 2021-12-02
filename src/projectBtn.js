import { domElements } from "./DOMstuff"

const submit = () => {
    const input = document.querySelector('.input-project-name')
    if(input.value === '') {
        return
    }
    else {
        domElements.createNewProject()
        input.value = ''
    }
}

export {submit}