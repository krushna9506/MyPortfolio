// JavaScript for adding animations and interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Add a fade-in effect to all sections
    const sections = document.querySelectorAll('section, .content, .project-grid, .certificate-grid, .contact-form, .contact-info, .skills-grid');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out';
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.style.opacity = 1;
                    section.style.transform = 'translateY(0)';
                }
            });
        });
        observer.observe(section);
    });

    // Add hover effect to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.transition = 'transform 0.3s ease';
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Add hover effect to certificate cards
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Add a scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.padding = '10px';
    scrollToTopBtn.style.borderRadius = '50%';
    scrollToTopBtn.style.border = 'none';
    scrollToTopBtn.style.backgroundColor = '#333';
    scrollToTopBtn.style.color = '#fff';
    scrollToTopBtn.style.cursor = 'pointer';
    scrollToTopBtn.style.display = 'none';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Handle modal open and close without scrolling to the top
    document.querySelectorAll('.modal').forEach(modal => {
        const closeBtn = modal.querySelector('.close-btn');

        closeBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default hash change behavior
            modal.style.display = 'none'; // Hide the modal
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none'; // Close modal when clicking outside the image
            }
        });
    });
});