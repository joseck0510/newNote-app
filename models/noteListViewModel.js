(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.getHTML = function () {
    var notes_array = this.noteList.getNotes();
    var mappedList = notes_array.map(function(note) {
      return '<li><div>' + note.getText() + '</div></li>'
    });
    return '<ul>' + mappedList.join('') + '</ul>'
  };

  exports.NoteListView = NoteListView;

})(this);
