// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Find the login form, username field, password field, and error message in the HTML
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Check if we found the login form on the page
    if (loginForm) {
        // Listen for when the user tries to submit the form
        loginForm.addEventListener('submit', function(event) {
            
            // Prevent the form from actually submitting and reloading the page
            event.preventDefault();

            // Get the values the user typed into the fields
            const username = usernameInput.value;
            const password = passwordInput.value;

            // For now, let's say the correct login is "Ophelia" and "password123"
if (username === "Ophelia" && password === "password123") {
    // If login is correct, redirect to the dashboard page.
    window.location.href = 'dashboard.html';
            } else {
                // If login is incorrect, make the error message visible
                errorMessage.style.display = 'block';
            }
        });
    }
});
// --- Show/Hide Password Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            // Check the current type of the input
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Optional: Change the icon to an "eye-slash" when visible
            // For simplicity, we are just toggling visibility here.
        });
    }
});