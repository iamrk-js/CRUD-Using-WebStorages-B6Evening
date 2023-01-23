let cl = console.log;
// CRUD >> create , read, update and delete
const studentForm = document.getElementById("studentForm");
const stdContainer = document.getElementById("stdContainer");
const fnameControl = document.getElementById("fname");
const lnameControl = document.getElementById("lname");
const emailControl = document.getElementById("email");
const contactControl = document.getElementById("contact");
let stdArray = [
];

const onEdit = () => {
    cl("Editted !!!")
}
const onDelete = () => {
    cl("Deleted !!!")
}
const templating = (arr) => {
    let result = '';
    arr.forEach((std, i) => {
        result += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${std.fname}</td>
                    <td>${std.lname}</td>
                    <td>${std.email}</td>
                    <td>${std.contact}</td>
                    <td>
                         <button class="btn btn-primary" onclick="onEdit()">Edit</button>
                    </td>
                    <td>
                         <button class="btn btn-danger" onclick="onDelete()">Delete</button>
                    </td>
                </tr>
            
                `
    })
    stdContainer.innerHTML = result;
}
if(localStorage.getItem("stdInfo")){
    stdArray = JSON.parse(localStorage.getItem("stdInfo"));
    templating(stdArray);
}
const onStdFormSubmit = (eve) => {
    eve.preventDefault();
    // cl("Submitted !!!", eve)
    let obj = {
        fname: fnameControl.value,
        lname: lnameControl.value,
        email: emailControl.value,
        contact: contactControl.value
    }
    stdArray.push(obj);
    localStorage.setItem("stdInfo", JSON.stringify(stdArray))
    cl(stdArray);
    templating(stdArray);
    studentForm.reset()
}


// cl(document.getElementsByClassName("editBtn"))



studentForm.addEventListener("submit", onStdFormSubmit)