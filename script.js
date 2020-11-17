// hamburger menu

function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "main-menu") {
        x.className += " responsive";
    } else {
        x.className = "main-menu";
    }
}


// dropdown script

function man() {
    document.getElementById("manDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var manDropdown = document.getElementById("manDropdown");
    if (manDropdown.classList.contains('show')) {
        manDropdown.classList.remove('show');
        }
    }
}


function woman() {
    document.getElementById("womanDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var womanDropdown = document.getElementById("womanDropdown");
    if (womanDropdown.classList.contains('show')) {
        womanDropdown.classList.remove('show');
        }
    }
}



// article page script

function openPage(pageName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.borderBottomColor = "";
        tablinks[i].style.color = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.borderBottomColor = 'orange';
    elmnt.style.color = 'black';
}

document.getElementById("defaultOpen").click();



// slideshow script

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}
