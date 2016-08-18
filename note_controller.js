(function(exports) {

  function NoteController(list) {
    this._list = list;
  }

  NoteController.prototype.insertList = function () {
    window.onload = function() {
      var noteListView = new NoteListView(this._list);
      var appDiv = document.getElementById("app");
      appDiv.innerHTML = noteListView.getHTML();
    };
  };

  exports.NoteController = NoteController;

})(this);
