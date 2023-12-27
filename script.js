document.addEventListener("DOMContentLoaded", function() {
    animateLogo();
    popPartyPoppers();
});

function animateLogo() {
    anime({
        targets: '#animated-logo',
        translateX: 250, // Adjust the logo animation properties
        easing: 'easeInOutQuad',
        duration: 1000,
        complete: function() {
            document.getElementById('instagram-handle').classList.remove('hidden');
        }
    });
}

function popPartyPoppers() {
    anime({
        targets: '.party-popper',
        translateY: -150, // Adjust the popper animation properties
        easing: 'easeInOutQuad',
        duration: 1500,
        delay: anime.stagger(200),
        complete: function() {
            document.getElementById('poppers-container').style.display = 'none';
        }
    });
}
