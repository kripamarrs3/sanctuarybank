// Wait for the entire page to load before running any scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Logic for the Login Page ---
    // First, check if we are on the login page by looking for the login form.
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        // If the form exists, then we can safely find the other login elements.
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('error-message');
        const togglePassword = document.getElementById('toggle-password');

        // Add the submit logic for the form.
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload
            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === "Ophelia" && password === "password123") {
                window.location.href = 'dashboard.html';
            } else {
                errorMessage.style.display = 'block';
            }
        });
        
        // Add the show/hide password logic.
        if (togglePassword && passwordInput) {
            togglePassword.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
            });
        }
    }

  
