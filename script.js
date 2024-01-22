document.addEventListener('mousemove', function(e) {
    var light = document.getElementById('cursor-light');
    light.style.opacity = '1'; // Make the light fully visible
    light.style.transform = `translate(${e.pageX - light.offsetWidth / 2}px, ${e.pageY - light.offsetHeight / 2}px)`;
});

document.addEventListener('mouseout', function() {
    var light = document.getElementById('cursor-light');
    light.style.opacity = '0'; // Hide the light when not over the document
});