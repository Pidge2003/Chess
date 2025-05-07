document.querySelectorAll('.square').forEach((square, index) => {
    square.addEventListener('click', () => {
      clearHighlights();
      square.classList.add('highlight');
      console.log(`Square clicked: index ${index}`);
    });
  });
  
  function clearHighlights() {
    document.querySelectorAll('.square').forEach(square => {
      square.classList.remove('highlight');
    });
  }
  