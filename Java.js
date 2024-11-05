// JavaScript code for interactivity

// Responsive Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
    const navlinks = document.getElementById("navlinks");
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("nav-toggle");
    toggleButton.innerHTML = `<i class="fas fa-bars"></i>`;
    document.querySelector("nav").appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        navlinks.classList.toggle("nav-links-active");
    });
});

// Add hover effect to Campus and Facilities images
const campusImages = document.querySelectorAll(".col img");
const facilityImages = document.querySelectorAll(".f-col img");

campusImages.forEach((img) => {
    img.addEventListener("mouseenter", () => img.style.transform = "scale(1.1)");
    img.addEventListener("mouseleave", () => img.style.transform = "scale(1)");
});

facilityImages.forEach((img) => {
    img.addEventListener("mouseenter", () => img.style.transform = "scale(1.1)");
    img.addEventListener("mouseleave", () => img.style.transform = "scale(1)");
});

// "Back to Top" Button
const backToTopButton = document.createElement("button");
backToTopButton.classList.add("back-to-top");
backToTopButton.innerHTML = "⬆️";
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Styling for the "back-to-top" button
const style = document.createElement("style");
style.innerHTML = `
    .nav-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 24px;
    }

    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        background-color: #333;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
    }

    @media (max-width: 768px) {
        .nav-toggle {
            display: block;
        }
        .nav-links {
            display: none;
        }
        .nav-links-active {
            display: block;
        }
    }
`;
document.head.appendChild(style);
