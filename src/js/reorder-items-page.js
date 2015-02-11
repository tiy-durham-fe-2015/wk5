// A demo showing how you might reorder items in a
// list using drag/drop
app.reorderItemsPage = function () {
  // Bind to any reorderable list items
  $('.reorderable-list-item').mousedown(function (e) {
    // Get the item we are moving
    var item = $(this);

    // Give it a class to make it look distinct
    item.addClass('reordering-list-item');

    // Disable text selection when dragging
    $(document).on('selectstart dragstart', cancelTextSelection);

    // When the mouse is up, we are all done!
    $('body').on('mouseup', doneReordering);

    // When the mouse moves, look into reordering
    $('body').on('mousemove', reorder);

    // Jus cancels the event
    function cancelTextSelection(e) {
      e.preventDefault();
      return false;
    }

    // Determine if the specified mouse-y coordinate
    // should make us perform a move up
    function shouldMoveUp(y) {
      var offset = item.prev().offset();

      return (offset && offset.top > y);
    }

    // Determine if the specified mouse-y coordinate
    // should make us perform a move down
    function shouldMoveDown(y) {
      var next = item.next();
      var offset = next.offset();

      return offset && offset.top + next.height() < y;
    }

    // The mouse is moving... check to see if we need
    // to reorder things, and if so, reorder!
    function reorder(e) {
      if (shouldMoveUp(e.pageY)) {
        item.insertBefore(item.prev());
      } else if (shouldMoveDown(e.pageY)) {
        item.insertAfter(item.next());
      }
    }

    // Clean up all of our event binding when the drag
    // /reorder is completed
    function doneReordering() {
      item.removeClass('reordering-list-item');
      $('body').off('mouseup', doneReordering);
      $('body').off('mousemove', reorder);
      $(document).off('selectstart dragstart', cancelTextSelection);
    }
  });
};
