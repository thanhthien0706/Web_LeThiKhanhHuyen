function openNav(idopen) {
    document.getElementById(idopen).style.width = "350px";
    document.getElementById("modaCart").style.position = "fixed";
    document.getElementById("modaCart").style.right = "0";
}
  
function closeNav(idClose) {
    document.getElementById(idClose).style.width = "0";
    document.getElementById("modaCart").style.position = "none";
    document.getElementById("modaCart").style.right = "";
}

var chuyen = true;
var chuyen_login = document.querySelectorAll(".chuyen_doi--user");

function chuyenDoi(){

    var textChuyen = document.querySelector(".text_chuyen");
    var headerTitle = document.querySelector('.header-title');
    var textWith = document.querySelectorAll('.text_chuyen_with');

    if(chuyen == true){
        // console.log(headerTitle);
        headerTitle.innerHTML = 'SIGN UP';
        chuyen_login.innerHTML = "Log In";
        textChuyen.innerHTML = "Already a member?";
        for(var i =0 ; i < textWith.length ; i++){
            textWith[i].innerHTML = "Sign up";
        }
        chuyen = false;
    }else if(chuyen == false){
        // console.log(headerTitle);
        headerTitle.innerHTML = 'LOG IN';
        chuyen_login.innerHTML = "Sign Up";
        textChuyen.innerHTML = "New to this site?";
        for(var i =0 ; i < textWith.length ; i++){
            textWith[i].innerHTML = "Logn in";
        }
        chuyen = true;
    }
}

for(var i = 0 ; i <chuyen_login.length ; i++){
    chuyen_login[i].onclick = function(e){
        e.preventDefault();
        chuyenDoi();
    }
}

// mở login uset
function openUser() {
    document.getElementById("boxLogin").style.width = "100%";
}
  
function closeUser() {
    document.getElementById("boxLogin").style.width = "0";
}

var btnChuyenSangEmail = document.getElementById("btnChuyenEmail");

btnChuyenSangEmail.onclick = function() {
    document.getElementById("mainUser").style.display = "none";
    document.getElementById("withEmail").style.display = "block";
}