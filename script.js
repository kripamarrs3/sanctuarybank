// Wait for the entire page to load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Logic for the Login Page ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('error-message');

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === "Ophelia" && password === "password123") {
                window.location.href = 'dashboard.html';
            } else {
                errorMessage.style.display = 'block';
            }
        });
        
        // Show/Hide Password logic (only runs if the login form exists)
        const togglePassword = document.getElementById('toggle-password');
        const passwordField = document.getElementById('password');
        if (togglePassword && passwordField) {
            togglePassword.addEventListener('click', function() {
                const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordField.setAttribute('type', type);
            });
        }
    }

    // --- Logic for the Testimonial Carousel (Homepage) ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length > 0 && dots.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            let newSlide = (currentSlide + 1) % slides.length;
            showSlide(newSlide);
        }
        
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                clearInterval(slideInterval);
                showSlide(parseInt(this.getAttribute('data-slide')));
                slideInterval = setInterval(nextSlide, 5000);
            });
        });

        // Start the rotation
        showSlide(0); // Show the first slide immediately
        slideInterval = setInterval(nextSlide, 5000); 
    }
});
