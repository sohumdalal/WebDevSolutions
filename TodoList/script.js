document.addEventListener("DOMContentLoaded", (e) => {


    function newItem() {
        const li = document.createElement("li");
        const inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        }
        else {
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

            editButton.onclick = function handleEdit() {
                var li = this.parentElement;
                var currentText = li.firstChild.nodeValue;

                // Create input box to edit the current text
                var inputField = document.createElement("input");
                inputField.type = "text";
                inputField.value = currentText;
                li.firstChild.nodeValue = ''; // Clear the existing text

                // Append input box to list item
                li.insertBefore(inputField, li.firstChild);

                // Change "Edit" button text to "Save"
                this.textContent = "Save";

                // Change onclick to handle save functionality
                this.onclick = function handleSave() {
                    const newText = inputField.value;

                    // Clear the entire content of li
                    li.innerHTML = '';

                    // Add the new text to li
                    li.appendChild(document.createTextNode(newText));

                    // Re-create Edit button
                    const newEditButton = document.createElement("span");
                    newEditButton.className = "edit";
                    newEditButton.textContent = "Edit";
                    li.appendChild(newEditButton);

                    // Re-create Delete button
                    const newDeleteButton = document.createElement("span");
                    newDeleteButton.className = "delete";
                    newDeleteButton.textContent = "Delete";
                    li.appendChild(newDeleteButton);

                    // Reattach edit functionality to allow for multiple edits
                    newEditButton.onclick = handleEdit;

                    // Attach delete functionality
                    newDeleteButton.onclick = function () {
                        li.style.display = "none";
                    }
                }
            }
        }
        document.getElementById("myInput").value = "";
    }
    document.querySelector("#addBtn").addEventListener("click", newItem);



















});