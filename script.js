// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Rotate the #skills div by 360 degrees when it comes into view
const rotateSkillsOnScroll = () => {
    const skillsSection = document.querySelector('#skills > div'); // Targeting the inner div of #skills
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the #skills section is in the viewport
    if (skillsPosition < windowHeight - 100 && skillsPosition > 0) {
        skillsSection.style.transition = 'transform 1s ease-out'; // 1 second smooth rotation
        skillsSection.style.transform = 'rotate(360deg)'; // Rotate by 360 degrees
        window.removeEventListener('scroll', rotateSkillsOnScroll); // Remove event listener after animation
    }
};

// Rotate the Experience section by 360 degrees when it comes into view
const rotateExperienceOnScroll = () => {
    const experienceSection = document.querySelector('.experience-content'); // Targeting the experience content div
    const experiencePosition = experienceSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the experience section is in the viewport
    if (experiencePosition < windowHeight - 100 && experiencePosition > 0) {
        experienceSection.style.transition = 'transform 1s ease-out'; // 1 second smooth rotation
        experienceSection.style.transform = 'rotate(360deg)'; // Rotate by 360 degrees
        window.removeEventListener('scroll', rotateExperienceOnScroll); // Remove event listener after animation
    }
};

// Project cards animation on scroll
const projectCards = document.querySelectorAll('.project');

const animateProjects = () => {
    projectCards.forEach(project => {
        const projectPosition = project.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the project is in the viewport
        if (projectPosition < windowHeight - 100) {
            project.style.transform = 'translateX(0)';
            project.style.opacity = '1';
        }
    });
};

// Initial setup to position projects off-screen
projectCards.forEach(project => {
    if (project.getAttribute('data-direction') === 'left') {
        project.style.transform = 'translateX(-100%)';
    } else if (project.getAttribute('data-direction') === 'right') {
        project.style.transform = 'translateX(100%)';
    }
    project.style.opacity = '0';
    project.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out'; // Adjust duration as needed
});

// Listen for scroll events
window.addEventListener('scroll', () => {
    rotateSkillsOnScroll(); // Call the rotation function for skills section
    rotateExperienceOnScroll(); // Call the rotation function for experience section
    animateProjects(); // Call the animation function for project cards
});
