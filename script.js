document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from(".hero-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });

    // Scroll-trigger animations for sections
    const sections = [".about", ".team", ".contact"];
    sections.forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });
    });
});
