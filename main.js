//For months
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]; 
      const d = new Date();
      document.getElementById("demo").innerHTML = months[d.getMonth()]; 


//For days or weekdays
const day = ["Mon","Tue","Web","Thu","Fri","Sat","Sun"]; 
    const e = new Date(); 


//For shorter Months 
const newMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]; 
      const f = new Date(); 


//For Date
const g = new Date(); 
       const date = g.getDate(); 


//For FullYear
const h = new Date();
      const fullYear = h.getFullYear(); 




//Defined all the methods 
document.getElementById("paragraph").innerHTML = day[e.getDay()] + " " +  newMonths[f.getMonth()] + " " + date + "," + " " + fullYear; 



//For Time 
const time = setInterval(function(){ 
  const myTime = new Date(); 
document.getElementById("time").innerHTML = myTime.toLocaleTimeString(); 
},1);


//ToggleButton background and color change
function myFunction(){
  var checkbox = document.getElementById("checked"); 
  if(checkbox.checked){
    document.getElementById("background").style.backgroundColor = "black"; 
    document.querySelector(".box").style.translate = "100%"; 
    document.querySelector(".labelcontainer").style.backgroundColor = "#42b9f5";
    document.querySelector(".parent-container").style.backgroundColor = "#080e12";
    document.querySelector(".parent-container").style.color = "#1ce841";
    document.querySelector(".parent-container").style.border = "2px solid #ed4ab7";
    }else{
    document.getElementById("background").style.backgroundColor = "white"; 
    document.querySelector(".box").style.translate = "0%"; 
    document.querySelector(".labelcontainer").style.backgroundColor = "#ccc";   
    document.querySelector(".parent-container").style.backgroundColor = "white";
    document.querySelector(".parent-container").style.color = "black";
    document.querySelector(".parent-container").style.border = "2px solid black";
  }
}