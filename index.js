document.querySelector("form").addEventListener("submit", doctorForm);
function doctorForm(event) {
    event.preventDefault();
    var name1 = document.querySelector("#name").value;

    var doctorId = document.querySelector("#docID").value;
    var department = document.querySelector("#dept").value;
    var experience = Number(document.querySelector("#exp").value);
    var email = document.querySelector("#email").value;
    var mobile = document.querySelector("#mbl").value;
    
     console.log(name1);


    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = name1;
    var td2 = document.createElement("td");
    td2.innerHTML = doctorId;
    var td3 = document.createElement("td");
    td3.innerHTML = department;
    var td4 = document.createElement("td");
    td4.innerHTML = experience;
    var td5 = document.createElement("td");
    td5.innerHTML = email;
    var td6 = document.createElement("td");
    td6.innerHTML = mobile;

    var td7 = document.createElement("td");
    td7.innerHTML = "";
    if (experience > 5) {
        td7.innerHTML = "Senior";
    } else if (experience >= 2 && exp <= 5) {
        td7.innerHTML = "Junior";
    } else if (experience <= 1) {
        td7.innerHTML = "Trainee";
    }

    var td8 = document.createElement("td");
    td8.innerHTML = "Delete";
    td8.addEventListener("click", deleteRow);
   
    
    tr.append(td1, td2, td3, td4, td5, td6, td7,td8);
    document.querySelector("tbody").append(tr);


}
 function deleteRow(event) {
        event.target.parentNode.remove();
    }