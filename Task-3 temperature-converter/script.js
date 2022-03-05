var lastEdited = "cel";  

document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;
document.getElementById("cel").onchange = function() {
  lastEdited = "cel";
};
document.getElementById("far").onchange = function() {
  lastEdited = "far";
};
document.getElementById("kel").onchange = function() {
  lastEdited = "kel";
};

function convert(temp) {
  var cel = document.getElementById("cel").value;
  cel = parseFloat(cel);
  var far = document.getElementById("far").value;
  far = parseFloat(far);
  var kel = document.getElementById("kel").value;
  kel = parseFloat(kel);
  var conversionC;
  var conversionF;
  var conversionK;

  if (lastEdited === "cel") {
    conversionF = cel * 9 / 5 + 32;
    conversionK = cel + 273;
    document.getElementById("far").value = Math.round(conversionF);
    document.getElementById("kel").value = Math.round(conversionK);
  } 
    else if (lastEdited === "far") {
    conversionC = (far - 32) * 5 / 9;
    conversionK = conversionC + 273;
    document.getElementById("cel").value = Math.round(conversionC);
    document.getElementById("kel").value = Math.round(conversionK);
  } 
    else if (lastEdited === "kel") {
    conversionC = kel - 273;
    conversionF = conversionC * 9 / 5 + 32;
    document.getElementById("cel").value = Math.round(conversionC);
    document.getElementById("far").value = Math.round(conversionF);
  }
  document.getElementById("cel").innerHTML = conversionC;
  document.getElementById("far").innerHTML = conversionF;
  document.getElementById("kel").innerHTML = conversionK;
}
function reset() {
  document.getElementById("cel").value = 0;
  document.getElementById("far").value = 0;
  document.getElementById("kel").value = 0;
}