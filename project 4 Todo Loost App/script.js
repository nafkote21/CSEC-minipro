const image= document.querySelectorAll("img#my");
let ischecked= false;

image.forEach(function(img) {
    img.addEventListener("click", function() {
        if(!ischecked){
            img.src="check.png";
        ischecked=true;
    } else {
        img.src="uncheck.png";
        ischecked=false;
    }
});
});