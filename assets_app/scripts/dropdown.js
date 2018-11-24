document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, autoClose=false);
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
});

console.log('9');

document.addEventListener('DOMContentLoaded', function() {
  var i = 1
  console.log(i);
  let test = document.querySelector('.click')
  if test{
    i += 1;
    console.log(i);
  }
});
