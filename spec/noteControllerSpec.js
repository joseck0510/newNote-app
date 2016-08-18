describe("Note List Controller", function() {

  it("controller converts notes to html string and updates view", function() {
    var list = new NoteList();
    list.addNote("I heart JS");
    var controller = new NoteController(list);
    var appDiv = document.createElement('div', {id: 'app'});
      document.getElementById = function() {
        return appDiv;
      }

      var listView = new NoteListView(list);

      controller.insertList();

      asserts.isTrue(appDiv.innerHTML === listView.getHTML())

  });
});
