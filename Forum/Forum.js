
// Function to load saved fields from localStorage
window.onload = function() {
    loadSavedFields();
};

// Function to load saved fields from localStorage
function loadSavedFields() {
    const savedFields = JSON.parse(localStorage.getItem('savedFields')) || [];
    console.log(savedFields); // Log saved fields to console

    // Loop through saved fields and add rows to the table
    savedFields.forEach(field => {
        addRow(field.apiKey, field.username);
    });
}

// Function to add a new row for a new API key and username
function addNewRow() {
    addRow('New API Key', 'New Username');
}

// Function to add a new row with specific API key and username
function addRow(apiKey, username) {
    const table = document.getElementById('apiKeyTable');
    const newRow = table.insertRow(-1);

    // Insert cells for API key and username
    const apiKeyCell = newRow.insertCell(0);
    apiKeyCell.contentEditable = true;
    apiKeyCell.textContent = apiKey;

    const usernameCell = newRow.insertCell(1);
    usernameCell.contentEditable = true;
    usernameCell.textContent = username;

    // Insert cells for actions (delete and copy buttons)
    const actionsCell = newRow.insertCell(2);
    actionsCell.innerHTML = `
        <button onclick="deleteFields(this)">Delete</button>
        <button onclick="copyApiKey(this)">Copy API Key</button>
    `;

    // Add event listeners to detect cell content changes
    apiKeyCell.addEventListener('input', saveFields);
    usernameCell.addEventListener('input', saveFields);

    // Add a button after cell editing
    apiKeyCell.addEventListener('blur', addEditButton);
    usernameCell.addEventListener('blur', addEditButton);
    
    // Save fields after adding a new row
    saveFields();
}

// Function to add an edit button after cell editing
function addEditButton(event) {
    const cell = event.target;
    const row = cell.parentNode;

    // Check if the edit button already exists
    if (row.cells[2].querySelector('.edit-button')) return;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = function() {
        // Handle the edit button click event
        // For example, you can implement an edit functionality here
        console.log('Edit button clicked');
    };

    row.cells[2].appendChild(editButton);
}

// Function to delete fields
function deleteFields(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Save fields after deleting a row
    saveFields();
}

// Function to copy API key to clipboard
function copyApiKey(button) {
    const apiKey = button.parentNode.parentNode.cells[0].textContent;
    navigator.clipboard.writeText(apiKey)
        .then(() => alert('API Key copied to clipboard!'))
        .catch(err => console.error('Unable to copy API key', err));
}

// Function to save fields to localStorage
function saveFields() {
    const table = document.getElementById('apiKeyTable');
    const rows = table.rows;
    const savedFields = [];

    for (let i = 1; i < rows.length; i++) { // Start from index 1 to skip header row
        const row = rows[i];
        const apiKey = row.cells[0].textContent;
        const username = row.cells[1].textContent;
        savedFields.push({ apiKey, username });
    }

    localStorage.setItem('savedFields', JSON.stringify(savedFields));
}