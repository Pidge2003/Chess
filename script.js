// Select all elements with the class 'square' and add a click event listener to each
document.querySelectorAll('.square').forEach((square, index) => {
    square.addEventListener('click', () => {
      // Remove 'highlight' class from all squares
      clearHighlights();
  
      // Add 'highlight' class to the clicked square
      square.classList.add('highlight');
  
      // Log the index of the clicked square to the console
      console.log(`Square clicked: index ${index}`);
    });
  });
  
  // Function to remove 'highlight' class from all squares
  function clearHighlights() {
    document.querySelectorAll('.square').forEach(square => {
      square.classList.remove('highlight');
    });
  }
  