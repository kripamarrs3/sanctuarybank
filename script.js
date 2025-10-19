// Wait for the entire page to load before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- Login Form Logic ---
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
    }

    // --- Show/Hide Password Logic ---
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
        });
    }

    // --- Testimonial Carousel Logic ---
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
        slideInterval = setInterval(nextSlide, 5000); 
    }
});
