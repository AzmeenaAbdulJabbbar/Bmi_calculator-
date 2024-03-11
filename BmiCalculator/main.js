
function calculateBmi() {

let weight = document.getElementById("weight").value 
let height= document.getElementById("height").value

let bmi = ( weight / (height*height)*703);

document.getElementById("heading").innerHTML = "your bmi is" ;
document.getElementById("bmi_output").innerHTML = bmi.toFixed();

if (bmi <= 18.5){
    document.getElementById("message").innerHTML ="pthar rkho jaib m wrna urh jana hai "
}
else  if (bmi > 18.5 && bmi <=24.9)
document.getElementById("message").innerHTML ="normal banda he ro too"

else {
document.getElementById("message").innerHTML ="bs kro kha kha kai marna hai kia "
}
}


