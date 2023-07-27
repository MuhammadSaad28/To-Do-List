// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("search");
    const addButton = document.getElementById("enter");
    const listContainer = document.getElementById("list");
  
    // Array to store the to-do items
    let toDoListItems = [];
  
    // Function to handle the to-do items in the list
    function ToDoList() {
      listContainer.innerHTML = "";
      toDoListItems.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
  
        const itemText = document.createElement("div");
        itemText.className = "text";
        itemText.textContent = item;
  
        const itemButtons = document.createElement("div");
        itemButtons.className = "buttons";
  
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editItem(index));
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteItem(index));
  
        itemButtons.appendChild(editButton);
        itemButtons.appendChild(deleteButton);
  
        itemDiv.appendChild(itemText);
        itemDiv.appendChild(itemButtons);
  
        listContainer.appendChild(itemDiv);
      });
    }
  
    // Function to add a new item to the to-do list
    function addItem() {
      const newItem = inputField.value.trim();
      if (newItem !== "") {
        toDoListItems.push(newItem);
        inputField.value = "";
        ToDoList();
      }
    }
  
    
    // Function to edit an existing item in the to-do list
function editItem(index) {
    const editInputField = document.createElement("input");
    editInputField.type = "text";
    editInputField.className = "search";
    editInputField.value = toDoListItems[index];
    
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => saveEditedItem(index, editInputField));
    
    
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", ToDoList);
    
    const editButtonsDiv = document.createElement("div");
    editButtonsDiv.appendChild(saveButton);
    editButtonsDiv.appendChild(cancelButton);
    
    const itemDiv = listContainer.children[index];
    itemDiv.innerHTML = ""; // Clear the existing content
    
    const itemText = document.createElement("div");
    itemText.className = "text";
    itemText.appendChild(editInputField);
    
    const itemButtons = document.createElement("div");
    itemButtons.className = "buttons";
    itemButtons.appendChild(editButtonsDiv);
    
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemButtons);
    
    editInputField.focus();
  }
  
  // Function to save the edited item in the to-do list
  function saveEditedItem(index, editInputField) {
    const editedItem = editInputField.value.trim();
    if (editedItem !== "") {
      toDoListItems[index] = editedItem;
    }
    ToDoList();
  }
  
  
    // Function to delete an item from the to-do list
    function deleteItem(index) {
      toDoListItems.splice(index, 1);
      ToDoList();
    }
  
    addButton.addEventListener("click", addItem);
  
    // Initial ing of the to-do list
    ToDoList();
  });
  