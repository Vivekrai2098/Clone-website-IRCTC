function shyam(){


var x=new Date()
var date=x.getDate()
var year=x.getFullYear()
var y=x.getMonth()
var hour=x.getHours()
var min=x.getMinutes()
var sec=x.getSeconds()

var month=["jan","feb","mar","apri","may","jun","july","august","september","october","november","december"]
jo=month[y]

var c=document.getElementById("time").innerHTML=date+"-"+jo+"-"+year+"["+hour+":"+min+":"+sec+"]";
}
setInterval(shyam,1000)