```javascript
// Order Now Button
function orderNow() {
    alert("☕ Welcome to My Cafe!\n\nYour order can be placed here.");
}

// Table Booking
document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let people = document.querySelector('input[type="number"]').value;
    let date = document.querySelector('input[type="date"]').value;

    if (name === "" || email === "" || people === "" || date === "") {
        alert("⚠️ Please fill all the details.");
        return;
    }

    alert(
        "✅ Table Booked Successfully!\n\n" +
        "Name: " + name +
        "\nEmail: " + email +
        "\nPeople: " + people +
        "\nDate: " + date
    );

    // Clear form
    document.querySelector("form").reset();
});


// Welcome Message when website loads
window.addEventListener("load", function() {
    console.log("☕ Welcome to My Cafe Restaurant!");
});
```
