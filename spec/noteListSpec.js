describe("Note List Model", function() {

  it("returns an empty array at start", function() {
    var noteList = new NoteList();
    asserts.isTrue(Array.isArray(noteList.getNotes()));
  });


  it("adds a new note", function() {
    var noteList = new NoteList();
    noteList.addNote('My favourite language is Fortran 77');
    noteList.addNote('My favourite language is Javascript');
    testNote = noteList.notes[0];
    asserts.isTrue(testNote instanceof Note);
    asserts.isTrue(testNote.getText() === 'My favourite language is Fortran 77');
  });

  it("has a method that will return stored notes", function() {
    var note_list = new NoteList();
    note_list.addNote("note1");
    note_list.addNote("note2");
    asserts.isTrue(note_list.getNotes() === note_list.notes );

  });
});
