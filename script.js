function showMessage() {
    alert("Welcome to CyberGuard! Learn how to stay safe online.");
}

function checkPassword() {

    let password = document.getElementById("passwordInput").value;
    let result = document.getElementById("result");

    if (password.length === 0) {
        result.innerHTML = "Please enter a password.";
    }
    else if (password.length < 6) {
        result.innerHTML = "❌ Weak Password";
    }
    else if (password.length < 10) {
        result.innerHTML = "⚠️ Medium Password";
    }
    else {
        result.innerHTML = "✅ Strong Password";
    }
}
