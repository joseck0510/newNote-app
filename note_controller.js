(function(exports) {

  function changeText() {
    window.onload = function() {
    var appDiv = document.getElementById("app");
    appDiv.innerHTML = "Howdy!";
  };
}
  exports.changeText = changeText;
})(this);

changeText();
