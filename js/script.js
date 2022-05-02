
let createNewTaskBtn = document.getElementById("btnThatAddsChores")
let theTaskForm = document.getElementById("taskSubmissionForm")
let count = 0

createNewTaskBtn.addEventListener("click", (e) =>{
    console.log("supposed to create a new input")
    count++
    console.log(count)
    let newSection = document.createElement("section")
    newSection.setAttribute("class", "mb-4")

    let theMarkUp = `
        <label for="chore${count}" class="form-label">input chore</label>
        <input type="text" name="chore${count}" class="form-control">
    `
    newSection.innerHTML = theMarkUp
    theTaskForm.appendChild(newSection)
})


// console.log("wehere")