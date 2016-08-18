(function(exports) {

  function NoteController(list) {
    this.list = list;
  }

  NoteController.prototype.insertList = function () {
      var noteListView = new NoteListView(this.list);
      var appDiv = document.getElementById("app");
      appDiv.innerHTML = noteListView.getHTML();
  };

  exports.NoteController = NoteController;

})(this);
