    document.addEventListener('DOMContentLoaded', function() {
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');

      function drawDot(event) {
        var x = event.clientX - canvas.offsetLeft;
        var y = event.clientY - canvas.offsetTop;
        context.beginPath();
        context.arc(x, y, 5, 0, 2 * Math.PI, false);
        context.fillStyle = 'black';
        context.fill();
      }

      canvas.addEventListener('click', drawDot);

      var clearButton = document.getElementById('clear-button');
      clearButton.addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      });
    });
