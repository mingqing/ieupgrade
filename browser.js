var isIE=!!window.ActiveXObject;
var isIE6=isIE&&!window.XMLHttpRequest;
var isIE8=isIE&&!!document.documentMode;
var isIE7=isIE&&!isIE6&&!isIE8;

if (isIE){
  if (isIE6){
    alert("ie6");
  } else if (isIE7){
    alert("ie7");
  } else if (isIE8){
    alert("ie8");
  }
}
