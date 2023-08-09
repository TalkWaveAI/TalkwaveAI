function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the animations on scroll
function animateOnScroll() {
    const sections = document.querySelectorAll(".fade-in");
    const button = document.querySelector(".slide-up");
    const serviceItems = document.querySelectorAll(".slide-in");

    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add("fade-in-visible");
        }
    });

    if (isInViewport(button)) {
        button.classList.add("slide-up-visible");
    }

    serviceItems.forEach((item) => {
        if (isInViewport(item)) {
            item.classList.add("services-enter-done");
        }
    });
}

// Event listener for scroll to trigger animations
window.addEventListener("scroll", animateOnScroll);

// Initial call to animateOnScroll on page load
animateOnScroll();