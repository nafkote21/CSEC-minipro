
const contactBtn = document.getElementById('formbtn');
const contactForm = document.getElementById('contactform');

contactBtn.addEventListener('click', function() {
    contactForm.style.display = 'flex';
    

    contactBtn.style.display = 'none';
});


contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('name').value;
    alert("Thank you, " + userName + "! Your message has been sent.");
    contactForm.reset();
});