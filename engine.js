console.log(place);

function makenode(txtstring){
  var node = document.createElement("LI");
  cnvstring = document.createTextNode(txtstring);
  node.appendChild(cnvstring);
  return node;
}

window.onload = function() {
  var isIt, newLine;
  for (var i = 0; i < gud.length; i++) {
    isIt = "Is it just ok? No, it's " + gud[i] + "!";
    console.log(isIt);
    newline = makenode(isIt);
    document.getElementById("canikickit").appendChild(newline);
  }

  Object.keys(bad).forEach(function(key, index) {
    var yepyep = `If your ${key} are ${bad[key]} that's not ${gud[index]}`;
    console.log(yepyep);
    var newline = makenode(yepyep)
    document.getElementById("whatisit").appendChild(newline);
  });

};
