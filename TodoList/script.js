document.addEventListener("DOMContentLoaded", (e) => {
    loadItemsFromLocalStorage();

    function newItem(inputValue) {
        const li = document.createElement("li");
        const t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
            return; // Exit if input is empty
        }
        
        document.getElementById("myList").appendChild(li);

        const dateStamp = document.createElement("span");
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("en-US", {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        dateStamp.className = "date";
        dateStamp.textContent = ` ${formattedDate}`;
        li.appendChild(dateStamp);

        var deleteButton = document.createElement("span");
        deleteButton.className = "delete";
        deleteButton.appendChild(document.createTextNode("Delete"));
        li.appendChild(deleteButton);

        var editButton = document.createElement("span");
        editButton.className = "edit";
        editButton.appendChild(document.createTextNode("Edit"));
        li.appendChild(editButton);

        deleteButton.onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            removeItemFromLocalStorage(inputValue); // Remove from local storage
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

                li.innerHTML = '';

                // Add the new text to li
                li.appendChild(document.createTextNode(newText));
                saveItemToLocalStorage(newText); // Save the updated item

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
                    removeItemFromLocalStorage(newText); // Remove from local storage
                }
            }
        }

        document.getElementById("myInput").value = ""; // Clear the input
        saveItemToLocalStorage(inputValue); // Save to local storage
    }

    function saveItemToLocalStorage(item) {
        const items = JSON.parse(localStorage.getItem("myItems")) || [];
        items.push(item);
        localStorage.setItem("myItems", JSON.stringify(items));
    }

    function removeItemFromLocalStorage(item) {
        let items = JSON.parse(localStorage.getItem("myItems")) || [];
        items = items.filter(i => i !== item);
        localStorage.setItem("myItems", JSON.stringify(items));
    }

    function loadItemsFromLocalStorage() {
        const items = JSON.parse(localStorage.getItem("myItems")) || [];
        console.log(items)
        items.forEach(item => {
            newItem(item); // Call newItem for each loaded item
        });
    }
    

    document.querySelector("#addBtn").addEventListener("click", () => {
        const inputValue = document.getElementById("myInput").value;
        newItem(inputValue);
    });


});
