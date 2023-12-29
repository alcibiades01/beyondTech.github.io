document.addEventListener('DOMContentLoaded', function () {
    const joinForm = document.getElementById('joinForm');
    const membersList = document.getElementById('members');
    
    joinForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const name = nameInput.value;
        const email = emailInput.value;

        // Add the member to the list
        const memberItem = document.createElement('li');
        memberItem.textContent = `${name} - ${email}`;
        membersList.appendChild(memberItem);

        // Clear the form
        nameInput.value = '';
        emailInput.value = '';
    });
});

