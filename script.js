var mesiversario=new Date("Aug 25, 2022 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distanza = mesiversario - now;
    console.log(mesiversario);
    var giorni = Math.floor(distanza / (1000 * 60 * 60 * 24));
    var ore = Math.floor((distanza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuti = Math.floor((distanza % (1000 * 60 * 60)) / (1000 * 60));
    var secondi = Math.floor((distanza % (1000 * 60)) / 1000);
    document.getElementById("data").innerText="Giorni: "+giorni+"\nOre: "+ore+"\nMinuti: "+minuti+"\nSecondi: "+secondi;
    if (distanza < 0) {
        window.location.replace("unlocked.html");
    }
  }, 1000);