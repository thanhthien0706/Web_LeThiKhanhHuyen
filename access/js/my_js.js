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


// sign up signin bằng face google
var chuyen = true;
var chuyen_login = document.querySelector(".chuyen_doi--user");

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

chuyen_login.onclick = function(e){
    e.preventDefault();
    chuyenDoi();
}

// sign up signin bằng email
var chuyenEmail = true;
var chuyenLoginEmail = document.querySelector(".chuyen_text--email");

function chuyenDoiEmail(){

    var textAnsEmail = document.querySelector(".text_ans-email");
    var headerTitle = document.querySelector('.header-title-1');
    var btnSubmit = document.querySelector('.btn_submit');
    var textWith = document.querySelector(".chuyen_doi--01");

    if(chuyenEmail == true){
        // console.log(headerTitle);
        headerTitle.innerHTML = 'SIGN UP';
        chuyenLoginEmail.innerHTML = "Log In";
        textAnsEmail.innerHTML = "Already a member?";
        btnSubmit.value = 'Sign Up';
        textWith.innerHTML = 'log in';
        chuyenEmail = false;
    }else if(chuyenEmail == false){
        // console.log(headerTitle);
        headerTitle.innerHTML = 'LOG IN';
        chuyen_login.innerHTML = "Sign Up";
        textAnsEmail.innerHTML = "New to this site?";
        btnSubmit.value = 'Log In';
        textWith.innerHTML = 'sign up';
        chuyenEmail = true;
    }
}

chuyenLoginEmail.onclick = function(e){
    e.preventDefault();
    chuyenDoiEmail();
}

// mở login uset
function openUser() {
    document.getElementById("boxLogin").style.width = "100%";
}
  
function closeUser() {
    document.getElementById("boxLogin").style.width = "0";
}

// chuyen chế độ login signup
var btnChuyenSangEmail = document.getElementById("btnChuyenEmail");

btnChuyenSangEmail.onclick = function() {
    document.getElementById("mainUser").style.display = "none";
    document.getElementById("withEmail").style.display = "flex";
}

function chuyenCheDo(){
    document.getElementById("mainUser").style.display = "flex";
    document.getElementById("withEmail").style.display = "none";
}


// cộng sản phẩm 
var itemPluss = document.querySelector('.box_add--sp .item_pluss');
var itemMinus = document.querySelector('.box_add--sp .item_minus');
var inputAddSp = document.querySelector('.input_add--sp')

var maxInputAdd = Number(inputAddSp.max);
var minInputAdd = Number(inputAddSp.min);
var stepInputAdd = Number(inputAddSp.step);

itemPluss.onclick = function(e){
    if(minInputAdd < maxInputAdd){
        minInputAdd = minInputAdd+stepInputAdd;
        inputAddSp.value = minInputAdd;
    }
}

itemMinus.onclick = function(e){
    if(minInputAdd >= 1){
        minInputAdd = minInputAdd-stepInputAdd;
        inputAddSp.value = minInputAdd;
    }
}