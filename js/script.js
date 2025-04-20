var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Graphic Designer","YouTuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll(".main-content > section");

    // Hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = "none";
        });
    }

    // Remove 'active' class from all nav links
    function deactivateAllNavLinks() {
        navLinks.forEach(link => {
            link.classList.remove("active");
        });
    }

    // Show clicked section based on nav index
    navLinks.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            hideAllSections();
            deactivateAllNavLinks();

            // Show section that matches this nav link's index
            sections[index].style.display = "block";

            // Add 'active' class to clicked nav link
            link.classList.add("active");
        });
    });

    // Initial state: show Home section, hide others
    hideAllSections();
    sections[0].style.display = "block";
});