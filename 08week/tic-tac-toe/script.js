'use strict';

$(document).ready(function() {
  $(function() {
    var turn = 'X';
    $('[data-cell]').on('click', function() {
      if ($(this).text() === '') {
        $(this).text(turn);
        checkWin();
        if (turn === 'X') {
          turn = 'O';
        } else {
          turn = 'X';
        }
      }
    })
  //win conditions
  function checkWin() {
      if ($('[data-cell="0"]').text() === turn &&
        $('[data-cell="1"]').text() === turn &&
        $('[data-cell="2"]').text() === turn)
      {
        $('#announce-winner').text(`${turn} wins`);
      } else if ($('[data-cell="3"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="5"]').text() === turn)
      {
        $('#announce-winner').text(`${turn} wins`);
      } else if ($('[data-cell="6"]').text() === turn &&
        $('[data-cell="7"]').text() === turn &&
        $('[data-cell="8"]').text() === turn)
      {
        $('#announce-winner').text(`${turn} win`);
      } else if ($('[data-cell="0"]').text() === turn &&
        $('[data-cell="3"]').text() === turn &&
        $('[data-cell="6"]').text() === turn)
      {
        $('#announce-winner').text(`${turn} wins`);
      } else if ($('[data-cell="1"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="7"]').text() === turn)
      {
        $('#announce-winner').text(`${turn} wins`);
      } else if ($('[data-cell="2"]').text() === turn &&
        $('[data-cell="5"]').text() === turn &&
        $('[data-cell="8"]').text() === turn)
      {
        $('#announce-winner').text(`${turn} wins`);
      } else if ($('[data-cell="0"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="8"]').text() === turn)
      {
        $('#announce-winner').text(`${turn} wins`);
      } else if ($('[data-cell="2"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="6"]').text() === turn)
      {
        $('#announce-winner').text(`${turn} wins`);
      } else {
        $('#announce-winner').text('CATZZZ');
      }
    }
    $('#clear').click(function() {
    $('[data-cell]').empty();
    turn = 'X';
    $('#announce-winner').empty();
  })
  })
});
