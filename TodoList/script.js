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

            var editButton = document.createElement("Span");
            var txtEdit = document.createTextNode("Edit");
            editButton.className = "edit";
            editButton.appendChild(txtEdit);
            li.appendChild(editButton);


            deleteButton.onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }

            editButton.onclick = function () {
                var li = this.parentElement;
                var currentText = li.firstChild.nodeValue;
                
                // Create input box to edit the current text
                var inputField = document.createElement("input");
                inputField.type = "text";
                inputField.value = currentText;
                li.firstChild.nodeValue = ''; // Clear the existing text

                // Append input box to list item
                li.insertBefore(inputField, li.firstChild);

                // Replace the "Edit" button with "Save" button
                editButton.textContent = "Save";

                // Handle save functionality
                editButton.onclick = function () {
                    const newText = inputField.value;
                    li.firstChild.nodeValue = newText;
                    li.removeChild(inputField);
                    editButton.textContent = "Edit"; // Revert button back to "Edit"
                }
            }
        }
        document.getElementById("myInput").value = "";
    }
    document.querySelector("#addBtn").addEventListener("click", newItem);



















});