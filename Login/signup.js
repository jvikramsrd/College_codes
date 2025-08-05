// DOM elements
const signupForm = document.getElementById('signupForm');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const messageDiv = document.getElementById('message');

// Form submission handler
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    // Basic validation
    if (!fullname || !email || !username || !password || !confirmPassword) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Username validation
    if (username.length < 3) {
        showMessage('Username must be at least 3 characters long', 'error');
        return;
    }
    
    // Password validation
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long', 'error');
        return;
    }
    
    // Confirm password validation
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    // Success
    showMessage('Account created successfully! Redirecting to login...', 'success');
    
    // Redirect to login page after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message function
function showMessage(text, type = 'info') {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
        hideMessage();
    }, 4000);
}

// Hide message function
function hideMessage() {
    messageDiv.style.display = 'none';
    messageDiv.className = 'message';
}

// Real-time validation feedback
function addValidationFeedback() {
    // Email validation
    emailInput.addEventListener('blur', function() {
        if (this.value && !isValidEmail(this.value)) {
            showMessage('Please enter a valid email address', 'error');
        }
    });
    
    // Password confirmation validation
    confirmPasswordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const confirmPassword = this.value;
        
        if (confirmPassword && password !== confirmPassword) {
            this.style.borderColor = '#dc3545';
        } else if (confirmPassword) {
            this.style.borderColor = '#28a745';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
    
    // Password strength indicator
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        
        if (password.length > 0 && password.length < 6) {
            this.style.borderColor = '#dc3545';
        } else if (password.length >= 6) {
            this.style.borderColor = '#28a745';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
}

// Initialize validation when page loads
document.addEventListener('DOMContentLoaded', function() {
    addValidationFeedback();
});
