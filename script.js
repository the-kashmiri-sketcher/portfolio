
// ===== The Kashmiri Sketcher =====

// Fade in when page loads
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Gallery image click (lightbox)
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.className = "lightbox";

        overlay.innerHTML = `
            <span class="close">&times;</span>
            <img src="${img.src}">
        `;

        document.body.appendChild(overlay);

        overlay.onclick = () => {
            overlay.remove();
        };

    });

});

// Scroll animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});

console.log("Welcome to The Kashmiri Sketcher");
