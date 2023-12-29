document.addEventListener('DOMContentLoaded', function () {
    // Initial content for the welcome text
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.textContent = 'Welcome to BeyondTech Club';

    // Initial content for the passionate text
    const passionateText = document.getElementById('passionate-text');
    passionateText.textContent = 'Passionate about technology and beyond!';

    // Example of changing content dynamically after a delay (you can customize this based on your needs)
    setTimeout(function () {
        welcomeText.textContent = 'Discover the Future with BeyondTech Club';
        passionateText.textContent = 'Join us in exploring the latest in technology.';
    }, 3000); // Change content after 3 seconds (3000 milliseconds)
    
    // Example of handling form submission (you can customize this based on your needs)
    const joinForm = document.getElementById('joinForm');
    joinForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const name = nameInput.value;
        const email = emailInput.value;

        if (name && email) {
            // Add the new member to the list (you can customize this based on your needs)
            addMemberToList(name, email);

            // Clear the form
            nameInput.value = '';
            emailInput.value = '';
        } else {
            alert('Please provide both name and email.');
        }
    });
});

// Function to add a new member to the list
function addMemberToList(name, email) {
    const membersList = document.getElementById('members');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${email}`;
    membersList.appendChild(listItem);
}


