(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.toHTML = function() {
    var noteHTML = "<div>" + this.note + "</div>";
    return noteHTML;
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
