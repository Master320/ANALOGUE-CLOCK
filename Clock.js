var hour = document.getElementById("hour")
var min= document.getElementById("min")
var sec= document.getElementById("sec")
var box=document.getElementsByClassName("container")
function gettime(){
var d = new Date();
var h=d.getHours();
var m=d.getMinutes()
var s= d.getSeconds();

let h360 = 30* h + m / 2 
let m360 = 6 * m
let s360 =  6 * s

hour.style.transform = `rotate(${h360}deg)`;
min.style.transform = `rotate(${m360}deg)`;
sec.style.transform = `rotate(${s360}deg)`;
container.style.transform = `rotate(${s360}deg)`;   
}


setInterval(gettime,1000)
var da = new Date()
var date = da.getDate();
var ma=[1,2,3,4,5,6,7,8,9,10,11,12]
var month=ma[da.getMonth()];
var year=da.getFullYear();
document.getElementById("date").innerHTML= date + " / " + month + " / " + year;
