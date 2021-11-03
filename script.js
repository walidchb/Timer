var portes_ouvertes = new Date("Sep 25, 2022 15:37:25").getTime();

var timer = function() {
var today_date = new Date().getTime();
var remainning_time = portes_ouvertes - today_date ;

var days = Math.floor(remainning_time / (1000 * 60 * 60 * 24));
var hours = Math.floor((remainning_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((remainning_time % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((remainning_time % (1000 * 60)) / 1000);

document.getElementById("time").innerHTML = returnData(days) + " : " + returnData(hours) + " : "
  +returnData(minutes)  + " : " + returnData(seconds) ;
}

document.getElementById("time").style.fontSize="50px";

setInterval(timer,1000);


function returnData(input) {
    return input > 9 ? input : `0${input}`
  }
