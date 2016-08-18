var list = new NoteList();
list.addNote("Favourite drink: seltzer");
list.addNote("Favourite food: chocolate");
var controller = new NoteController(list);
controller.insertList();
