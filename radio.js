// Get the iframe element
const iframe = document.getElementById('iframe');

// Variables to store mouse position and iframe position
let offsetX, offsetY, iframeX, iframeY;

// Function to handle mouse down event
function onMouseDown(event) {
    offsetX = event.clientX;
    offsetY = event.clientY;
    iframeX = iframe.offsetLeft;
    iframeY = iframe.offsetTop;

    // Add event listeners for mouse move and mouse up events
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

// Function to handle mouse move event
function onMouseMove(event) {
    const newX = iframeX + event.clientX - offsetX;
    const newY = iframeY + event.clientY - offsetY;

    // Update the iframe position
    iframe.style.left = `${newX}px`;
    iframe.style.top = `${newY}px`;
}

// Function to handle mouse up event
function onMouseUp() {
    // Remove event listeners for mouse move and mouse up events
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

// Add event listener for mouse down event on the iframe
iframe.addEventListener('mousedown', onMouseDown);
