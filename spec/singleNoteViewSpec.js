describe("Single Note View", function() {

  it("Displays the contents of a note model in HTML in a single note view", function() {
    note = new Note("I am a note");
    singleNoteView = new SingleNoteView(note);
    singleNoteView.toHTML();
    asserts.isTrue(singleNoteView.note = "<div>I am a note</div>");
  });

});
