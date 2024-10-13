document.addEventListener("DOMContentLoaded", (e) => {


    function newItem() {
        const li = document.createElement("li");
        const inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myList").appendChild(li);

            var deleteButton = document.createElement("Span");
            var txt = document.createTextNode("Delete");
            deleteButton.className = "delete";
            deleteButton.appendChild(txt);
            li.appendChild(deleteButton);

            deleteButton.onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
        document.getElementById("myInput").value = "";
    }
    document.querySelector("#addBtn").addEventListener("click", newItem);



















});