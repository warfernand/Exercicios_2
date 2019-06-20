window.onload = function() {
    tela = document.getElementById("tela");
 }
 var t = false; 
 var acumularTime = 0; 
 function iniciar () {
          if (t == false) { 
             timeInicial = new Date();
             control = setInterval(cronometro,10);
             t = true;
             }
          }
 function cronometro () { 
          timeAtual = new Date();
          acumularTime = timeAtual - timeInicial;
          acumularTime2 = new Date();
          acumularTime2.setTime(acumularTime); 
          ss = Math.round(acumularTime2.getSeconds()/1);
          mm = acumularTime2.getMinutes();
          hh = acumularTime2.getHours()-21;
          if (ss < 10) {ss = "0"+ss;} 
          if (mm < 10) {mm = "0"+mm;}
          if (hh < 10) {hh = "0"+hh;}
          tela.innerHTML = hh+" : "+mm+" : "+ss;
          }
 
 function parar () { 
          if (t == true) {
             clearInterval(control);
             t = false;
             }     
          }      
 
 function resume () {
          if (t == false) {
             timeAtual2 = new Date();
             timeAtual2 = timeAtual2.getTime();
             acumularResume = timeAtual2-acumularTime;
             
             timeInicial.setTime(acumularResume);
             control = setInterval(cronometro,10);
             t = true;
             }     
          }