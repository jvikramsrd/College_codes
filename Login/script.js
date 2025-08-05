// DOM elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const messageDiv = document.getElementById('message');

// Form submission handler
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    
    // Basic validation
    if (!username || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Demo login check
    if (username === 'admin' && password === 'password') {
        showMessage('Login successful!', 'success');
    } else {
        showMessage('Invalid username or password', 'error');
    }
});

// Signup button handler - now handled by onclick in HTML
// signupBtn.addEventListener('click', function() {
//     showMessage('Signup functionality would be implemented here', 'info');
// });

// Show message function
function showMessage(text, type = 'info') {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        hideMessage();
    }, 3000);
}

// Hide message function
function hideMessage() {
    messageDiv.style.display = 'none';
    messageDiv.className = 'message';
}

// Demo instructions
console.log('Demo Login Credentials:');
console.log('Username: admin');
console.log('Password: password');
