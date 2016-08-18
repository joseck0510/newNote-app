var noteList, noteListView;

function setNoteListView() {
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
}

describe( "The note list view", function() {

  it("has a method that returns a HTML markup if there's notes", function() {
    setNoteListView();
    noteList.addNote("Testing sucks!");
    noteList.addNote("I hate testing!");
    asserts.isTrue(noteListView.getHTML() === "<ul><li><div>Testing sucks!</div></li><li><div>I hate testing!</div></li></ul>");
  });

  it("getHTML doesn't returns markup if there's no notes", function() {
    setNoteListView();
    asserts.isTrue(noteListView.getHTML() === null);
  });

  it("limits notes to the first 20 characters of note in note list view", function() {
    var string_1 = "This is a long note so I can test if characters are limited";
    var string_2 = "This is also a very long note so I can test if characters are limited";
    setNoteListView();
    noteList.addNote(string_1);
    noteList.addNote(string_2);
    var shorterString = "<ul><li><div>" + string_1.substring(0,20) + "</div></li><li><div>" + string_2.substring(0,20) + "</div></li></ul>"
    asserts.isTrue(noteListView.getHTML() === shorterString)
  });


});
