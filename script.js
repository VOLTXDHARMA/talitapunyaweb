// Handle form submission to pass data between pages
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const photo = document.getElementById("photo").files[0];

            if (name && photo) {
                const reader = new FileReader();
                reader.onload = () => {
                    sessionStorage.setItem("userName", name);
                    sessionStorage.setItem("userPhoto", reader.result);
                    window.location.href = "main.html";
                };
                reader.readAsDataURL(photo);
            }
        });
    }

    // Main page interactivity
    const greeting = document.getElementById("greeting");
    const userPhoto = document.getElementById("user-photo");
    if (greeting && userPhoto) {
        const name = sessionStorage.getItem("userName");
        const photo = sessionStorage.getItem("userPhoto");

        if (name) {
            greeting.textContent = `Halo, ${name}!`;
        }
        if (photo) {
            userPhoto.src = photo;
            userPhoto.style.display = "block"; // Tampilkan foto
        }
    }

    // Make "Tidak!" button move randomly
    const noButton = document.getElementById("no-button");
    if (noButton) {
        noButton.addEventListener("mouseover", () => {
            const randomX = Math.random() * (window.innerWidth - 100);
            const randomY = Math.random() * (window.innerHeight - 50);
            noButton.style.position = "absolute";
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;
        });
    }
});
