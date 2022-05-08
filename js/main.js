var previews = document.querySelectorAll(".preview");

previews.forEach(function (item, index, array) {
  var items = array.length;
  setInterval(function () {
    for (var i = 0; i <= items; i++) {
      if (item.classList.contains("state-" + i)) {
        item.classList.remove("state-" + i);
        if (i === 0) {
          item.classList.add("state-" + items);
        } else {
          item.classList.add("state-" + (i - 1));
        }
      }
    }
  }, 3000);
});
