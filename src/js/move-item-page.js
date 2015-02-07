app.moveItemPage = function () {
  // When our draggable item is clicked:
  $('.draggable-item').mousedown(function (e) {
    // Get the item that is being dragged
    var item = $(this);

    // Get the item's position relative to the document
    var offset = item.position();

    // Compute the offset of the mouse cusor in the
    // element, so if we click the middle of the element
    // we move the middle of the element, rather than
    // the top-left corner.
    var shiftX = e.pageX - offset.left;
    var shiftY = e.pageY - offset.top;

    // When the mouse moves, move the item
    $('body').on('mousemove', moveItem);

    // When the mouse button is released, drop the item
    $('body').on('mouseup', stopTracking);

    // Moves the item
    function moveItem(e) {
      // Set the item's top and left coordinate
      // based on the mouse position
      item.css({
        top: e.pageY - shiftY,
        left: e.pageX - shiftX
      });
    }

    // Unbind our body-level mouse events so we
    // don't run out of memory!
    function stopTracking() {
      $('body').off('mousemove', moveItem);
      $('body').off('mouseup', stopTracking);
    }
  });
};
