// Animation code for element that spins on scroll 

// Listen for scroll
document.addEventListener('scroll', function () {
    // Grab element to spin
    const image = document.getElementById('scroll-spinning-element');
    // Scroll behavior    
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // Controls scroll speed
    const rotationDegrees = scrollPercentage * 720;
    // Apply transform rule to spinning element 
    image.style.transform = 'rotate(' + rotationDegrees + 'deg)';
});

