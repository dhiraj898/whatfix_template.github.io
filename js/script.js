
function openbox(evt, dname, dimga){
    var i, x, tablinks,y;
    console.log(dname)
  x = document.getElementsByClassName("data");
  y = document.getElementsByClassName("dimg");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";

  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active1"," ");
  }
  document.getElementById(dname).style.display = "block";
  document.getElementById(dimga).style.display = "block";
  console.log(dimga);
  evt.currentTarget.className += " active1";
}


$(document).ready(function() {

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active-acc');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active-acc');
    });

});