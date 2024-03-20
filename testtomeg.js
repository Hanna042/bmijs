function index(){
    var m = document.getElementById("magas").value;
    m = Number(m);
    var t = document.getElementById("suly").value;
    t = Number(t);
    var meter = m/100;
    var Tindex = t/(meter*meter);
    Tindex = Math.round(Tindex*100)/100;
    document.getElementById("eredmeny").innerText = Tindex;

}