var btnTranslate = document.querySelector('#button');
var input = document.getElementById("myInput");
var numberOfGrids = document.querySelector("#numberInput");

function myFunction() {
  var filter, ul, li, a, i, txtValue;
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
$(document).ready(function () {
  $("#button").click(function () {
    //  $("#container").empty();
    var x = numberOfGrids.value;
    for (var i = 1; i <= x; i++) {
      $("<div class='squares'></div>").appendTo("#container");
    }
  });

  $(function () {
    $(".drag").draggable();
    $(".drop").droppable({
      drop: function () {
        console.log("dropped")
      }
    });
  });
});