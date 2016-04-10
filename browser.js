var isIE = function(ver){
  var b = document.createElement('b')
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
  return b.getElementsByTagName('i').length === 1
}
if(isIE(6)){
}
if(isIE(7)){
}
if(isIE(8)){
}
