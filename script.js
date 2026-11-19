document.querySelector('nav').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});

const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        alert("Mesajınız başarıyla gönderildi!"); // Placeholder for submission logic.
        form.reset(); // Resets the form fields
    });
});

Bu kod parçaları, modern bir teknoloji ve yazılım ajansı için tasarlanmış bir web sitesinin temel yapısını oluşturmaktadır. Responsive tasarımı ve modern görsel efektleriyle kullanıcı deneyimini arttırmayı hedeflemektedir.