$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});



// ============================================ //

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}



// ============================================ //

function openNav() {
  document.getElementById("mySidenav").style.width = "250px"
  document.getElementById("main").style.marginLeft = "250px"
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
  document.getElementById("main").style.marginLeft = "0"
  document.body.style.backgroundColor = "white";
}