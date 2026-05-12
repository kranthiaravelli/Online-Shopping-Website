function showSection(sectionId, element) {
    let sections = document.querySelectorAll('section');
    let links = document.querySelectorAll('.nav_container a');

    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show selected section
    document.getElementById(sectionId).style.display = 'block';

    // Remove active class from all links
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to clicked link
    element.classList.add('active');
}

document.querySelectorAll(".viewmore").forEach(btn => {
    btn.addEventListener("click", function () {
        const card = this.closest(".product_card");

        card.classList.toggle("active");

        this.textContent = card.classList.contains("active")
        ? "Hide Details"
        : "View Details";
    });
});