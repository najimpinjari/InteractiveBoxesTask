//// Select all boxes and log if any are found
//const boxes = document.querySelectorAll('.box');

//if (boxes.length === 0) {
//    console.warn('No boxes found in the DOM.');
//} else {
//    boxes.forEach(box => {
//        const options = box.querySelectorAll('.options select');

//        if (options.length === 0) {
//            console.warn('No dropdowns found in this box:', box);
//            return; // Skip further processing for this box
//        }

//        // Show all dropdowns when the mouse enters the box
//        box.addEventListener('mouseenter', () => {
//            options.forEach(option => {
//                if (option) {
//                    option.style.display = 'block';
//                }
//            });
//        });

//        // Hide all dropdowns when the mouse leaves the box
//        box.addEventListener('mouseleave', () => {
//            options.forEach(option => {
//                if (option) {
//                    option.style.display = 'none';
//                }
//            });
//        });

//        // Ensure dropdowns remain visible when the mouse is over them
//        options.forEach(option => {
//            option.addEventListener('mouseenter', () => {
//                if (option) {
//                    option.style.display = 'block';
//                }
//            });

//            option.addEventListener('mouseleave', (event) => {
//                if (option && !box.contains(event.relatedTarget)) {
//                    option.style.display = 'none';
//                }
//            });
//        });
//    });
//}
