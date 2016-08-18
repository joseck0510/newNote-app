(function(exports) {

  var listView;

  function NoteController() {
    var list = new NoteList();
    var note = new Note("Favourite drink: seltzer");

    list.addNote(note);

    listView = new NoteListView(list);
  }

  NoteController.prototype.insertList = function () {
    // window.onload = function() {
      var appDiv = document.getElementById("app");
      appDiv.innerHTML = listView["_allNotes"].getHTML();
    };
  // };

  exports.NoteController = NoteController;

})(this);
