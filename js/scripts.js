$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

//capture all click events and return their id as strings.

document.addEventListener('click', function(e) {
   // user enter tempreature value
    var tempreaturevalue = document.getElementsByClassName('tempreaturevalue');
    // calculated tempreature value 
    var convertedvalue = document.getElementsByClassName('convertedvalue');
    
    switch (e.target.id) {
            
    case "convert-to-fahrenheit-button":
        
           
         if (tempreaturevalue[0].value === "")  {
            alert("Please Enter Value !"); 
             } 
        else {
            convertedvalue[0].value = converttofahrenheit(tempreaturevalue[0].value) + " F"; 
            }    
      
        break;
    case "celsius-to-kelvin-button":
      if (tempreaturevalue[1].value === "")  {
            alert("Please Enter Value !"); 
             } 
        else {
            convertedvalue[1].value = celsiustokelvin(tempreaturevalue[1].value) + " K"; 
            } 
        break;
      case "fahrenheit-to-celsius-button":
      if (tempreaturevalue[2].value === "")  {
            alert("Please Enter Value !"); 
             } 
        else {
            convertedvalue[2].value = fahrenheittocelsius(tempreaturevalue[2].value) + " C"; 
            } 
        break;       
           case "fahrenheit-to-kelvin-button":
      if (tempreaturevalue[3].value === "")  {
            alert("Please Enter Value !"); 
             } 
        else {
            convertedvalue[3].value = fahrenheittokelvin(tempreaturevalue[3].value) + " K"; 
            } 
        break;       
            case "kelvin-to-fahrenheit-button":
      if (tempreaturevalue[4].value === "")  {
            alert("Please Enter Value !"); 
             } 
        else {
            convertedvalue[4].value = kelvintofahrenheit(tempreaturevalue[4].value) + " F"; 
            } 
        break;
            case "kelvin-to-celsius-button":
      if (tempreaturevalue[5].value === "")  {
            alert("Please Enter Value !"); 
             } 
        else {
            convertedvalue[5].value = kelvintocelsius(tempreaturevalue[5].value) + " C"; 
            } 
        break;
}
    
    
    
    
    
});
    


//celsius to fahrenheit

function converttofahrenheit(c) {
    
var f = (c * 9/5) + 32; 
document.getElementById('celsius-to-fahrenheit').style.display = "block";
return f;
    
}
// celsius to kelvin
function celsiustokelvin(c) {
 var k = Number(c) + Number(273.15);
document.getElementById('celsius-to-kelvin').style.display = "block";
return k;
    
}
// fahrenheit-to-celsius
function fahrenheittocelsius(f) {
 
var c =  (f - 32) * 5/9;
document.getElementById('fahrenheit-to-celsius').style.display = "block";
return c;
    
}
// fahrenheit-to-kelvin
function fahrenheittokelvin(f) {
 
var k =  (f - 32) * 5/9 + Number(273.15);
document.getElementById('fahrenheit-to-kelvin').style.display = "block";
return k;
    
}
// kelvin-to-fahrenheit
function kelvintofahrenheit(k) {
 
var f =  (k - 273.15) * 9/5 + Number(32);
document.getElementById('kelvin-to-fahrenheit').style.display = "block";
return f;
    
}
// kelvin-to-celsius
function kelvintocelsius(k) {
 
var c =  Number(k) - Number(273.15);
document.getElementById('kelvin-to-celsius').style.display = "block";
return c;
    
}
