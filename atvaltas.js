function belepo() {
    var nev=document.getElementById("felhnev").value;
    var jelszo=document.getElementById("jelszo").value;
    var checkbox=document.getElementById("myCheck").checked;
    if(nev=="admin"&& jelszo=="admin1234" && checkbox){
        document.write("Üdv Admin!")
    }

}