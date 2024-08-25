const scroll = new LocomotiveScroll({
    el: document.querySelector('.master'),
    smooth: true
});


document.addEventListener("DOMContentLoaded", function() {
    const hoverElements = document.querySelectorAll('#hoverelement'); 

    hoverElements.forEach((hoverElement) => {
        hoverElement.addEventListener('mouseover', function() {
            hoverElement.style.transform = 'scale(1.1)';
            hoverElement.style.boxShadow = '3px 2px 10px white';
           
        });

        hoverElement.addEventListener('mouseout', function() {
            hoverElement.style.transform = 'scale(1)';
            hoverElement.style.boxShadow = 'none';
        });
    });
});
