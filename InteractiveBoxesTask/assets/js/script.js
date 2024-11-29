// Select all boxes
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const dot = box.querySelector('.dot');
    const options = box.querySelector('.options');

    box.addEventListener('mouseenter', () => {
        // Change the dot color to dark when the box is selected
        dot.style.backgroundColor = '#004d40';

        // Display the options when hovering over the box
        options.style.display = 'flex';
    });

    box.addEventListener('mouseleave', () => {
        // Revert the dot color when the mouse leaves the box
        dot.style.backgroundColor = '#b0bec5';

        // Hide the options when the mouse leaves
        options.style.display = 'none';
    });
});
