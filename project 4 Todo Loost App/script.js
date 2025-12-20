const image= document.getElementById("my");
let ischecked= false;

image.addEventListener("click", function() {
    if(!ischecked){
        image.src="check.png";
        ischecked=true;
    } else {
        image.src="uncheck.png";
        ischecked=false;
    }
});