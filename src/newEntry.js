const newEntry = () => {
    const container = document.querySelector('.container')
    const newEntryWindow = document.createElement('div')
    const newEntryForm = document.createElement('form')

    container.appendChild(newEntryWindow)
    newEntryWindow.classList.add('form')
    newEntryWindow.hidden = true;

    const h2 = document.createElement('h2')
    newEntryWindow.appendChild(h2)
    h2.textContent = 'ADD a New Project Entry'

    newEntryWindow.appendChild(newEntryForm)
    newEntryForm.classList.add('entryInfo')

    
}

export {newEntry}



<div class="form" hidden>
        <h2>ADD A NEW BOOK</h2>
        <form class="info" action="">
            <label for="bookName" class="bookName">Book Name:</label>
            <input type="text" name="bookName" id="inputStyle">
            <label for="bookName" class="authorName">Author Name:</label>
            <input type="text" name="authorName" id="inputStyle"> 
            <label for="bookName" class="image">Image URL:</label>
            <input type="text" placeholder="A default image is provided" name="imageLink" id="inputStyle">
            <label for="" class="nums">Number of Pages:</label>
            <input type="number" name="pageNum" id="inputNumStyle">
            <label class="check-container check">Read
                <input type="checkbox" class="checkyBox">
                <span class="checkmark"></span>
            </label>
            <div class="submitButtons">
                <button type="submit" class="bookSubmit">SUBMIT</button>
                <button type="submit" class="cancel">CANCEL</button>
            </div>
        </form>
    </div>