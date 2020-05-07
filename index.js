console.log("works");

var M, options;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instance = M.Collapsible.init(elems, options);
    instance.open(1);
  });

function toggleAriaExpanded(Elemento) {
  console.log(Elemento);
  var x = Elemento.getAttribute("aria-expanded");
  console.log(x);
  if (x == "true") {
    x = "false"
  } else {
    x = "true"
  }
  Elemento.setAttribute("aria-expanded", x);
}



