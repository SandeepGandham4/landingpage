// Smooth scroll to section when clicking nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    });
});

// Form submission (you can add form validation and AJAX)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    // Handle form submission (e.g., send data to server)
    console.log(formData.get('name'), formData.get('email'), formData.get('message'));
    alert('Message sent successfully!');
});
